from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import FastAPI

from src.api import get_supabase_client
from src.config import logger


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    try:
        await get_supabase_client()
        logger.info("life span started")
        yield
    finally:
        logger.info("lifespan shutdown")
