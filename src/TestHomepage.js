import React, { useState } from 'react';
import { BackgroundBlob, Header, HeroSection, colorConfig, FeatureCard, SomeIcon } from "./Components";
import { Sun, Moon, Zap, BarChart, Users, Sparkles } from 'lucide-react';


const HomePage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const colors = isDarkMode ? colorConfig.dark : colorConfig.light;
  
    return (
      <div className={`min-h-screen ${colors.background}`}>
        <BackgroundBlob color="bg-pink-300" style={{ top: '10%', left: '10%' }} />
        <BackgroundBlob color="bg-purple-300" style={{ top: '50%', left: '50%' }} />
        
        <Header 
          logo="Your Logo"
          navItems={[{ label: 'Home', href: '#' }, { label: 'About', href: '#' }]}
          onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
          isDarkMode={isDarkMode}
        />
        
        <HeroSection 
          title="Welcome to Our App"
          subtitle="Experience the power of glassmorphism"
          ctaText="Get Started"
          onCtaClick={() => console.log('CTA clicked')}
        />
        
        <section className="py-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              Icon={BarChart}
              title="Amazing Feature"
              description="This feature will blow your mind"
            />
            {/* Add more FeatureCards as needed */}
          </div>
        </section>
      </div>
    );
  };

  export default HomePage;