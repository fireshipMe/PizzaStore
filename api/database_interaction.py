from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database_setup import Pizza, Base
import json
from config import DB_CREDENTIALS

engine = create_engine(
    DB_CREDENTIALS)

Base.metadata.create_all(engine)

DBSession = sessionmaker(bind=engine)
session = DBSession()


def getAllPizzas():

    pizzas = session.query(Pizza).all()
    return json.dumps([x.serialize for x in pizzas], ensure_ascii=False)
