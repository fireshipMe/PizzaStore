import React from 'react';
import styles from './styles.module.scss';
export const Button = ({ text, onClick }) => {
  return (
    <button onClick={() => onClick()} className={styles.button}>
      {text}
    </button>
  );
};
