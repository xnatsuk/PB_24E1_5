from fastapi import APIRouter

from src.api import SessionDependency, CurrentUser, NoAuthDependency
from src.schemas import Posts, PostCreate, PostUpdate
from src.services import posts

router = APIRouter()


@router.get("")
async def get_all(db: NoAuthDependency) -> list[Posts]:
    return await posts.get_all(db=db)


@router.get("/{id}")
async def get_by_id(db: NoAuthDependency, topic_id: int) -> Posts | None:
    return await posts.get(db=db, id=topic_id)


@router.get("/author/{id}")
async def get_by_author_id(db: SessionDependency, user: CurrentUser) -> list[Posts]:
    return await posts.get_multi_by_owner(db=db, author_id=user.user)


@router.post("/")
async def create_topic(db: SessionDependency, topic_in: PostCreate) -> Posts:
    return await posts.create(db=db, obj_in=topic_in)


@router.put("/{id}")
async def update_topic(db: SessionDependency, topic_in: PostUpdate) -> Posts:
    return await posts.update(db=db, obj_in=topic_in)


@router.post("/delete/{id}")
async def delete_topic(db: SessionDependency, topic_id: int) -> Posts:
    return await posts.delete(db=db, id=topic_id)
