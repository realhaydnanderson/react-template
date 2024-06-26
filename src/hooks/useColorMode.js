// src/hooks/useColorMode.js
import { useState, useEffect } from 'react';

const colorConfig = {
  light: {
    background: 'bg-gray-100',
    heroGradient: 'from-blue-600 to-purple-800',
    text: 'text-gray-900',
    subtext: 'text-gray-700',
    glassBackground: 'bg-white/30',
    glassGradient: 'bg-gradient-to-br from-white/30 to-transparent',
    highlight: 'blue-500',
    blobs: ['bg-pink-300', 'bg-purple-300', 'bg-blue-300'],
  },
  dark: {
    background: 'bg-gray-900',
    heroGradient: 'from-green-400 to-blue-500',
    text: 'text-white',
    subtext: 'text-gray-300',
    glassBackground: 'bg-gray-800/10',
    glassGradient: 'bg-gradient-to-br from-white/10 to-transparent',
    highlight: 'green-500',
    blobs: ['bg-green-400', 'bg-green-500', 'bg-emerald-400'],
  }
};

export const useColorMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state with the value from localStorage, or false if not set
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [colors, setColors] = useState(isDarkMode ? colorConfig.dark : colorConfig.light);

  useEffect(() => {
    // Update localStorage when isDarkMode changes
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    setColors(isDarkMode ? colorConfig.dark : colorConfig.light);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return { isDarkMode, toggleDarkMode, colors };
};