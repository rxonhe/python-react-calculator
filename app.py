from flask import Flask
from flask_cors import CORS
from context_manager.context_manager import ContextManager

app = Flask(__name__)
CORS(app)
ContextManager.append(app)

if __name__ == "__main__":
    ContextManager.start()
