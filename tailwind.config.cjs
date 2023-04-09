/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "burgundy" : "#800020",
        "tangerine" : "#f28500",
        "charcoal" : "#36454f"
      }
    },
  },
  plugins: [],
}
