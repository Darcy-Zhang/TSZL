import os

from flask import Flask, render_template, send_file


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(SECRET_KEY="dev")

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)
    
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
    
    @app.route('/')
    def hello():
        return render_template('map/dots.html')


    # @app.route('/data')
    # def getData():
    #     return send_file('/static/HK.json')

    from . import map
    app.register_blueprint(map.bp)
    
    return app

