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
      backgroundImage: {
        'card-item': 'radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(46, 51, 90, 0.1) 0%, rgba(28, 27, 51, 0.02) 100%)',
      },
      backdropBlur: {
        '40': '40px',
      },
    },
  },
  plugins: [],
};
