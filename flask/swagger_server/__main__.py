#!/usr/bin/env python3

import connexion
import os
from swagger_server import encoder
from flask import Flask
from flask import session
import redis



def main():
    app = connexion.App(__name__, specification_dir='./swagger/')
    app.app.config['SESSION_TYPE'] = 'redis'
    app.app.config['SESSION_REDIS'] = redis.from_url('redis://10.5.0.2')
    sess = Session()
    sess.init_app(app)
    app.app.config['SECRET_KEY'] = os.urandom(24)
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'Project Eval API'})
    app.run(port=8080)
    Session(app)    


if __name__ == '__main__':
    main()
    
