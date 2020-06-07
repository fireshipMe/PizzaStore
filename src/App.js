import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { PizzasList } from './components/PizzasList/index';
import { Banner } from './components/Banner/index';
import { Order } from './components/Order/index';
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
              <Banner />
              <LoadingIndicator />
              <PizzasList />
            </div>
          )}
        />
        <Route
          path="/order"
          exact
          render={(props) => (
            <div className={styles.container}>
              <Order />
            </div>
          )}
        />
      </Switch>
    </React.Fragment>
  );
};

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div
        style={{
          width: '100%',
          height: '100',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader type="ThreeDots" color="#ff6600" height="100" width="100" />
      </div>
    )
  );
};
