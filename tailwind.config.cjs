/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "azure" : "#039F9F",
        "charcoal" : "#141D19",
        "indigo" : "#00010FBF",
        "tealgreen" : "#006d5b"
      },
      backgroundImage: {
        'CTA__image': "linear-gradient(to right, rgba(0, 1, 15, 0.9), rgba(0, 1, 15, 0.9)), url('./src/assets/CTA__image.png')"
      }
    },
  },
  plugins: [],
}
