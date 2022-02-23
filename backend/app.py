import json
from flask import Flask, request, render_template
from flask import request, Response
from flask_cors import CORS
app = Flask(__name__)
app.config['DEBUG'] = True
CORS(app)



@app.before_request
def log_request_info():
    app.logger.info('Headers: %s', request.headers)
    app.logger.info('Body: %s', request.get_data())
    rule = request.url_rule
    app.logger.info('Route: %s', rule)


@app.route('/get_file', methods=['GET'])
def get_file():
    data = json.dumps(['test 1', 'test 2'])
    app.logger.info(data)
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
