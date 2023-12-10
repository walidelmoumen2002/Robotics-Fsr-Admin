/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '2': '2rem',
        '8': '8rem',
        '10': '10rem',
        '12': '12rem',
        '16': '16rem'
      }
    },
  },
  plugins: [require("daisyui")],
}