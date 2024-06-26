import React from 'react';
import { Sun, Moon, Check } from 'lucide-react';

const colorConfig = {
  light: {
    background: 'bg-gray-100',
    text: 'text-gray-900',
    subtext: 'text-gray-700',
    glassBackground: 'bg-white/30',
    glassGradient: 'bg-gradient-to-br from-white/30 to-transparent',
    highlight: 'blue-500',
  },
  dark: {
    background: 'bg-gray-900',
    text: 'text-white',
    subtext: 'text-gray-300',
    glassBackground: 'bg-gray-800/10',
    glassGradient: 'bg-gradient-to-br from-white/10 to-transparent',
    highlight: 'green-500',
  }
};

const GlassContainer = ({ children, className = '' }) => {
  return (
    <div className={`
      ${colorConfig.light.glassBackground} 
      ${colorConfig.light.glassGradient} 
      backdrop-blur-lg 
      rounded-xl 
      p-6 
      ${className}
    `}>
      {children}
    </div>
  );
};

const BackgroundBlob = ({ color, style }) => (
  <div 
    className={`
      absolute 
      rounded-full 
      mix-blend-multiply 
      filter 
      blur-xl 
      opacity-70 
      animate-blob 
      ${color}
    `}
    style={style}
  />
);

const Header = ({ logo, navItems, onDarkModeToggle, isDarkMode }) => (
  <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">{logo}</div>
      <div className="flex space-x-6 items-center">
        {navItems.map((item, index) => (
          <a 
            key={index} 
            href={item.href} 
            className={`${colorConfig.light.subtext} hover:text-gray-500`}
          >
            {item.label}
          </a>
        ))}
        <button onClick={onDarkModeToggle} className="focus:outline-none">
          {isDarkMode ? (
            <Sun className="text-yellow-400" />
          ) : (
            <Moon className="text-gray-700" />
          )}
        </button>
      </div>
    </nav>
  </header>
);

const HeroSection = ({ title, subtitle, ctaText, onCtaClick }) => (
  <section className="h-screen flex items-center justify-center px-6">
    <div className="text-center max-w-3xl mx-auto">
      <h1 className={`
        text-5xl 
        md:text-7xl 
        font-bold 
        mb-6 
        bg-clip-text 
        text-transparent 
        bg-gradient-to-r 
        from-blue-600 
        to-purple-800
      `}>
        {title}
      </h1>
      <p className={`text-lg md:text-xl mb-8 ${colorConfig.light.subtext}`}>
        {subtitle}
      </p>
      <button 
        onClick={onCtaClick}
        className={`
          bg-gradient-to-r 
          from-blue-600 
          to-purple-800 
          text-white 
          font-bold 
          py-3 
          px-6 
          rounded-lg 
          hover:opacity-90 
          transition 
          duration-300
        `}
      >
        {ctaText}
      </button>
    </div>
  </section>
);

const FeatureCard = ({ Icon, title, description }) => (
  <GlassContainer className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
    <Icon className={`w-12 h-12 mb-4 text-${colorConfig.light.highlight}`} />
    <h3 className={`text-xl font-semibold mb-2 ${colorConfig.light.text}`}>
      {title}
    </h3>
    <p className={colorConfig.light.subtext}>{description}</p>
  </GlassContainer>
);

const PricingCard = ({ title, price, features, isPopular, onChoosePlan }) => (
  <GlassContainer className={`
    flex 
    flex-col 
    items-center 
    text-center 
    transition-all 
    duration-300 
    hover:scale-105 
    relative 
    ${isPopular ? `border-4 border-${colorConfig.light.highlight}` : ''}
  `}>
    {isPopular && (
      <div className={`
        absolute 
        -top-4 
        left-1/2 
        transform 
        -translate-x-1/2 
        bg-${colorConfig.light.highlight} 
        text-white 
        px-4 
        py-1 
        rounded-full 
        text-sm 
        font-semibold
      `}>
        Most Popular
      </div>
    )}
    <h3 className={`text-2xl font-semibold mb-4 ${colorConfig.light.text}`}>
      {title}
    </h3>
    <p className={`text-4xl font-bold mb-6 ${colorConfig.light.text}`}>
      {price}
    </p>
    <ul className="space-y-2 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className={`w-5 h-5 mr-2 text-${colorConfig.light.highlight}`} />
          <span className={colorConfig.light.subtext}>{feature}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={onChoosePlan}
      className={`
        bg-${colorConfig.light.highlight} 
        text-white 
        font-bold 
        py-2 
        px-6 
        rounded-lg 
        hover:opacity-90 
        transition 
        duration-300 
        mt-auto
      `}
    >
      Choose Plan
    </button>
  </GlassContainer>
);

export {
  GlassContainer,
  BackgroundBlob,
  Header,
  HeroSection,
  FeatureCard,
  PricingCard,
  colorConfig
};