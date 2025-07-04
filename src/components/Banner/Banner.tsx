import React from 'react';
import styles from './Banner.module.css';




const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <span className={styles.banner__container}>
        <img className={styles.banner__image} src="../../public/images/icons_1.png" alt="Partner 1" />
        <img className={styles.banner__image} src="../../public/images/icons_2.png" alt="Partner 2" />
        <img className={styles.banner__image} src="../../public/images/icons_3.png" alt="Partner 3" />
        <img className={styles.banner__image} src="../../public/images/icons_4.png" alt="Partner 4" />
      </span>    
    </div>
  );
};

export default Banner;