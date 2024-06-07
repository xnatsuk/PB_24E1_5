from src.schemas import Messages, MessageCreate, MessageUpdate
from src.services.base_service import BaseService


class MessageService(BaseService[Messages, MessageCreate, MessageUpdate]):
    # async def create(self, db: AsyncClient, *, obj_in: MessageCreate) -> Messages:
    #     return await super().create(db, obj_in=obj_in)
    #
    # async def get(self, db: AsyncClient, *, id: str) -> Messages | None:
    #     return await super().get(db, id=id)
    #
    # async def get_all(self, db: AsyncClient) -> list[Messages] | None:
    #     return await super().get_all(db)
    #
    # async def get_multi_by_owner(self, db: AsyncClient, *, user: UserData) -> list[Messages]:
    #     return await super().get_multi_by_owner(db, user=user)
    #
    # async def update(self, db: AsyncClient, *, obj_in: MessageUpdate) -> Messages:
    #     return await super().update(db, obj_in=obj_in)
    #
    # async def delete(self, db: AsyncClient, *, id: str) -> Messages:
    #     return await super().delete(db, id=id)
    pass


messages = BaseService(model=Messages)
