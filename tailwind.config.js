/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-yellow-color":"#004225",
        "hex-white":"#F5F5DC",
        "hex-yellow":"#FFB000"
      }
    },
  },
  plugins: [],
}