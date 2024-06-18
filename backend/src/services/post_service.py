from src.schemas import Posts, PostCreate, PostUpdate
from src.services.base_service import BaseService


class PostService(BaseService[Posts, PostCreate, PostUpdate]):
    pass


posts = BaseService(model=Posts)
