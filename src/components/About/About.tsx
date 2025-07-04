
import styles from './About.module.css';

const About  = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.about__header}>
        <h1 className={styles.about__title}>О нашей студии</h1>
      </div>
      <div className={styles.about__content}>
        <p className={`${styles.about__text} ${styles.about__text_upper}`}>
          Мы — команда профессионалов, объединённых страстью к созданию инновационных игр и интерактивных развлечений.
        </p>
        <p className={`${styles.about__text} ${styles.about__text_lower}`}>
          Наш опыт охватывает полный цикл разработки: от концепта до релиза и поддержки проектов на всех современных платформах.
        </p>
        <div className={styles.about__stats}>
          <p className={styles.about__stat}>
            <span className={styles.about__stat_value}>10</span>
            <span className={styles.about__stat_label}>успешно выпущенных игр</span>
          </p>
          <p className={styles.about__stat}>
            <span className={styles.about__stat_value}>05</span>
            <span className={styles.about__stat_label}>лет на рынке геймдева</span>
          </p>
          <p className={styles.about__stat}>
            <span className={styles.about__stat_value}>50</span>
            <span className={styles.about__stat_label}>талантливых специалистов</span>
          </p>
        </div> 
      </div>
    </div>
  );
};

export default About;