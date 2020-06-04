from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database_setup import Pizza, Base
import json
engine = create_engine(
    'mysql+pymysql://WdUGFjsgX8:OKlW3hYgxa@remotemysql.com:3306/WdUGFjsgX8?charset=utf8mb4')

Base.metadata.create_all(engine)

DBSession = sessionmaker(bind=engine)
session = DBSession()


def getAllPizzas():
    pizzas = session.query(Pizza).all()
    return json.dumps([x.serialize for x in pizzas], ensure_ascii=False)
