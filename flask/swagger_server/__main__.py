#!/usr/bin/env python3

import connexion
import os
from swagger_server import encoder
from flask import Flask, session
from flask.ext.session import Session



def main():
    app = connexion.App(__name__, specification_dir='./swagger/')
    SESSION_TYPE = 'redis'
    app.secret_key = os.urandom(24)
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'Project Eval API'})
    app.run(port=8080)
    Session(app)    


if __name__ == '__main__':
    main()
    
