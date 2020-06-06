from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
from database_interaction import getAllPizzas
app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
CORS(app)
api = Api(app)


class Pizza(Resource):
    def get(self):
        return getAllPizzas()


api.add_resource(Pizza, '/api/listall')

if __name__ == "__main__":
    app.run()
