from thinkledger.database.postgres.postgres_schema import Institution
from sqlmodel import select, Session
from thinkledger.utils.auth_utils import auth_service
from thinkledger.utils.tasks import TaskPriority, Tasks, get_task, get_task_args
from thinkledger.utils.logger import log
from thinkledger.database.redis.redis import get_redis
from thinkledger.database.postgres.postgres_db import get_db
from thinkledger.google_core.google_sheet import GoogleSheet, TransactionSheet, JournalEntrySheet
from thinkledger.utils.context import DEBUG
from thinkledger.plaid_core.plaid import get_transactions, parse_transactions


# TODO: Refactor
def handle_high_priority_task(db: Session, user_id: str) -> None:
  # Check for tasks of High level priority
  with get_redis() as redis:
    try: task_len = redis.llen(f"task:{TaskPriority.HIGH.value}:{user_id}")
    except Exception as e:
      log.error(f"Error getting high priority tasks length from redis: {e}")
      return None

    if not isinstance(task_len, int): raise ValueError("Task length must be an integer")

    if task_len == 0:
      if DEBUG >= 1: log.info(f"No high priority tasks for user {user_id}")
      return None

    for _ in range(task_len):
      try: value = redis.rpop(f"task:{TaskPriority.HIGH.value}:{user_id}")
      except Exception as e:
        log.error(f"Error popping high priority task from redis: {e}")
        return None

      if value is None: continue
      if DEBUG >= 1: log.info(value)
      if not isinstance(value, str): raise ValueError("Value must be a string")
      task = get_task(value)
      if task == Tasks.setup_spreadsheet.value:
        try:
          google_sheet = GoogleSheet(redis=redis, user_id=user_id, init=True)
          if DEBUG >= 1: log.info(google_sheet.spreadsheet_url)
          # TODO: Email spreadsheet_url to the user
        except Exception as e:
          # User email address is stored in redis
          # TODO: if GoogleSheet instantiation fails send an email to the developer
          # and notify the user via email
          log.error(e)
      elif task == Tasks.sync_transaction.value:
        spreadsheet_id = get_task_args(value)[0]
        if DEBUG >= 1: log.info(f"spreadsheet_id: {spreadsheet_id}")
        # Get all connect institutions
        try: institutions = db.exec(select(Institution).where(Institution.user_id == user_id))
        except Exception as e: raise Exception(f"Error getting institution: {e}")
        if institutions is None: raise ValueError("No institutions found")
        transaction_sheet = TransactionSheet(redis, user_id)
        journal_entry_sheet = JournalEntrySheet(redis, user_id)

        for ins in institutions:
          # Generate and append transactions for each institution
          for t in get_transactions(ins.access_token):
            parsed_transactions = parse_transactions(t, db)
            for p in parsed_transactions:
              # Add transaction
              if DEBUG >= 2: print("transaction", p)
              is_added = transaction_sheet.append(spreadsheet_id, [p])
              if not is_added: log.error("Error adding transaction")

              # Add journal entry
              # time.sleep(1)
              # NOTE: possible rate limit issue
              journal_entry = journal_entry_sheet.generate(p)
              assert journal_entry is not None, "Error creating journal entry"
              is_added_entry = journal_entry_sheet.append(spreadsheet_id, journal_entry)
              if not is_added_entry: log.error("Error creating journal entry")

  return None


def handle_low_priority_task(user_id: str) -> None:
  # Check for tasks of low level priority
  with get_redis() as redis:
    try: task_len = redis.llen(f"tasks:{TaskPriority.LOW}:{user_id}")
    except Exception as e:
      log.error(f"Error getting low priority tasks from redis: {e}")
      return

    if task_len != 0:
      # Handle low task offload
      try: task = redis.rpop(f"tasks:{TaskPriority.LOW}:{user_id}")
      except Exception as e:
        log.error(e)
        return
      assert isinstance(task, str)  # TODO: lazy fix
      print(task)
      return


def check_requirements(db: Session, user_id: str) -> bool:
  """
  For the requirements function to pass a user needs to connect at least one bank, and
  Grant access to google drive and google sheets.
  """
  # TODO: Check is the user has "Google App Script" enabled
  # Sending a demo request

  # Check for institutions
  try: ins = db.exec(select(Institution)).all()
  except Exception as e:
    log.error(f"Error getting institutions from database: {e}")
    return False

  if len(ins) == 0:
    log.info("No institutions")
    return False

  is_auth = auth_service(user_id)
  if not is_auth:
    log.info("Invalid or expired google service tokens")
    return False
  return True


def handle_task(user_id: str) -> None:
  with get_db() as db:
    is_passed = check_requirements(db, user_id)
    if is_passed:
      try: handle_high_priority_task(db, user_id)
      except Exception as e: log.error(e)
      handle_low_priority_task(user_id)
    else: # TODO: Alert user to complete requirement, Some time as passed
      log.info("User did not pass requirement")
  return None
