import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import '../../../node_modules/font-awesome/css/font-awesome.css';
export const CartIcon = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className={styles.container}>
      <i className="fa fa-shopping-cart fa-2x"></i>
      <span className={styles.amount}>{items.length}</span>
    </div>
  );
};
