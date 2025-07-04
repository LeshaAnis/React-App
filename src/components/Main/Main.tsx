import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Banner from '../Banner/Banner';
import Recommendations from '../Recommendations/Recommendations';
import Contact from '../Contact/Contact';
import Partners from '../Partners/Partners';
import FooterBanner from '../Footer/FooterBanner';
import styles from './Main.module.css';

interface MainProps {
  cards: any;
}

const Main = ({ cards }: MainProps) => {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Services cards={cards} />
      <Portfolio />
      <Banner />
      <Recommendations />
      <Contact />
      <Partners />
      <FooterBanner />
    </main>
  );
};

export default Main;