import { useState, useEffect } from 'react';

const useScrollVisibility = (threshold = 300): boolean => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > threshold);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  return visible;
};

export default useScrollVisibility;
