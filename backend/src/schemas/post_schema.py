from typing import ClassVar, Union

from src.schemas.base_schema import CreateBase, UpdateBase, InDbBase, ResponseBase


class PostCreate(CreateBase):
    title: str
    description: Union[str, None]
    content: str
    likes: int = 0


class PostUpdate(UpdateBase):
    user_id: str
    title: ClassVar[str]
    description: ClassVar[str]
    content: ClassVar[str]
    likes: ClassVar[int]


class PostInDB(InDbBase):
    user_id: str
    title: str
    description: str | None
    content: str
    likes: int
    created_at: str
    updated_at: str


class Posts(PostInDB, ResponseBase):
    table_name: ClassVar[str] = "posts"
