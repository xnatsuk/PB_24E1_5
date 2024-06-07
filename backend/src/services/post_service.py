from src.schemas import Posts, PostCreate, PostUpdate
from src.services.base_service import BaseService


class TopicService(BaseService[Posts, PostCreate, PostUpdate]):
    # async def create(self, db: AsyncClient, *, obj_in: PostCreate) -> Posts:
    #     return await super().create(db, obj_in=obj_in)
    #
    # async def get(self, db: AsyncClient, *, id: str) -> Posts | None:
    #     return await super().get(db, id=id)
    #
    # async def get_all(self, db: AsyncClient) -> list[Posts] | None:
    #     return await super().get_all(db)
    #
    # async def get_multi_by_owner(self, db: AsyncClient, *, user: UserData) -> list[Posts]:
    #     return await super().get_multi_by_owner(db, user=user)
    #
    # async def update(self, db: AsyncClient, *, obj_in: PostUpdate) -> Posts:
    #     return await super().update(db, obj_in=obj_in)
    #
    # async def delete(self, db: AsyncClient, *, id: str) -> Posts:
    #     return await super().delete(db, id=id)
    pass


posts = BaseService(model=Posts)
