// src/components/ThemeProvider.js
import React, { createContext, useContext } from 'react';
import { useColorMode } from '../hooks/useColorMode';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const colorMode = useColorMode();

  return (
    <ThemeContext.Provider value={colorMode}>
      {children}
    </ThemeContext.Provider>
  );
};