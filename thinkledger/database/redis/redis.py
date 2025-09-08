import redis
import os
import sys
from dotenv import load_dotenv
from typing import Any
import contextlib

load_dotenv()


@contextlib.contextmanager
def get_redis() -> Any:
    redis_url = os.getenv("REDIS_URL")
    if redis_url is None: sys.exit("REDIS_URL environment variable is not set")
    redis_client = redis.Redis.from_url(redis_url, decode_responses=True)
    try: yield redis_client
    finally: redis_client.close()
