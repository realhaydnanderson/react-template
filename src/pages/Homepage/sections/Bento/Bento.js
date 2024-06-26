// src/pages/HomePage/BentoBoxSection.js
import React from 'react';
import { Zap, BarChart, Users, Sparkles } from 'lucide-react';

import GlassCard from '../../components/GlassCard';

const BentoBoxSection = ({ colors, isDarkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 z-20">
      <div className="container mx-auto max-w-6xl z-20">
        <h2 className={`text-4xl font-bold mb-4 text-center ${colors.text}`}>Discover Our Features</h2>
        <p className={`text-xl mb-12 text-center ${colors.subtext}`}>Explore the power of our platform with these cutting-edge capabilities</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard 
            icon={Zap} 
            title="Lightning Fast" 
            description="Experience blazing fast performance with our optimized solutions."
            colors={colors}
            isDarkMode={isDarkMode}
          />
          <GlassCard 
            icon={BarChart} 
            title="Advanced Analytics" 
            description="Gain valuable insights with our powerful analytics tools."
            colors={colors}
            isDarkMode={isDarkMode}
          />
          <GlassCard 
            icon={Users} 
            title="Team Collaboration" 
            description="Work seamlessly with your team using our collaborative features."
            colors={colors}
            isDarkMode={isDarkMode}
          />
          <GlassCard 
            icon={Sparkles} 
            title="AI-Powered" 
            description="Harness the power of artificial intelligence to boost productivity."
            colors={colors}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </section>
  );
};

export default BentoBoxSection;