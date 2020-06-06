import React from 'react';
import styles from './styles.module.scss';
export const Button = ({ text, onClick, isAdded }) => {
  return isAdded ? (
    <button onClick={() => onClick()} className={styles.buttonAdded}>
      {text}
    </button>
  ) : (
    <button onClick={() => onClick()} className={styles.button}>
      {text}
    </button>
  );
};
