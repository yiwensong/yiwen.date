.PHONY: venv
venv: setup.py requirements*.txt
	tox --recreate -e venv

.PHONY: run
run: venv
	sudo venv/bin/gunicorn --config gunicorn_conf.py autoapp:app

.PHONY: nosslrun
nosslrun: venv
	sudo venv/bin/gunicorn --reload --bind 0.0.0.0:80 autoapp:app

.PHONY: webpack
webpack:
	webpack --watch
