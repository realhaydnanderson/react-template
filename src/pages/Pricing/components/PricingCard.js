// src/pages/Pricing/components/PricingCard.js
import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features, isPopular, colors }) => (
  <div className={`${colors.glassBackground} ${colors.glassGradient} material-shadow backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 relative ${isPopular ? `border-4 border-${colors.highlight}` : ''}`}>
    {isPopular && (
      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-${colors.highlight} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
        Most Popular
      </div>
    )}
    <h3 className={`text-2xl font-semibold mb-4 ${colors.text}`}>{title}</h3>
    <p className={`text-4xl font-bold mb-6 ${colors.text}`}>{price}</p>
    <ul className="space-y-2 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className={`w-5 h-5 mr-2 text-${colors.highlight}`} />
          <span className={colors.subtext}>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`bg-${colors.highlight} text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition duration-300 mt-auto`}>
      Choose Plan
    </button>
  </div>
);

export default PricingCard;