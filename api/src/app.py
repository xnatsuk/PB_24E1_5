from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.url_map.strict_slashes = False

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
