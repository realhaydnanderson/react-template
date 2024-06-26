// src/pages/HomePage/index.js
import React, { useState } from 'react';
import Header from '../../components/Header';
import Blobs from '../../components/Blobs';

import HeroSection from './sections/Hero/HeroCenter';
import BentoBoxSection from './sections/Bento/Bento';

import { useTheme } from '../../components/ThemeProvider';

const HomePage = () => {
    const { isDarkMode, toggleDarkMode, colors } = useTheme();

  return (
    <div className={`min-h-screen ${colors.background} transition-colors duration-300 z-0`}>
      {/* Background shapes */}
      <Blobs count={5} colors={colors.blobs} isDarkMode={isDarkMode} />

      {/* Floating header */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} colors={colors} />

      {/* Hero section */}
      <HeroSection colors={colors} />

      {/* Bento Box Section */}
      <BentoBoxSection colors={colors} isDarkMode={isDarkMode} />
    </div>
  );
};

export default HomePage;