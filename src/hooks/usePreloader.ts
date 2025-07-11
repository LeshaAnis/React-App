import { useState, useEffect } from 'react';

const usePreloader = (initialState = true, delay = 5000) => {
  const [isLoading, setIsLoading] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
};

export default usePreloader;