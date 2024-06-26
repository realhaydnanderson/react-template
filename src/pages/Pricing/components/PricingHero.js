// src/pages/Pricing/components/PricingHero.js
import React from 'react';

const PricingHero = ({ colors }) => (
  <>
    <h1 className={`text-5xl md:text-6xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r ${colors.heroGradient}`}>
      Choose Your Plan
    </h1>
    <p className={`text-xl mb-12 text-center ${colors.subtext}`}>
      Select the perfect plan for your needs and start experiencing the power of our platform today.
    </p>
  </>
);

export default PricingHero;