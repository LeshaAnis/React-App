
import CardList from '../components/Services/CardList';
import styles from '../components/Services/Services.module.css';
import cardsData from '../utils/constants.json';
import { Link } from 'react-router';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Recommendations from '../components/Recommendations/Recommendations';
import Contact from '../components/Contact/Contact';
import Partners from '../components/Partners/Partners';
import Footer from '../components/Footer/Footer';
import FooterBanner from '../components/Footer/FooterBanner';
import Banner from '../components/Banner/Banner';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton'

const HomePage = () => {
  return (
    <div >
      <Header />
      <main>
        <Hero/>
        <About/>
            <div className={styles.services_div}>
              <div id="services" className={styles.services}>
                <h1 className={styles.services__title}>Наши предложения</h1>
                  <CardList cards={cardsData} limit={3} />
                  <div className={styles.services__block}>
                    <Link to="/cards"><button className={styles.services__button}> Больше предложении  &gt; </button></Link>
                  </div>
                </div>
            </div>
        <Portfolio/>
        <Banner/>
        <Recommendations/>
        <Contact/>
        <Partners/>
        <ScrollToTopButton />
      </main>
      <FooterBanner/>
      <Footer />
    </div>




  );
};

export default HomePage;
