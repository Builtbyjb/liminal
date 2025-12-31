import sys
import time
from concurrent.futures import ThreadPoolExecutor
from thinkledger.utils.logger import log
from thinkledger.utils.context import DEBUG
from sqlalchemy import select
from thinkledger.database.postgres.postgres_schema import User
from thinkledger.database.postgres.postgres_db import get_db
from thinkledger.server import run_server
from thinkledger.core import handle_task
from multiprocessing import Process


MAX_WORKERS: int = 5
INTERVAL: int = 2  # secs
PORT: int = 3000


def main() -> None:
    log.info("Running...")
    while 1:
        with get_db() as db:
            users = db.exec(select(User)).scalars().all()

        try:
            if len(users) > 0:
                with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
                    _ = {executor.submit(handle_task(u.id)): u for u in users}
            else:
                if DEBUG >= 1: log.info("No users found in database")

            time.sleep(INTERVAL)
        except KeyboardInterrupt:
            log.info("Shutting down system...")
            time.sleep(2)
            log.info("Shutdown complete")
            sys.exit(0)
        except Exception as e:
            log.error(e)
            sys.exit(1)


if __name__ == "__main__":
    p = Process(target=run_server, args=(PORT, ))
    p.daemon = True
    p.start()
    main()
