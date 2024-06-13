/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Museo: ["Museo", "sans"],
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      screens: {
        "2xl": "1700px",
      },
    },
  },
  plugins: [],
};
