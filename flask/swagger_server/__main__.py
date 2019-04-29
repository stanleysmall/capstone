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
    var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // allow requests from any other server
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // allow these verbs
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
    app.use(allowCrossDomain); // plumbing it in as middleware
    logging.getLogger('flask_cors').level = logging.DEBUG

if __name__ == '__main__':
    main()
    
