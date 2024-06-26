import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, Check } from 'lucide-react';

import Header from './components/Header';  // Adjust the path as necessary
import Blobs from './components/Blobs';

const colorConfig = {
  light: {
    background: 'bg-gray-100',
    heroGradient: 'from-blue-600 to-purple-800',
    text: 'text-gray-900',
    subtext: 'text-gray-700',
    glassBackground: 'bg-white/30',
    glassGradient: 'bg-gradient-to-br from-white/30 to-transparent',
    highlight: 'blue-500',
    blobs: ['bg-pink-300', 'bg-purple-300', 'bg-blue-300'],
  },
  dark: {
    background: 'bg-gray-900',
    heroGradient: 'from-green-400 to-blue-500',
    text: 'text-white',
    subtext: 'text-gray-300',
    glassBackground: 'bg-gray-800/10',
    glassGradient: 'bg-gradient-to-br from-white/10 to-transparent',
    highlight: 'green-500',
    blobs: ['bg-green-400', 'bg-green-500', 'bg-emerald-400'],
  }
};

const GlassmorphismLoginRegister = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [colors, setColors] = useState(colorConfig.light);

  useEffect(() => {
    setColors(isDarkMode ? colorConfig.dark : colorConfig.light);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const InputField = ({ icon, type, placeholder }) => (
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

  const buttonClass = `w-full bg-${colors.highlight} text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition duration-300 mt-6`;
  const highlightTextClass = `ml-2 text-${colors.highlight} hover:underline focus:outline-none`;

  return (
    <div className={`min-h-screen ${colors.background} transition-colors duration-300 relative overflow-hidden`}>
      {/* Background shapes */}
      <Blobs count={5} colors={colors.blobs} isDarkMode={isDarkMode} />

      {/* Sticky header */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} colors={colors} />

      {/* Login/Register section */}
      <section className="pt-28 pb-20 relative z-10">
        <div className="container mx-auto max-w-md px-6">
          <div className={`${colors.glassBackground} ${colors.glassGradient} backdrop-blur-lg rounded-xl p-8 shadow-lg`}>
            <h2 className={`text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r ${colors.heroGradient}`}>
              {isLogin ? 'Login' : 'Register'}
            </h2>
            <form>
              {!isLogin && (
                <InputField
                  icon={<User />}
                  type="text"
                  placeholder="Full Name"
                />
              )}
              <InputField
                icon={<Mail />}
                type="email"
                placeholder="Email"
              />
              <InputField
                icon={<Lock />}
                type="password"
                placeholder="Password"
              />
              {!isLogin && (
                <InputField
                  icon={<Check />}
                  type="password"
                  placeholder="Confirm Password"
                />
              )}
              <button
                type="submit"
                className={buttonClass}
              >
                {isLogin ? 'Login' : 'Register'}
              </button>
            </form>
            <p className={`mt-4 text-center ${colors.subtext}`}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleForm}
                className={highlightTextClass}
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </section>
      {/* Debug information */}
      <div className="fixed bottom-4 left-4 bg-white/80 p-2 rounded">
        <p>Mode: {isDarkMode ? 'Dark' : 'Light'}</p>
        <p>Highlight: {colors.highlight}</p>
        <p>Button Class: {buttonClass}</p>
        <p>Highlight Text Class: {highlightTextClass}</p>
      </div>
    </div>
  );
};

export default GlassmorphismLoginRegister;