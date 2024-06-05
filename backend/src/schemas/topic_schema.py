from typing import ClassVar

from src.schemas.base_schema import CreateBase, UpdateBase, InDbBase, ResponseBase


class TopicCreate(CreateBase):
    title: str
    description: str | None = None
    content: str | None = None
    likes: int = 0


class TopicUpdate(UpdateBase):
    id: int
    author: str
    title: str | None = None
    description: str | None = None
    content: str | None = None
    likes: int


class Topics(ResponseBase):
    id: int
    author: str
    title: str
    description: str | None = None
    content: str | None = None
    likes: int

    table_name: ClassVar[str] = "topics"


class TopicInDB(InDbBase):
    id: int
    author: str
    title: str
    description: str | None = None
    content: str | None = None
    likes: int
