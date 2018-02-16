import flask

from flask import Flask

app = Flask('yiwen_dot_date')


@app.before_request
def before_request():
    if flask.request.url.startswith('http://'):
        url = flask.request.url.replace('http://', 'https://', 1)
        code = 301
        return flask.redirect(url, code=code)


@app.route('/')
def index():
    content = 'yiwen.date!'
    return flask.render_template('index.html', content=content)


@app.route('/submit_response', methods=['POST'])
def response():
    form = flask.request.form
    return


@app.route('/CNAME')
def cname():
    return app.send_static_file('CNAME')


@app.errorhandler(404)
def page_not_found(exception):
    return flask.render_template('404.html'), 404
