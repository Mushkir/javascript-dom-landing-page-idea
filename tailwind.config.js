/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "yellow-box-shadow":"0px 3px 16px -1px rgba(255,174,0,1)"
      },
      colors: {
        "background-yellow-color":"#004225",
        "hex-white":"#F5F5DC",
        "hex-yellow":"#FFB000"
      }
    },
  },
  plugins: [],
}