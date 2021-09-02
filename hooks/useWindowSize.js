import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
