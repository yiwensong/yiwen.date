import flask

from flask import Flask

app = Flask('yiwen_dot_date')


@app.route('/')
def index():
    content = 'yiwen.date!'
    return flask.render_template('index.html', content=content)

@app.route('/CNAME')
def cname():
    return app.send_static_file('CNAME')
