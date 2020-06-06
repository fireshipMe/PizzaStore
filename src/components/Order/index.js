import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import styles from './styles.module.scss';

export const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Куда доставить?</div>
      <div>
        <OrderForm />
      </div>
    </div>
  );
};

const OrderForm = () => {
  const formik = useFormik({
    initialValues: {
      street: '',
      house: '',
      apartment: '',
      entrance: '',
      floor: '',
      comments: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.contactsTitle}>Контактная информация</div>
      <div className={styles.contacts}>
        <input
          placeholder="Имя"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          className={styles.input}
        />
        <input
          placeholder="Телефон"
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
          className={[styles.input, styles.phoneInput].join(' ')}
        />
        <input
          placeholder="E-Mail"
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={[styles.input, styles.emailInput].join(' ')}
        />
      </div>
      <div className={styles.address}>Адрес</div>
      <div className={styles.topRow}>
        <input
          placeholder="Улица"
          id="street"
          name="street"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.street}
          className={[styles.input, styles.streetInput].join(' ')}
        />
        <input
          placeholder="Дом"
          id="house"
          name="house"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.house}
          className={[styles.input, styles.houseInput].join(' ')}
        />
      </div>
      <div className={styles.middleRow}>
        <input
          placeholder="Квартира"
          id="apartment"
          name="apartment"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.apartment}
          className={[styles.input, styles.apartmentInput].join(' ')}
        />
        <input
          placeholder="Подъезд"
          id="entrance"
          name="entrance"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.entrance}
          className={[styles.input, styles.entranceInput].join(' ')}
        />
        <input
          placeholder="Этаж"
          id="floor"
          name="floor"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.floor}
          className={[styles.input, styles.floorInput].join(' ')}
        />
      </div>
      <div className={styles.bottomRow}>
        <textarea
          placeholder="Комментарии к заказу"
          id="comments"
          name="comments"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.comments}
          className={[styles.input, styles.commentsInput].join(' ')}
        />
      </div>
      <div>
        <button className={styles.submitButton} type="submit">
          ЗАКАЗАТЬ
        </button>
        <Link to="/">
          <button className={styles.submitButton + ' ' + styles.menuButton}>
            МЕНЮ
          </button>
        </Link>
      </div>
    </form>
  );
};
