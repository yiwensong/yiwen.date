# -*- coding: utf-8 -*-
"""Create an application instance."""
from flask.helpers import get_debug_flag

from yiwen_dot_date.routes import app
application = app # uwsgi magic

if __name__=='__main__':
    app.run(host='0.0.0.0', port=5000)
