/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary_color: '#7E62C1',
        secondary_color: '#96C152',
        neutral: '#818AA3'
      },
    },
  },
  plugins: [],
}
