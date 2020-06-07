import React from 'react';
import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.github}>
        <a href="https://www.github.com/fireshipme">Github</a>
      </div>
      <div className={styles.copyright}>
        Спасибо сайтам ДодоПицца и Папа Джонс за возможность вдохновиться
        дизайном.
      </div>
    </div>
  );
};
