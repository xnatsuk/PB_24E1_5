from typing import ClassVar

from pydantic import BaseModel, ConfigDict


class CreateBase(BaseModel):
    pass


class UpdateBase(BaseModel):
    id: str | int


class InDbBase(BaseModel):
    id: str | int


# return to client
class ResponseBase(InDbBase):
    table_name: ClassVar[str] = "ResponseBase".lower()
    Config: ClassVar[ConfigDict] = ConfigDict(
        extra="ignore", arbitrary_types_allowed=True
    )
