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
        primary_color: '#A491D3',
        secondary_color: '#C5DCA0',
        neutral: '#818AA3'
      },
    },
  },
  plugins: [],
}
