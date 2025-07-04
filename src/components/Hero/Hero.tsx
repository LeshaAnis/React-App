import React from 'react';
import styles from './Hero.module.css';


const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <a href="#" className={styles.hero__link}>
        <h2 className={styles.hero__title}>Создаём уникальные игровые миры, где идеи становятся интерактивной реальностью</h2>

        <img className={styles.hero__image} src="../../public/images/Main_im.png"  alt="Hero" />
      </a>
    </div>
  );
};

export default Hero;