#!/usr/bin/env python3

import connexion
import os
from swagger_server import encoder
from flask import Flask
import redis
from flask_cors import CORS



def main():
    app = connexion.App(__name__, specification_dir='./swagger/')
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'Project Eval API'})
    app.run(port=8080)
    CORS(app)
    logging.getLogger('flask_cors').level = logging.DEBUG

if __name__ == '__main__':
    main()
    
