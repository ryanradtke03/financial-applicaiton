/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensures Tailwind scans all relevant files
  ],
  theme: {
    extend: {
      colors: {
        light: '#F7F4F3', // Light shades
        accent: '#8A7580', // Accent color
        brand: '#9A9FB2', // Main brand color
        darkAccent: '#7C736F', // Dark accent
        dark: '#2D2B3C', // Dark shades
      },
    },
  },
  plugins: [require('@tailwindcss/forms')], // Add this line
};
