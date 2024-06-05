from typing import Any, Dict

from gotrue import User
from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str


class UserSession(Token, User):
    pass


class UserCreate(BaseModel):
    email: str
    password: str
    user_metadata: Dict[str, Any]


class UserLogin(BaseModel):
    email: str
    password: str


class UserData(BaseModel):
    user_id: str
    email: str
    user_metadata: Dict[str, Any]
