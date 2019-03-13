#!/usr/bin/env python3

import connexion
import os
from swagger_server import encoder
from app import sess


def main():
    app = connexion.App(__name__, specification_dir='./swagger/')
    app.secret_key = os.urandom(24)
    sess.init_app(app)
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'Project Eval API'})
    app.run(port=8080)
    


if __name__ == '__main__':
    main()
    
