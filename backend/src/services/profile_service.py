from src.schemas import Profiles, ProfileUpdate, ProfileBase
from src.services.base_service import BaseService


class ProfileService(BaseService[Profiles, ProfileBase, ProfileUpdate]):
    pass


profiles = BaseService(model=Profiles)
