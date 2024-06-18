from typing import ClassVar

from src.schemas.base_schema import CreateBase, UpdateBase, InDbBase, ResponseBase


class MessageCreate(CreateBase):
    content: str


class MessageUpdate(UpdateBase):
    user_id: str
    post_id: int
    content: str


class MessageInDB(InDbBase):
    user_id: str
    post_id: int
    content: str
    created_at: str


class Messages(MessageInDB, ResponseBase):
    table_name: ClassVar[str] = "messages"
