import React from 'react';
import styles from './Partners.module.css';




const Partners: React.FC = () => {
  return (
    <div className={styles.partners}>
      <span className={styles.partners__container}>
        <img className={styles.partners__image} src="../../public/images/language_1.png" alt="Partner 1" />
        <img className={styles.partners__image} src="../../public/images/language_2.png" alt="Partner 1" />
        <img className={styles.partners__image} src="../../public/images/language_3.png" alt="Partner 2" />
        <img className={styles.partners__image} src="../../public/images/language_4.png" alt="Partner 3" />
        <img className={styles.partners__image} src="../../public/images/language_5.png" alt="Partner 4" />
        <img className={styles.partners__image} src="../../public/images/language_6.png" alt="Partner 5" />
      </span>
    </div>
  );
};

export default Partners;