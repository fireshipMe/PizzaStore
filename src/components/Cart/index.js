import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

export const Cart = () => {
  const orderList = useSelector((state) => state.cart);
  return (
    <div className={styles.container}>
      <p className={styles.title}>Корзина</p>
      {orderList.map(Item)}
    </div>
  );
};

const Item = ({ title, quantity }) => {
  return (
    <div className={styles.item}>
      <span>{title}</span>
      <span>{quantity} штук</span>
      <span>X</span>
    </div>
  );
};
