from typing import ClassVar

from src.schemas.base_schema import CreateBase, UpdateBase, InDbBase, ResponseBase


class PostCreate(CreateBase):
    title: str
    description: str | None = None
    content: str | None = None
    likes: int = 0


class PostUpdate(UpdateBase):
    id: int
    author: str
    title: str | None = None
    description: str | None = None
    content: str | None = None
    likes: int


class Posts(ResponseBase):
    id: int
    author: str
    title: str
    description: str | None = None
    content: str | None = None
    likes: int

    table_name: ClassVar[str] = "posts"


class PostInDB(InDbBase):
    id: int
    author: str
    title: str
    description: str | None = None
    content: str | None = None
    likes: int
