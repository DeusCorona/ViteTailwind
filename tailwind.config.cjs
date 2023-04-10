/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "scarlet" : "#ff2400",
        "tangerine" : "#f28500",
        "charcoal" : "#36454f"
      },
      backgroundImage: {
        'CTA__image': "linear-gradient(to right, rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.9)), url('./src/assets/CTA__image.jpg')"
      }
    },
  },
  plugins: [],
}
