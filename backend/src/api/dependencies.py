from typing import Annotated

from fastapi import Depends, HTTPException, Security
from fastapi.security import OAuth2PasswordBearer
from gotrue import Session
from supabase_py_async import AsyncClient, create_client

from src.config import settings, logger
from src.schemas import SupabaseDB

token_key = OAuth2PasswordBearer(tokenUrl="api/v1/token")

_supabase_client: AsyncClient | None = None
_supabase_db: SupabaseDB | None = None


async def get_supabase_client() -> AsyncClient:
    global _supabase_client
    if _supabase_client is None:
        logger.info("Creating supabase client")
        _supabase_client = await create_client(
            settings.SUPABASE_URL,
            settings.SUPABASE_KEY,
        )
    return _supabase_client


# for public routes
NoAuthDependency = Annotated[AsyncClient, Depends(get_supabase_client)]


async def get_current_user(
        supabase: Annotated[AsyncClient, Depends(get_supabase_client)],
        authorization: Annotated[str, Security(token_key)]
) -> Session | None:
    if not authorization:
        raise HTTPException(status_code=401, detail="Unauthorized")

    tokens = authorization.split(" ")
    if len(tokens) != 2:
        raise HTTPException(status_code=401, detail="Invalid header format")

    access_token, refresh_token = tokens
    try:
        auth_response = await supabase.auth.set_session(
            access_token=access_token,
            refresh_token=refresh_token,
        )

        Session(**auth_response.user.model_dump(mode="json"))
        return auth_response
    except Exception as e:
        logger.error(e)
        raise HTTPException(status_code=401, detail="Invalid token")


CurrentUser = Annotated[Session, Depends(get_current_user)]


async def get_supabase_db(user: CurrentUser):
    client: AsyncClient | None = None
    if client is None:
        client = await create_client(
            settings.SUPABASE_URL,
            settings.SUPABASE_KEY,
            access_token=user.session.access_token
        )
        yield client


# when access to db is needed
SessionDependency = Annotated[AsyncClient, Depends(get_supabase_db)]
