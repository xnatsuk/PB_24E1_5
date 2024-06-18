from src.schemas import Messages, MessageCreate, MessageUpdate
from src.services.base_service import BaseService


class MessageService(BaseService[Messages, MessageCreate, MessageUpdate]):
    pass


messages = BaseService(model=Messages)
