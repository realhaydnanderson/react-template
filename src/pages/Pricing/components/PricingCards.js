// src/pages/Pricing/PricingCards.js
import React from 'react';
import PricingCard from './PricingCard';

const PricingCards = ({ colors }) => {
  const plans = [
    {
      title: "Basic",
      price: "$9.99/mo",
      features: [
        "10 projects",
        "5GB storage",
        "Basic analytics",
        "24/7 support"
      ],
      isPopular: false
    },
    {
      title: "Pro",
      price: "$19.99/mo",
      features: [
        "Unlimited projects",
        "20GB storage",
        "Advanced analytics",
        "Priority support",
        "API access"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "$49.99/mo",
      features: [
        "Unlimited everything",
        "100GB storage",
        "Custom analytics",
        "Dedicated support",
        "Custom integrations"
      ],
      isPopular: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <PricingCard key={index} {...plan} colors={colors} />
      ))}
    </div>
  );
};

export default PricingCards;