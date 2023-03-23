/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "rubik": "var(--rubik-font)",
        "playfair": "var(--playfair-font)",
      },
      colors: {
        'primary-black': '#18191E',
        'primary-gold': '#BB945E'
      },
    },
  },
  plugins: [],
}
