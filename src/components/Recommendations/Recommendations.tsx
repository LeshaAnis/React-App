
import styles from './Recommendations.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';

const Recommendations  = () => { 
  return (
    <div className={styles.recommendations}>
      <div className={styles.recommendations__header}>
        <span className={styles.recommendations__info}>
          <h1 className={styles.recommendations__title}>Наши клиенты</h1>
          <p className={styles.recommendations__description}>
            CodeQuest сотрудничает с ведущими издателями и платформами, чтобы ваши проекты достигали максимальной аудитории.
          </p>
          <button className={styles.recommendations__button}>Больше отзывов</button>
        </span>
      </div>
      <div className={styles.swiper__containers}>

        <Swiper
          modules={[
            Pagination, 
            Scrollbar]}
          spaceBetween={0}
          slidesPerView={1}
          loop={false}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          pagination={{
          }}
        >
          <SwiperSlide>
            <div className={styles.global__text} >
              <div className={styles.internal__text}>
                <img className={styles.images__swipper} src="../../public/images/avatar_1.png" alt="Проект 1" />
                <h3 className={styles.internal_text__swipper} >Иван Петров, партнер по проекту</h3>
              </div>
              <p className={styles.internal_textin__swipper} >PixelPulse Games создали для нас уникальный игровой опыт, который покорил тысячи игроков по всему миру!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.global__text} >
              <div className={styles.internal__text}>
                <img className={styles.images__swipper} src="../../public/images/avatar_2.png" alt="Проект 1" />
                <h3 className={styles.internal_text__swipper} >Анастасия Ли, продюсер мобильных игр</h3>
              </div>
              <p className={styles.internal_textin__swipper} >PixelPulse Games создали для нас уникальный игровой опыт, который покорил тысячи игроков по всему миру!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.global__text} >
              <div className={styles.internal__text}>
                <img className={styles.images__swipper} src="../../public/images/avatar_1.png" alt="Проект 1" />
                <h3 className={styles.internal_text__swipper} >Иван Петров, партнер по проекту</h3>
              </div>
              <p className={styles.internal_textin__swipper} >PixelPulse Games создали для нас уникальный игровой опыт, который покорил тысячи игроков по всему миру!</p>
            </div>
          </SwiperSlide>
        </Swiper>


      </div>    
    </div>
  );
};

export default Recommendations;





