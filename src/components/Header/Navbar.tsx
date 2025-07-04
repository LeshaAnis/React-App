import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './Navbar.module.css';
import { Link } from 'react-router';
import ServicesIcon from '../../assets/icons/List.svg';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.nav__list} ${styles.nav__list_upper}`}>
        <div className={styles.nav__avatar}>
          <li>
            <a href="index.html" className={styles.nav__item}>
              
              <img className={styles.nav__icons} src="../../public/images/Logo_1.png" alt="Home" />
            </a>
          </li>
          <li>
            <a >
              <Link to="/" className={styles.nav__logo}>Code<span className={styles.nav__logos}>Quest</span></Link>
              
            </a>
          </li>
        </div>
      </ul>

      <ul className={`${styles.nav__list} ${styles.nav__list_lower}`}>
        <li><a href="#about" className={styles.nav__item}>О студии</a></li>
        <li>
          <a href="#services" className={styles.nav__item}>
            Предложения
            <img className={styles.nav__icon} src={ServicesIcon} alt="Services" />
          </a>
        </li>
        <li><a href="#portfolio" className={styles.nav__item}>Портфолио</a></li>
        <li>
          <a 
            href="#" 
            className={`${styles.nav__item} ${styles.nav__item_feedback}`}
            onClick={handleOpenModal}
          >
            Обратная связь
          </a>
        </li>
      </ul>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </nav>
  );
};

export default Navbar;  