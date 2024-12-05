/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'media', // or 'class'
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
	  extend: {},
	  fontFamily: {
        tatica: ['Tatica', 'sans-serif'],
      },
	},
	plugins: [],
  };
  