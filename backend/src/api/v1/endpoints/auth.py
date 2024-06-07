from typing import Literal

from fastapi import Request, APIRouter, HTTPException
from gotrue import AuthResponse
from gotrue.errors import AuthApiError
from starlette.responses import RedirectResponse

from src.schemas import UserCreate, UserLogin
from src.services import User

router = APIRouter()


@router.post("/register")
async def register_user(register: UserCreate) -> dict[str, str]:
    try:
        response = await User.register(
            username=register.user_metadata.get("username"),
            email=register.email,
            password=register.password
        )
        if not response.user.identities:
            raise HTTPException(status_code=401, detail="User already exists")
        return {"message": "Email confirmation sent. Check your inbox."}
    except AuthApiError as e:
        raise HTTPException(status_code=400, detail=str(e))


# Not yet implemented
@router.get("/authorize", include_in_schema=False)
async def auth_provider(provider: Literal['google'], redirect_to: str | None = None) -> RedirectResponse:
    try:
        provider_response = await User.login_provider(provider=provider, redirect_to=redirect_to)
        response = RedirectResponse(provider_response.url, status_code=302)
        return response
    except AuthApiError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/login")
async def login(user: UserLogin) -> AuthResponse:
    return await User.login(user.email, user.password)


@router.post("/logout")
async def logout(request: Request) -> None:
    try:
        header_auth = request.headers.get("Authorization")
        if not header_auth:
            raise HTTPException(status_code=401, detail="Authorization header missing")
        token_type, access_token = header_auth.split(" ")
        response = await User.logout(access_token)
        return response
    except AuthApiError as e:
        raise HTTPException(status_code=400, detail=str(e))
