SSL_PATH='/etc/keys/yiwen_dot_date/ssl/'
KEYFILE=$(SSL_PATH)'yiwen.date.key'
CERTFILE=$(SSL_PATH)'yiwen.date.crt'

.PHONY: venv
venv: setup.py requirements*.txt
	tox --recreate -e venv

.PHONY: js
js: 
	npm install
	webpack

.PHONY: run
run: venv
	sudo venv/bin/gunicorn --reload --bind 0.0.0.0:80 autoapp:app &
	sudo venv/bin/gunicorn --config gunicorn_conf.py autoapp:app &

.PHONY: devsite
devsite: venv
	venv/bin/gunicorn --reload --bind 0.0.0.0:5000 --keyfile=$(KEYFILE) --certfile=$(CERTFILE) autoapp:app

.PHONY: webpack
webpack:
	webpack --watch
