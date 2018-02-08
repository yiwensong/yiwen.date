# -*- coding: utf-8 -*-
"""Create an application instance."""
from flask.helpers import get_debug_flag

from yiwen_dot_date.routes import app
# from yiwen_dot_date.settings import DevConfig, ProdConfig

# CONFIG = DevConfig if get_debug_flag() else ProdConfig

# app = create_app(CONFIG)

if __name__=='__main__':
    app.run(host='0.0.0.0', port=5000)
