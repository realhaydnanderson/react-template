// src/pages/HomePage/components/GlassCard.js

const GlassCard = ({ icon: Icon, title, description, colors, isDarkMode }) => (
    <div className={`${colors.glassBackground} ${colors.glassGradient} backdrop-blur rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105`}>
      <Icon className={`w-12 h-12 mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
      <h3 className={`text-xl font-semibold mb-2 ${colors.text}`}>{title}</h3>
      <p className={colors.subtext}>{description}</p>
    </div>
  );

export default GlassCard;