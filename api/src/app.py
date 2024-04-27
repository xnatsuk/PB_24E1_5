from flask import Flask
from flask_cors import CORS

from blueprints.topics import topics_data

app = Flask(__name__)
CORS(app)
app.register_blueprint(topics_data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
