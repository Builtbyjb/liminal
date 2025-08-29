from pydantic import BaseModel
from datetime import date as Date
from typing import List


class JournalAccount(BaseModel):
  name: str
  account_id: str
  amount: str


class JournalEntry(BaseModel):
  date: Date
  description: str
  debit: List[JournalAccount]
  credit: List[JournalAccount]


""" Chat Event type"""


class MembershipCount(BaseModel):
  joinedDirectHumanUserCount: int


class Space(BaseModel):
  name: str
  type: str
  singleUserBotDm: bool
  spaceThreadingState: str
  spaceType: str
  spaceHistoryState: str
  lastActiveTime: str
  membershipCount: MembershipCount
  spaceUri: str


class RetentionSettings(BaseModel):
  state: str
  expiryTimestamp: str


class Thread(BaseModel):
  name: str
  retentionSettings: RetentionSettings


class ThreadName(BaseModel):
  name: str


class User(BaseModel):
  name: str
  displayName: str
  avatarUrl: str
  email: str
  type: str
  domainId: str


class Message(BaseModel):
  name: str
  sender: User
  createTime: str
  text: str
  thread: Thread
  space: Space
  argumentText: str
  retentionSettings: RetentionSettings
  messageHistoryState: str
  formattedText: str


class Common(BaseModel):
  userLocale: str
  hostApp: str


class ChatEvent(BaseModel):
  type: str
  eventTime: str
  message: Message
  user: User
  space: Space
  configCompleteRedirectUrl: str
  common: Common
  thread: ThreadName
