import React from 'react';
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
          Подтвердить
        </button>
      </div>
    </form>
  );
};
