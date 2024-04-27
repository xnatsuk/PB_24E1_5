import json


def load_config(config):
    with open(config, 'r', encoding="utf8") as file:
        return json.load(file)
