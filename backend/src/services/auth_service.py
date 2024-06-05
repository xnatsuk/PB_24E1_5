from gotrue.types import AuthResponse, OAuthResponse

from src.api import get_supabase_client


class User:
    @staticmethod
    async def register(username: str, email: str, password: str) -> AuthResponse:
        client = await get_supabase_client()
        response = await client.auth.sign_up({
            "email": email,
            "password": password,
            "options": {
                "data": {
                    "username": username
                }
            }
        }
        )
        return response

    @staticmethod
    async def login(email: str, password: str) -> AuthResponse:
        supabase = await get_supabase_client()
        return await supabase.auth.sign_in_with_password(
            credentials={
                "email": email,
                "password": password
            }
        )

    @staticmethod
    async def login_provider(provider: str, redirect_to: str | None = None) -> OAuthResponse:
        client = await get_supabase_client()
        response = await client.auth.login_provider({
            "provider": provider,
            "options": {
                "redirect_to": redirect_to
            }
        }
        )
        return response

    @staticmethod
    async def logout(token: str) -> None:
        client = await get_supabase_client()
        client.postgrest.auth(token=token)
        client.auth.sign_out()
