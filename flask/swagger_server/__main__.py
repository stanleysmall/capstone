#!/usr/bin/env python3

import connexion
import os
from swagger_server import encoder
from flask import Flask
import redis



def main():
    app = connexion.App(__name__, specification_dir='./swagger/')
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('swagger.yaml', arguments={'title': 'Project Eval API'})
    app.run(port=8080)


if __name__ == '__main__':
    main()
    
