import logging
import os
from typing import ClassVar

from dotenv import load_dotenv
from pydantic import ConfigDict, Field
from pydantic_settings import BaseSettings

log_format = logging.Formatter("%(asctime)s : %(levelname)s - %(message)s")
root_logger = logging.getLogger()
root_logger.setLevel(logging.INFO)
stream_handler = logging.StreamHandler()
stream_handler.setFormatter(log_format)
root_logger.addHandler(stream_handler)
logger = logging.getLogger(__name__)

load_dotenv()


class Settings(BaseSettings):
    SUPABASE_URL: str = Field(default_factory=lambda: os.environ.get("SUPABASE_URL"))
    SUPABASE_KEY: str = Field(default_factory=lambda: os.environ.get("SUPABASE_KEY"))

    Config: ClassVar[ConfigDict] = ConfigDict(arbitrary_types_allowed=True)


settings = Settings()
