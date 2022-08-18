import { useState, useEffect } from 'react';

export default function useTheme() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('isDarkMode');
    
    if (!savedTheme) {
      setDarkMode(themeMediaQuery.matches);
    } else {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, [])

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    isDarkMode ? body.classList.add('dark') : body.classList.remove('dark');
  }, [isDarkMode])

  const handleMode = () => {
    setDarkMode(prevMode => !prevMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  }

  return { isDarkMode, handleMode };
}
