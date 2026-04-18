import { useEffect } from 'react';
import cursorUrl from '../assets/cursor.svg';

const PixelCursor = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `*, *::before, *::after { cursor: url(${cursorUrl}) 7 2, auto !important; }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return null;
};

export default PixelCursor;
