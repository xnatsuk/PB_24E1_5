from fastapi import APIRouter

from src.api.v1.endpoints import topics, auth

app_router = APIRouter()
app_router.include_router(topics.router, prefix="/topics", tags=["topics"])
app_router.include_router(auth.router, prefix="/auth", tags=["auth"])


