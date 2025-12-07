/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/templates/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        icnBlack: "#000000",
        icnGray: "#111111",
        icnWhite: "#ffffff",
        icnGold: "#d4af37",
        icnGoldLight: "#f0cf63"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Helvetica Neue", "Arial", "sans-serif"]
      },
      letterSpacing: {
        wideplus: "0.18em"
      },
      boxShadow: {
        icnCard: "0 0 0 1px rgba(255,255,255,0.1)"
      }
    }
  },
  plugins: []
};
