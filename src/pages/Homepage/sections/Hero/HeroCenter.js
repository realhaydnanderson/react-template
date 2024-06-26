// src/pages/HomePage/sections/HeroSection.js
import React from 'react';

const HeroSection = ({ colors }) => {
  return (
    <section className="h-screen flex items-center justify-center px-6 z-20">
      <div className="text-center max-w-3xl mx-auto z-20">
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${colors.heroGradient}`}>
          Welcome to Glassmorphism
        </h1>
        <p className={`text-lg md:text-xl mb-8 ${colors.subtext}`}>
          Experience the beauty of frosted glass design with our stunning homepage. Toggle between light and dark modes for a personalized experience.
        </p>
        <button className={`bg-gradient-to-r text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300 ${colors.heroGradient}`}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;