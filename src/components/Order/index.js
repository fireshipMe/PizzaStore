import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik, ErrorMessage } from 'formik';
import styles from './styles.module.scss';
import * as Yup from 'yup';

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

const OrderSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Это имя?')
    .max(30, 'Длинноватое имя')
    .required('Обязательное поле'),
  phone: Yup.string()
    .matches(/^((\+7|7|8)+([0-9]){10})$/, {
      message: 'Неверный формат',
    })
    .required('Обязательное поле'),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, {
      message: 'Неверный формат',
    })
    .required('Обязательное поле'),
  street: Yup.string().min(5, 'Слишком коротко').required('Обязательное поле'),
  house: Yup.number('Неверный формат')
    .required('Обязательное поле')
    .positive('Неверный формат')
    .integer('Неверный формат'),
  apartment: Yup.number('Неверный формат')
    .required('Обязательное поле')
    .positive('Неверный формат')
    .integer('Неверный формат'),
  entrance: Yup.number('Неверный формат')
    .required('Обязательное поле')
    .positive('Неверный формат')
    .integer('Неверный формат'),
  floor: Yup.number('Неверный формат')
    .required('Обязательное поле')
    .positive('Неверный формат')
    .integer('Неверный формат'),
});

const OrderForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      street: '',
      house: '',
      apartment: '',
      entrance: '',
      floor: '',
      comments: '',
    },
    validationSchema: OrderSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.contactsTitle}>Контактная информация</div>
      <div className={styles.contacts}>
        <input
          placeholder={formik.errors.name ? formik.errors.name : 'Имя'}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          className={
            formik.errors.name
              ? styles.input + ' ' + styles.inputError
              : styles.input
          }
        />
        <input
          placeholder={formik.errors.phone ? formik.errors.phone : 'Телефон'}
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
          className={
            formik.errors.phone
              ? [styles.input, styles.inputError, styles.phoneInput].join(' ')
              : [styles.input, styles.phoneInput].join(' ')
          }
        />
        <input
          placeholder={formik.errors.email ? formik.errors.email : 'E-Mail'}
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={
            formik.errors.email
              ? [styles.input, styles.inputError, styles.emailInput].join(' ')
              : [styles.input, styles.emailInput].join(' ')
          }
        />
      </div>
      <div className={styles.address}>Адрес</div>
      <div className={styles.topRow}>
        <input
          placeholder={formik.errors.street ? formik.errors.street : 'Улица'}
          id="street"
          name="street"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.street}
          className={
            formik.errors.street
              ? [styles.input, styles.inputError, styles.streetInput].join(' ')
              : [styles.input, styles.streetInput].join(' ')
          }
        />
        <input
          placeholder={formik.errors.house ? formik.errors.house : 'Дом'}
          id="house"
          name="house"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.house}
          className={
            formik.errors.house
              ? [styles.input, styles.inputError, styles.houseInput].join(' ')
              : [styles.input, styles.houseInput].join(' ')
          }
        />
      </div>
      <div className={styles.middleRow}>
        <input
          placeholder={
            formik.errors.apartment ? formik.errors.apartment : 'Квартира'
          }
          id="apartment"
          name="apartment"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.apartment}
          className={
            formik.errors.apartment
              ? [styles.input, styles.inputError, styles.apartmentInput].join(
                  ' '
                )
              : [styles.input, styles.apartmentInput].join(' ')
          }
        />
        <input
          placeholder={
            formik.errors.entrance ? formik.errors.entrance : 'Подъезд'
          }
          id="entrance"
          name="entrance"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.entrance}
          className={
            formik.errors.entrance
              ? [styles.input, styles.inputError, styles.entranceInput].join(
                  ' '
                )
              : [styles.input, styles.entranceInput].join(' ')
          }
        />
        <input
          placeholder={formik.errors.floor ? formik.errors.floor : 'Этаж'}
          id="floor"
          name="floor"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.floor}
          className={
            formik.errors.floor
              ? [styles.input, styles.inputError, styles.floorInput].join(' ')
              : [styles.input, styles.floorInput].join(' ')
          }
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
