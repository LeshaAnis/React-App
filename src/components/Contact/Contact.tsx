import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div id="contact_us" className={styles.contact}>
      <div className={styles.contact__header}>
        <p className={styles.contact__label}> </p>
        <h1 className={styles.contact__title}>У вас есть идея новой игры? </h1>
        <p className={styles.contact__description}>
          Хотите обсудить идею игры или получить консультацию по вашему проекту? Заполните форму, и мы свяжемся с вами в ближайшее время.
        </p>
      </div>
      <div className={styles.contact__form_wrapper}>
        <form className={`${styles.form} ${styles.form_contact}`}>
          <input className={styles.form__input} type="text" id="name" placeholder="Имя" required />
          <input className={styles.form__input} type="text" placeholder="Электронная почта" readOnly/>
          <input className={styles.form__input} type="text" placeholder="Телефон (необязательно)" readOnly/>
          <textarea 
            className={styles.form__textarea} 
            id="message" 
            rows={4} 
            placeholder="Расскажите нам о проекте, над которым вы работаете *(необязательно)" 
            readOnly
          ></textarea>
          <button className={`${styles.form__button} ${styles.form__button_contact}`}>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;