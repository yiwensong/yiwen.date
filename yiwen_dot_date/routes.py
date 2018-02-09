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


@app.errorhandler(404)
def page_not_found(exception):
    return flask.render_template('404.html'), 404
