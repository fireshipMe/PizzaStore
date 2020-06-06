import React from 'react';

import styles from './styles.module.scss';

export const QuantityPicker = ({ value, onDecClick, onIncClick }) => {
  return (
    <div className={styles.picker}>
      <button
        className={styles.button + ' ' + styles.buttonDec}
        onClick={() => onDecClick()}
      >
        -
      </button>
      <input className={styles.input} type="text" readOnly value={value} />
      <button
        className={styles.button + ' ' + styles.buttonInc}
        onClick={() => onIncClick()}
      >
        +
      </button>
    </div>
  );
};
