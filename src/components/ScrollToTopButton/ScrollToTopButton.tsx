import styles from './ScrollToTopButton.module.css';
import useScrollVisibility from '../../hooks/useScrollVisibility';

const ScrollToTopButton = () => {
  const visible = useScrollVisibility(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={styles.scrollToTopBtn}
      title="Вернуться вверх"
      aria-label="Scroll to top"
    >
      ▲
    </button>
  );
};

export default ScrollToTopButton;
