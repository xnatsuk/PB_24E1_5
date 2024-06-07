from fastapi import APIRouter

from src.api.v1.endpoints import posts, auth

app_router = APIRouter()
app_router.include_router(posts.router, prefix="/posts", tags=["posts"])
app_router.include_router(auth.router, prefix="/auth", tags=["auth"])


