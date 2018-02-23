import smtplib
import flask
import yaml

from flask import Flask

app = Flask('yiwen_dot_date')

GMAIL_USERNAME = 'yiwen.date@gmail.com'
GMAIL_APP_KEY_FILE = '/etc/api_keys/gmail/gmail_app_pw.yaml'

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
    request_data = yaml.load(flask.request.data)
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    with open(GMAIL_APP_KEY_FILE, 'r') as pw_key_file:
        password = yaml.load(pw_key_file)
        server.login(GMAIL_USERNAME, password)
    msg = f'''Hello {request_data['name']}!
I'm glad that you enjoyed my website.
    - yiwen'''
    print (request_data)
    server.sendmail(GMAIL_USERNAME, request_data['email'], msg)

    message_to_me = f'''{request_data['message']}

----------
from: {request_data['name']}
email: {request_data['email']}'''
    server.sendmail(GMAIL_USERNAME, GMAIL_USERNAME, message_to_me)
    server.quit()

    response = app.response_class(
        response='{}',
        status=200,
        mimetype='application/json',
    )
    return response


@app.route('/CNAME')
def cname():
    return app.send_static_file('CNAME')


@app.errorhandler(404)
def page_not_found(exception):
    return flask.render_template('404.html'), 404
