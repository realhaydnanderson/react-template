// src/pages/Auth/components/AuthForm.js
import React from 'react';
import { Link } from 'react-router-dom';  // Assuming you're using React Router

const AuthForm = ({ title, children, colors, submitText, toggleText, toggleLink }) => (
  <div className={`${colors.glassBackground} ${colors.glassGradient} backdrop-blur rounded-xl p-8 material-shadow`}>
    <h2 className={`text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r ${colors.heroGradient}`}>
      {title}
    </h2>
    <form>
      {children}
      <button
        type="submit"
        className={`w-full bg-${colors.highlight} text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition duration-300 mt-6`}
      >
        {submitText}
      </button>
    </form>
    <p className={`mt-4 text-center ${colors.subtext}`}>
      {toggleText}
      <Link
        to={toggleLink}
        className={`ml-2 text-${colors.highlight} hover:underline focus:outline-none`}
      >
        {title === 'Login' ? 'Register' : 'Login'}
      </Link>
    </p>
  </div>
);

export default AuthForm;