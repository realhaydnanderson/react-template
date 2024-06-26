import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = ({ isDarkMode, toggleDarkMode, colors }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className={`container mx-auto material-shadow ${colors.glassBackground} ${colors.glassGradient} backdrop-blur rounded-full px-6 py-3 flex justify-between items-center`}>
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex space-x-6 items-center">
          <a href="/" className={`${colors.subtext} hover:text-gray-500`}>Home</a>
          <a href="/pricing" className={`${colors.subtext} hover:text-gray-500`}>Pricing</a>
          <a href="/login" className={`${colors.subtext} hover:text-gray-500`}>Login</a>
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;