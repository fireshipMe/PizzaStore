import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import styles from './styles.module.scss';
import { createRequest } from '../../lib/createRequest';
import PizzaDescription from '../PizzaDescription/index';

export const PizzasList = () => {
  const [state, onChange] = React.useState();

  React.useEffect(() => {
    createRequest(`http://localhost:5000/api/listall`)
      .then((response) => response.json())
      .then((result) => JSON.parse(result))
      .then((result) => onChange(result));
  }, []);

  return state ? (
    <div className={styles.gridContainer}>
      {/* <React.Fragment>{state.map(PizzaDescription)}</React.Fragment> */}
      <React.Fragment>
        {state.map((item, index) => {
          return (
            <PizzaDescription
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              imageLink={item.imageLink}
            />
          );
        })}
      </React.Fragment>
    </div>
  ) : null;
};
