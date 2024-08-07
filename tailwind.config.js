/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        screenBg: "#141415",
        cardBg: "#1F1F28",
        cardHighBg: "#414250",
        accent: "#7194FE",
      },
    },
  },
  plugins: [],
};
