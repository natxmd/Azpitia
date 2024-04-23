/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "WhiteA": '#F7F9EC', 
        "YellowA": '#D5E11D',
        "YellowAFooter": '#BEC91B',
        "DarkGreenA": '#1A4D3E',
        "LightGreenA": '#C1F0A4',
      },
    },
  },
  plugins: [],
}