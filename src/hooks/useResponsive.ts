import { useEffect, useState } from 'react';

// Define breakpoints for responsiveness
const breakpoints = {
  sm: 576,  // Small devices
  md: 768,  // Medium devices
  lg: 992,  // Large devices
  xl: 1200, // Extra large devices
};

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize());

  function getScreenSize() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < breakpoints.sm) return 'xs'; // Extra small
      if (width < breakpoints.md) return 'sm'; // Small
      if (width < breakpoints.lg) return 'md'; // Medium
      if (width < breakpoints.xl) return 'lg'; // Large
      return 'xl'; // Extra large
    }
    return 'xs';// Extra large
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useResponsive;
