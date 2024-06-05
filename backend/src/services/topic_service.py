from supabase_py_async import AsyncClient

from src.schemas import UserData, Topics, TopicCreate, TopicUpdate
from src.services.base_service import BaseService


class TopicService(BaseService[Topics, TopicCreate, TopicUpdate]):
    async def create(self, db: AsyncClient, *, obj_in: TopicCreate) -> Topics:
        return await super().create(db, obj_in=obj_in)

    async def get(self, db: AsyncClient, *, id: str) -> Topics | None:
        return await super().get(db, id=id)

    async def get_all(self, db: AsyncClient) -> list[Topics] | None:
        return await super().get_all(db)

    async def get_multi_by_owner(self, db: AsyncClient, *, user: UserData) -> list[Topics]:
        return await super().get_multi_by_owner(db, user=user)

    async def update(self, db: AsyncClient, *, obj_in: TopicUpdate) -> Topics:
        return await super().update(db, obj_in=obj_in)

    async def delete(self, db: AsyncClient, *, id: str) -> Topics:
        return await super().delete(db, id=id)


topics = BaseService(model=Topics)
