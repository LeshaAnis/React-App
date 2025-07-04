import { useState, useEffect } from 'react';
import Preloader from './components/Preloader/Preloader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

const App  = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;

  return (
    <BrowserRouter>
      <Routes>
        
          
          <Route path="/" element={<HomePage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </BrowserRouter>

     
      

  );
  
};

export default App;
