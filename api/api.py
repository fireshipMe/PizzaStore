from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from database_setup import Pizza
from config import DB_CREDENTIALS
import json

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = DB_CREDENTIALS
app.config['SQLALCHEMY_POOL_RECYCLE'] = 299
db = SQLAlchemy(app)
CORS(app)
api = Api(app)


class PizzaApi(Resource):
    def get(self):
        pizzas = db.session.query(Pizza).all()
        return json.dumps([x.serialize for x in pizzas], ensure_ascii=False)


api.add_resource(PizzaApi, '/api/listall')

if __name__ == "__main__":
    app.run()
