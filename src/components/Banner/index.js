import React from 'react';
import styles from './styles.module.scss';
export const Banner = () => {
  return (
    <figure className={styles.imageContainer}>
      <img className={styles.image} src="./static/pizza_cat.jpg" alt=""></img>
    </figure>
  );
};
