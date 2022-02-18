import datetime
from json import dump
from flask import Flask, request, render_template
from werkzeug.utils import secure_filename
import os
from handler import postgres_handler
from flask import request, Response

app = Flask(__name__)
app.config['DEBUG'] = True


@app.before_request
def log_request_info():
    app.logger.info('Headers: %s', request.headers)
    app.logger.info('Body: %s', request.get_data())
    rule = request.url_rule
    app.logger.info('Route: %s', rule)


@app.route('/ping')
def ping():
    return json.dump({"test": 'pong'})


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
