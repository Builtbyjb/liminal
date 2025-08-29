from sqlmodel import create_engine, Session, SQLModel
import os
import sys
from dotenv import load_dotenv
from typing import Any
import contextlib

load_dotenv()

POSTGRES_URL = os.getenv("POSTGRES_URL")

# Create SQLModel engine
if POSTGRES_URL is not None:  engine = create_engine(POSTGRES_URL, echo=False)
else: sys.exit("Could not get postgres url from env variables")


# Dependency to get DB session
@contextlib.contextmanager
def get_db() -> Any:
  with Session(engine) as session:
    try: yield session
    finally: session.close()


# Function to create all tables
def create_db_and_tables() -> None: SQLModel.metadata.create_all(engine)
