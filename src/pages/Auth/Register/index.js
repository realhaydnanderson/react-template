// src/pages/Auth/Register/index.js
import React from 'react';
import { User, Lock, Mail, Check } from 'lucide-react';
import Header from '../../../components/Header';
import Blobs from '../../../components/Blobs';
import AuthForm from '../components/AuthForm';
import InputField from '../components/InputField';
import { useTheme } from '../../../components/ThemeProvider';  // Assuming you'll create this hook

const RegisterPage = () => {
  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  return (
    <div className={`min-h-screen ${colors.background} transition-colors duration-300 relative overflow-hidden`}>
      <Blobs count={5} colors={colors.blobs} isDarkMode={isDarkMode} />
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} colors={colors} />
      
      <section className="pt-28 pb-20 relative z-10">
        <div className="container mx-auto max-w-md px-6">
          <AuthForm
            title="Register"
            colors={colors}
            submitText="Register"
            toggleText="Already have an account?"
            toggleLink="/login"
          >
            <InputField
              icon={<User />}
              type="text"
              placeholder="Full Name"
              colors={colors}
            />
            <InputField
              icon={<Mail />}
              type="email"
              placeholder="Email"
              colors={colors}
            />
            <InputField
              icon={<Lock />}
              type="password"
              placeholder="Password"
              colors={colors}
            />
            <InputField
              icon={<Check />}
              type="password"
              placeholder="Confirm Password"
              colors={colors}
            />
          </AuthForm>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;