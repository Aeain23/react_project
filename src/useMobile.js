import { useState, useEffect } from 'react';

export const useMobile = (value) => {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    // console.log('width ', window.outerWidth);
    window.outerWidth < value && setWidth(true);
  }, [value]);

  return width;
};
