import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import Item from './Item';
import { forEach } from 'lodash';

export const Cart = () => {
  const orderList = useSelector((state) => state.cart);
  let price = 0;
  forEach(orderList, (item) => {
    price += item.price * item.quantity;
  });

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
      {price ? (
        <div className={styles.total}>
          Итог: {price}$ / {(price * 0.88).toPrecision(4)} €
        </div>
      ) : null}
    </div>
  );
};
