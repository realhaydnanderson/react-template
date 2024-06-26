// src/pages/Pricing/index.js
import React, { useState } from 'react';
import Header from '../../components/Header';
import Blobs from '../../components/Blobs';
import PricingHero from './components/PricingHero';
import PricingCards from './components/PricingCards';
import { colorConfig } from '../../styles/ColorConfig';

import { useTheme } from '../../components/ThemeProvider';

const PricingPage = () => {
  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  return (
    <div className={`min-h-screen ${colors.background} transition-colors duration-300 relative overflow-hidden`}>
      <Blobs count={5} colors={colors.blobs} isDarkMode={isDarkMode} />
      
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} colors={colors} />
      
      <section className="pt-28 pb-20 relative z-10">
        <div className="container mx-auto max-w-6xl px-6">
          <PricingHero colors={colors} />
          <PricingCards colors={colors} />
        </div>
      </section>
    </div>
  );
};

export default PricingPage;