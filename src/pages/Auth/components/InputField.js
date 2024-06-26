// src/pages/Auth/components/InputField.js
import React from 'react';

const InputField = ({ icon, type, placeholder, colors }) => (
  <div className="relative mb-4">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      {React.cloneElement(icon, { className: `w-5 h-5 text-${colors.highlight}` })}
    </div>
    <input
      type={type}
      className={`w-full pl-10 pr-3 py-2 rounded-lg ${colors.glassBackground} ${colors.glassGradient} backdrop-blur-sm ${colors.text} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-${colors.highlight}`}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;