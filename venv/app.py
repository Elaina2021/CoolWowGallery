# Time: 2022/6/22  15:53
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def hello_world():
    return 'Welcome to our Website!'


if __name__ == '__main__':
    app.run()