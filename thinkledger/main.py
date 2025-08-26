import sys
import asyncio
import time
from concurrent.futures import ThreadPoolExecutor
from utils.logger import log
from utils.context import DEBUG
from sqlalchemy import select
from database.postgres.postgres_schema import User
from database.postgres.postgres_db import gen_db
from database.redis.redis import gen_redis
from server import run_server
from core import handle_task
from multiprocessing import Process


MAX_WORKERS: int = 5
INTERVAL: float = 0.1  # 100ms
PORT: int = 8080


def main() -> None:
  try:
    db = gen_db()
    if db is None: raise Exception("Failed to get database connection")
  except Exception as e:
    log.error(e)
    sys.exit(1)

  try:
    redis = gen_redis()
    if redis is None: raise Exception("Failed to get Redis connection")
  except Exception as e:
    log.error(e)
    sys.exit(1)

  log.info("Running...")
  while 1:
    try:
      users = db.exec(select(User)).all()
      if len(users) == 0:
        if DEBUG >= 1: log.info("No users found in database")
        continue
      with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        _ = {executor.submit(asyncio.run, handle_task(db, redis, u.id)): u for u in users}
      time.sleep(INTERVAL)
    except KeyboardInterrupt:
      print("\nShutting down")
      sys.exit(0)
    except Exception as e:
      log.error(e)
      sys.exit(1)


if __name__ == "__main__":
  p = Process(target=run_server, args=(PORT, ))
  p.daemon = True
  p.start()
  main()
