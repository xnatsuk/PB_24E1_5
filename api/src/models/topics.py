from dataclasses import dataclass


@dataclass(init=False)
class TopicModel:
    title: str
    likes: int
    messages: int
    description: str
