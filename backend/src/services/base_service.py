from typing import Generic, TypeVar

from supabase_py_async import AsyncClient

from src.schemas import UserData, CreateBase, ResponseBase, UpdateBase

ModelType = TypeVar("ModelType", bound=ResponseBase)
CreateSchemaType = TypeVar("CreateSchemaType", bound=CreateBase)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=UpdateBase)


class BaseService(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    def __init__(self, model: type[ModelType]):
        self.model = model

    async def create(self, db: AsyncClient, *, obj_in: CreateSchemaType) -> ModelType:
        data, count = (
            await db
            .table(self.model.table_name)
            .insert(obj_in.model_dump())
            .execute()
        )
        _, created = data
        return self.model(**created[0])  # must be a mapping

    async def get(self, db: AsyncClient, *, id: str) -> ModelType | None:
        data, count = (
            await db
            .table(self.model.table_name)
            .select("*")
            .eq("id", id)
            .execute()
        )
        _, got = data
        return self.model(**got[0]) if got else None

    async def get_all(self, db: AsyncClient) -> list[ModelType]:
        data, count = (
            await db
            .table(self.model.table_name)
            .select("*")
            .execute()
        )
        _, got = data
        return [self.model(**item) for item in got]

    async def get_multi_by_owner(self, db: AsyncClient, *, user: UserData) -> list[ModelType]:
        data, count = (
            await db
            .table(self.model.table_name)
            .select("*")
            .eq("user_id", user.user_id)
            .execute()
        )
        _, created = data
        return self.model(**created[0])

    async def update(self, db: AsyncClient, *, obj_in: UpdateSchemaType) -> ModelType:
        data, count = (
            await db
            .table(self.model.table_name)
            .update(obj_in.model_dump())
            .eq("id", obj_in.id)
            .execute()
        )
        _, updated = data
        return self.model(**updated[0])

    async def delete(self, db: AsyncClient, *, id: str) -> ModelType:
        data, count = (
            await db
            .table(self.model.table_name)
            .delete()
            .eq("id", id)
            .execute()
        )
        _, deleted = data
        return self.model(**deleted[0])
