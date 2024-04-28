from flask import Blueprint
from helpers.config import load_config

topics_data = Blueprint('topics_data', __name__)


@topics_data.route('/topics', methods=['GET'])
def list_topics():
    topics = load_config('topics_data.json')
    print('topics data:', topics)

    return topics
