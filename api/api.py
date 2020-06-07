from flask import Flask, jsonify
from flask_restful import Resource, Api, reqparse
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from database_setup import Pizza
from config import DB_CREDENTIALS
import json
import time

app = Flask(__name__, static_folder='../build', static_url_path='/')
app.config['JSON_AS_ASCII'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = DB_CREDENTIALS
app.config['SQLALCHEMY_POOL_RECYCLE'] = 299
db = SQLAlchemy(app)
CORS(app)
api = Api(app)
parser = reqparse.RequestParser()


class PizzaApi(Resource):
    def get(self):
        pizzas = db.session.query(Pizza).all()
        return json.dumps([x.serialize for x in pizzas], ensure_ascii=False)


class NewOrder(Resource):
    def post(self):
        # lets pretend we actually care about order
        time.sleep(2)
        return "SUCCESS", 201


api.add_resource(PizzaApi, '/api/listall')
api.add_resource(NewOrder, '/api/createorder')


@app.route('/')
def index():
    return app.send_static_file('index.html')


if __name__ == "__main__":
    app.run()
