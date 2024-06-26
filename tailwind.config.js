/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-blue-400',
    'bg-blue-500',
    'bg-green-500',
    'border-blue-400',
    'border-green-500',
    'text-blue-400',
    'text-blue-500',
    'text-green-500',
    // Add any other dynamic classes you're using
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
