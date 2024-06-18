from typing import ClassVar, Optional

from pydantic import BaseModel

from src.schemas import ResponseBase


class ProfileBase(BaseModel):
    id: str
    username: str
    pass


class ProfileUpdate(ProfileBase):
    avatar_url: Optional[str]
    score: Optional[int]
    reputation: Optional[str]


class ProfileInDb(ProfileBase):
    avatar_url: Optional[str]
    score: int
    reputation: str


class Profiles(ProfileInDb, ResponseBase):
    table_name: ClassVar[str] = "users"
