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
        primary_color: '#7e62c1',
        secondary_color: '#96c152',
        neutral: '#818AA3'
      },
    },
  },
  plugins: [],
}
