import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import Item from './Item';

export const Cart = () => {
  const orderList = useSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Корзина</p>
      <div className={styles.items}>
        {orderList.map((state, index) => {
          return (
            <Item title={state.title} quantity={state.quantity} key={index} />
          );
        })}
      </div>
    </div>
  );
};
