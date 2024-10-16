/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ["'Aboreto'", "system-ui"],
        itim: ["'Itim'", "cursive"],
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      container: {
        padding: 1,
        center: true,
      },
    },
  },
  plugins: [],
};
