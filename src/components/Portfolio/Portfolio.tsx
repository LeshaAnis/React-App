 
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
  import 'swiper/css';
  import styles from './Portfolio.module.css';
  import { useRef } from 'react';

  const Portfolio = () => {
    const nextButton = useRef<HTMLButtonElement>(null);
    const prevButton = useRef<HTMLButtonElement>(null);

    return (
      <div id="portfolio" className={styles.portfolio}>
        <div className={styles.portfolio__header}>
          <span className={styles.portfolio__info}>
            <h1 className={styles.portfolio__title}>Наши игры</h1>
            <p className={styles.portfolio__description}>
              Здесь представлены наши лучшие проекты: от захватывающих мобильных игр до масштабных VR-приключений..
            </p>
            <button className={styles.portfolio__button}>Больше игр &gt;</button>
          </span>
        </div>
        <div className={styles.swiper__container}>
          <Swiper
            modules={[
              Navigation,
              Pagination, 
              Scrollbar]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: nextButton.current,
              prevEl: prevButton.current,
            }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            pagination={{
            }}
          >
            <SwiperSlide>
              <img className={styles.img__swipper} src="/images/images_3.jpg" alt="Изображение 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img__swipper} src="/images/images_1.jpg" alt="Изображение 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img__swipper} src="/images/images_2.jpg" alt="Изображение 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img__swipper} src="/images/images_4.jpg" alt="Изображение 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.img__swipper} src="/images/images_5.jpg" alt="Изображение 5" />
            </SwiperSlide>
          </Swiper>
          <div className={styles.games__banner}>
            <div className={styles.text__content}>
              <h2>Games</h2>
              <a href="#" className={styles.see__all}>Больше игр →</a>
            </div>
          </div>
          <div className={styles.slider__controls}>
            <button ref={prevButton} className={styles.prev}>&lt;</button>
            <button ref={nextButton} className={styles.next}>&gt;</button>
          </div>
        </div>
      </div>
    );
  };

  export default Portfolio;




