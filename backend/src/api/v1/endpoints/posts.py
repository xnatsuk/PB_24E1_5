from fastapi import APIRouter

from src.api import SessionDependency, NoAuthDependency
from src.schemas import Posts, PostCreate, PostUpdate
from src.services import posts

router = APIRouter()


@router.get("")
async def get_all(db: NoAuthDependency) -> list[Posts]:
    return await posts.get_all(db=db)


@router.get("/{post_id}")
async def get_by_id(db: NoAuthDependency, post_id: str) -> Posts | None:
    int(post_id)
    return await posts.get(db=db, id=post_id)


@router.get("/author/{id}")
async def get_posts_by_user(db: NoAuthDependency, id: str) -> Posts | list[Posts]:
    return await posts.get_multi_by_owner(db=db, id=id)

@router.post("/")
async def create_post(db: SessionDependency, post_in: PostCreate) -> Posts:
    return await posts.create(db=db, obj_in=post_in)


@router.patch("/{post_id}")
async def update_post(db: SessionDependency, post_in: PostUpdate) -> Posts:
    return await posts.update(db=db, obj_in=post_in)


@router.post("/delete/{post_id}")
async def delete_post(db: SessionDependency, post_id: int) -> Posts:
    return await posts.delete(db=db, id=post_id)
