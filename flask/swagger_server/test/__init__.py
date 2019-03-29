import logging
import connexion
import os
from flask_testing import TestCase
from flask_session import Session
from flask import session
import redis
from swagger_server.encoder import JSONEncoder


class BaseTestCase(TestCase):

    def create_app(self):
        logging.getLogger('connexion.operation').setLevel('ERROR')
        app = connexion.App(__name__, specification_dir='../swagger/')
        app.app.config['SESSION_TYPE'] = 'redis'
        app.app.config['SESSION_REDIS'] = redis.from_url('redis://10.5.0.2')
        sess = Session()
        sess.init_app(app.app)
        app.app.config['SECRET_KEY'] = os.urandom(24)
        app.app.json_encoder = JSONEncoder
        app.add_api('swagger.yaml', arguments={'title': 'Project Eval API'})
        return app.app
