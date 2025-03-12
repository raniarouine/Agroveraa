// ScrollToTop.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top when the route changes
  }, [location]);

  return null;
};

export default ScrollToTop;
