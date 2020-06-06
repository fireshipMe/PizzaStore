import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { CartIcon } from '../CartIcon/index';
export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div>
          <p className={styles.title}>Panucci's Pizza</p>
        </div>
      </Link>
      <div className={styles.toCart}>
        <Link to="/order">
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};
