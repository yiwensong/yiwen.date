import smtplib
import flask
import yaml

from flask import Flask
from flask_mail import Mail
from flask_mail import Message

app = Flask('yiwen_dot_date')

MAIL_USERNAME = 'yiwen.date@gmail.com'
MAIL_APP_KEY_FILE = '/etc/api_keys/gmail/gmail_app_pw.yaml'
MAIL_SERVER = 'smtp.gmail.com'
MAIL_PORT = 587

with open(MAIL_APP_KEY_FILE, 'r') as pw_key_file:
    password = yaml.load(pw_key_file)
app.config.update(
    MAIL_SERVER=MAIL_SERVER,
    MAIL_PORT=MAIL_PORT,
    MAIL_USE_TLS=True,
    MAIL_USERNAME=MAIL_USERNAME,
    MAIL_PASSWORD=password,
)
mail = Mail(app)

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
    recipient_name = request_data['name']
    recipient_email = request_data['email']
    incoming_message = request_data['message']

    outbound = Message(
        subject='Thanks for reaching out through yiwen.date!',
        sender=('yiwen song', MAIL_USERNAME),
        recipients=[recipient_email, MAIL_USERNAME],
        html=flask.render_template('email.html', name=recipient_name)
    )
    mail.send(outbound)

    inbound = Message(
        subject=f'''Message from {recipient_name} at {recipient_email}''',
        sender=(recipient_name, MAIL_USERNAME),
        recipients=[MAIL_USERNAME],
        body=incoming_message,
    )
    mail.send(inbound)


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
