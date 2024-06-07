from typing import ClassVar

from src.schemas.base_schema import CreateBase, UpdateBase, InDbBase, ResponseBase


class MessageCreate(CreateBase):
    id: int
    content: str


class MessageUpdate(UpdateBase):
    id: int
    user_id: str
    post_id: int
    content: str


class Messages(ResponseBase):
    id: int
    user_id: str
    post_id: int
    content: str

    table_name: ClassVar[str] = "messages"


class MessageInDB(InDbBase):
    id: int
    user_id: str
    post_id: int
    content: str
