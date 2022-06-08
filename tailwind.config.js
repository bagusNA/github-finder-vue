const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#141C2F',
        'card-dark': '#1F2A48',
        'card-dark-hover': '#2A3962',
        'light': '#F5F8FF',
        'card-light': '#FEFEFE',
        'accent-blue': '#017BFD',
      },
      fontFamily: {
        'mono': ['Jetbrains Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
