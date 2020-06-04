from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Pizza(Base):
    __tablename__ = 'pizza'

    id = Column(Integer, primary_key=True)
    title = Column(String(250), nullable=False)
    description = Column(String(250), nullable=False)
    price = Column(Integer, nullable=False)
    imageLink = Column(String(350), nullable=False)

    @property
    def serialize(self):
        return {
            'title': self.title,
            'description': self.description,
            'price': self.price,
            'imageLink': self.imageLink
        }


engine = create_engine(
    'mysql+pymysql://WdUGFjsgX8:OKlW3hYgxa@remotemysql.com:3306/WdUGFjsgX8?charset=utf8mb4')

Base.metadata.create_all(engine)

# Following code should not be readen anywhen by anyone, you were warned
# This was done for sake of initial population and better not to run this again
# Set it to true to actually run it
if(False):
    Session = sessionmaker(bind=engine)
    session = Session()
    italian = Pizza(title="Итальянская с моцареллой и пепперони", description="Традиционный итальянский рецепт с двумя видами сыра: тертый Моцарелла и классический чильеджини; пикантная пепперони, шампиньоны и смесь приправ",
                    imageLink="https://cdn.papajohns.ru//images/catalog/thumbs/full/e9bd5c6431e2148b1a5fd7d8b9d0df10.jpg", price=5)

    chicken = Pizza(title="Чикен блю чиз", description="Идеальное сочетание: нежное куриное филе с кусочками сыра блю чиз, соусом Пармеджано, смесью итальянских сыров и сыром Моцарелла",
                    imageLink="https://cdn.papajohns.ru//images/catalog/thumbs/full/2d76eaf144704103e9c3c8a231844a1c.png", price=6)
    cheese = Pizza(title="9 Сыров", description="Новый вкус! Сочетание сыров: Моцарелла, мягкий молодой сыр, смесь копчёных итальянских сыров, сыр с голубой плесенью, Реджанито, Чеддер с соусом Пармеджано и орегано",
                   imageLink="https://cdn.papajohns.ru//images/catalog/thumbs/full/c1344747948b7768d9c40820a067d7ae.png", price=5)
    chickenbbq = Pizza(title="Цыпленок Барбекю", description="Сочное куриное филе и хрустящий бекон в сочетании с фирменным томатным соусом, Моцареллой и луком",
                       imageLink="https://cdn.papajohns.ru//images/catalog/thumbs/full/Chicken-BBQ-traditional.jpg", price=7)
    pepperoni = Pizza(title="Пепперони", description="Американская классика с пикантной пепперони, Моцареллой и фирменным томатным соусом",
                      imageLink="https://cdn.papajohns.ru//images/catalog/thumbs/full/Pepperoni-traditional.jpg", price=12)
    mary = Pizza(title="Маргарита", description="Традиционный рецепт пиццы с Моцареллой, сочными томатами, фирменным томатным соусом и орегано",
                 imageLink="https://cdn.papajohns.ru//images/catalog/thumbs/full/Margherita-traditional.jpg", price=3)
    alfred = Pizza(title="Альфредо", description="Пицца со сливочно-шпинатным соусом, Моцареллой, ветчиной, хрустящим беконом, шампиньонами и сочными томатами",
                   imageLink="https://cdn.papajohns.ru//images/catalog/thumbs/full/Alfredo-traditional.jpg", price=5)
    mexican = Pizza(title="Мексиканская", description="Пицца со сливочно-шпинатным соусом, Моцареллой, ветчиной, хрустящим беконом, шампиньонами и сочными томатами",
                    imageLink="https://cdn.papajohns.ru//images/catalog/thumbs/full/Mexican-traditional.jpg", price=8)

    session.add(italian)
    session.add(cheese)
    session.add(chickenbbq)
    session.add(pepperoni)
    session.add(mary)
    session.add(alfred)
    session.add(mexican)
    session.add(chicken)
    session.commit()
