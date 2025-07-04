import React from 'react';
import styles from './Footer.module.css';


const FooterBanner: React.FC = () => {
  return (
    <div className={styles.footer_banner}>
      <img className={styles.footer_banner__image} src="../../public/images/Logo_1.png" alt="Footer Banner" />
      <p className={styles.footer_banner__text}> Code<span className={styles.span_banner__text}>Quest</span></p>
    </div>
  );
};

export default FooterBanner;