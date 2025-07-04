
import { useSearchParams, Link } from 'react-router-dom';
import styles from '../components/Services/Services.module.css';
import CardList from '../components/Services/CardList';
import  cardsData  from '../utils/constants.json';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton'
import FooterBanner from '../components/Footer/FooterBanner';

const CardsPage = () => {
  const [searchParams] = useSearchParams();
  const limitParam = searchParams.get('limit');
  const limit = limitParam ? parseInt(limitParam, 10) : 10;

  return (
    <div >
      <Header />
        <div className={styles.services_div}>
          <div id="services" className={styles.services}>
            <h1 className={styles.services__title}>Наши предложения</h1>
            <CardList cards={cardsData} limit={limit} />
            <div className={styles.services__block}>
                <Link to="/"><button className={styles.services__button}> Назад  </button></Link>
              </div>
          </div>
        </div>
      <ScrollToTopButton />
      <FooterBanner />
      <Footer />
    </div>
      
    
  );
};

export default CardsPage;
