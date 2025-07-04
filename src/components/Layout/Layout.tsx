import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Recommendations from '../Recommendations/Recommendations';
import Contact from '../Contact/Contact';
import Partners from '../Partners/Partners';
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'
import FooterBanner from '../Footer/FooterBanner';
import Banner from '../Banner/Banner';

const Layout: React.FC = () => {
  return (
    <div >
      <Header />
      <main>
        <Hero/>
        <About/>
        <Outlet />
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

export default Layout;
