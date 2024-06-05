from fastapi import APIRouter

from src.api import SessionDependency, CurrentUser, NoAuthDependency
from src.schemas import Topics, TopicCreate, TopicUpdate
from src.services import topics

router = APIRouter()


@router.get("/")
async def get_all(db: NoAuthDependency) -> list[Topics]:
    return await topics.get_all(db=db)


@router.get("/{id}")
async def get_by_id(db: NoAuthDependency, topic_id: int) -> Topics | None:
    return await topics.get(db=db, id=topic_id)


@router.get("/author/{id}")
async def get_by_author_id(db: SessionDependency, user: CurrentUser) -> list[Topics]:
    return await topics.get_multi_by_owner(db=db, author_id=user.user)


@router.post("/")
async def create_topic(db: SessionDependency, topic_in: TopicCreate) -> Topics:
    return await topics.create(db=db, obj_in=topic_in)


@router.put("/{id}")
async def update_topic(db: SessionDependency, topic_in: TopicUpdate) -> Topics:
    return await topics.update(db=db, obj_in=topic_in)


@router.post("/delete/{id}")
async def delete_topic(db: SessionDependency, topic_id: int) -> Topics:
    return await topics.delete(db=db, id=topic_id)
