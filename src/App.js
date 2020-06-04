import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { PizzasList } from './components/PizzasList/index';
import { Banner } from './components/Banner/index';
import { Order } from './components/Order/index';
import { Cart } from './components/Cart/index';
import styles from './app.module.scss';

export const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <div>
              <Link to="/order">Корзина</Link>
              <Banner />
              <PizzasList />
            </div>
          )}
        />
        <Route
          path="/order"
          exact
          render={(props) => (
            <div className={styles.container}>
              <Link to="/">Меню</Link>
              <Order />
              <Cart />
            </div>
          )}
        />
      </Switch>
    </React.Fragment>
  );
};
