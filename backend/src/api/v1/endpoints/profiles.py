from fastapi import APIRouter

from src.api import SessionDependency, NoAuthDependency, CurrentUser
from src.schemas import Profiles, ProfileUpdate
from src.services import profiles

router = APIRouter()


@router.get("")
async def get_all(db: NoAuthDependency) -> list[Profiles] | None:
    return await profiles.get_all(db=db)


@router.get("/{id}")
async def get_by_id(db: NoAuthDependency, id: str, ) -> Profiles:
    return await profiles.get(db=db, id=id)


@router.put("/{id}")
async def update_profile(db: SessionDependency, profile_in: ProfileUpdate, user: CurrentUser) -> Profiles:
    return await profiles.update(db=db, obj_in=profile_in, id=user.id)


@router.post("/delete/{id}")
async def delete_profile(db: SessionDependency, profile_id: int) -> Profiles:
    return await profiles.delete(db=db, id=profile_id)
