from typing import ClassVar
from pydantic import BaseModel, ConfigDict


class CreateBase(BaseModel):
    pass


class UpdateBase(BaseModel):
    id: str


class InDbBase(BaseModel):
    id: str
    created_at: str
    updated_at: str


# return to client
class ResponseBase(InDbBase):
    table_name: ClassVar[str] = "ResponseBase".lower()
    Config: ClassVar[ConfigDict] = ConfigDict(
        extra="ignore", arbitrary_types_allowed=True
    )
