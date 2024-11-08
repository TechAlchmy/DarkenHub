/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ["'Aboreto'", "system-ui"],
        itim: ["'Itim'", "cursive"],
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        crimson: ['Crimson Pro', 'serif'],
      },
      borderWidth: {
        '1.5': '1.5px', // Add a custom border width
      },
      container: {
        padding: 1,
        center: true,
      },
      backgroundImage: {
        'profile-process': 'radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.4) 100%), linear-gradient(180deg, rgba(46, 51, 90, 0.2) 0%, rgba(28, 27, 51, 0.12) 100%)',
        'card-item': 'radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(46, 51, 90, 0.1) 0%, rgba(28, 27, 51, 0.02) 100%)',
        'buy_button': 'linear-gradient(180deg, rgba(0, 0, 0, 0) -40.91%, #402788 132.95%)',
        'filter': 'linear-gradient(91.24deg, rgba(255, 255, 255, 0.3) 1.74%, rgba(255, 255, 255, 0.15) 101.68%)',
        'filter1': 'linear-gradient(180deg, #C5CCDE -14.49%, rgba(209, 219, 230, 0) 100%)',
        'custom-multiple': `
          linear-gradient(180deg, rgba(255, 255, 255, 0) -19.57%, rgba(255, 255, 255, 0.6) 98.8%, rgba(255, 255, 255, 0.222222) 130.43%),
          linear-gradient(180deg, rgba(255, 255, 255, 0) 48.05%, rgba(255, 255, 255, 0.1) 48.9%)
        `,
        'custom-gradient': 'linear-gradient(0deg, #040404 0%, #040404 50%, rgba(0, 0, 0, 0) 100%)',
        'gradient-text': 'linear-gradient(90deg, #ACB6E5 0%, #86FDE8 100%)',
        'item-bg': 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%)',
        'item-bg1': 'linear-gradient(180deg, rgba(255, 255, 255, 0) -19.57%, rgba(255, 255, 255, 0.6) 98.8%, rgba(255, 255, 255, 0.222222) 130.43%), linear-gradient(180deg, rgba(255, 255, 255, 0) 48.05%, rgba(255, 255, 255, 0.1) 48.9%)',
        'custom-linear': 'linear-gradient(180deg, rgba(46, 51, 90, 0.1) 0%, rgba(28, 27, 51, 0.02) 100%)',
        'custom-radial': 'radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)',
        'hero_box': 'linear-gradient(90.13deg, rgba(17, 16, 24, 0) -0.93%, rgba(17, 16, 24, 0.51) 99.93%)',
        'global-chat': 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(150.22deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 22.44%)',
        'privacy': 'linear-gradient(90.13deg, rgba(17, 16, 24, 0) -0.93%, rgba(17, 16, 24, 0.51) 99.93%)',
        'privacy-btn': 'linear-gradient(180deg, rgba(61, 66, 68, 0) -40.91%, rgba(158, 170, 176, 0.62) 132.95%)',
        'profile_user': 'linear-gradient(180deg, rgba(46, 51, 90, 0) 0%, rgba(28, 27, 51, 0.1) 100%), radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 99.59%)',
        'profile_user1': 'background: radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.16) 100%)',
        'profile_chat': 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),linear-gradient(150.22deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 22.44%)',
        'service_bg': 'linear-gradient(91.24deg, rgba(255, 255, 255, 0.3) 1.74%, rgba(255, 255, 255, 0.15) 101.68%)',
        'view-more': 'linear-gradient(180deg, rgba(255, 255, 255, 0) -19.57%, rgba(255, 255, 255, 0.6) 98.8%, rgba(255, 255, 255, 0.222222) 130.43%), linear-gradient(180deg, rgba(255, 255, 255, 0) 48.05%, rgba(255, 255, 255, 0.1) 48.9%)',
        'review': 'linear-gradient(180deg, #1E1D1A 0%, #000000 100%)',
        'review-seller': 'linear-gradient(180deg, rgba(49, 58, 91, 0.1) 0%, rgba(49, 58, 91, 0.3) 49.84%, rgba(49, 58, 91, 0) 96.11%)',
        'service': 'linear-gradient(270deg, rgba(255, 255, 255, 0.1) 57.6%, rgba(255, 255, 255, 0) 91.06%)',

        'radial-white': 'radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)',
        'linear-white-top': 'linear-gradient(to top, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
        'linear-white-bottom': 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
        'linear-white-left': 'linear-gradient(to left, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
        'linear-white-right': 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)'
      },
      backdropBlur: {
        '20': '20px',
        '40': '40px',
        '10': '10px',
        '29.7': '29.692445755004883px',
        '30': '30px',
        '200': '200px',


      },
      boxShadow: {
        'custom-1': '0px 30px 60px 0px rgba(0, 0, 0, 0.1)',
        'custom-2': '0px 15px 30px 0px rgba(0, 0, 0, 0.05)',
        'custom-3': '0px 5px 10px 0px rgba(0, 0, 0, 0.05)',
        'custom-inset': 'inset 0px 0px 100px 0px rgba(204, 215, 255, 0.15)',
      },
      borderImage: {
        'custom': 'linear-gradient(180deg, rgba(39, 55, 207, 0.4) 17.19%, rgba(101, 98, 251, 0.77) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(180deg, rgba(39, 55, 207, 0) -4.69%, rgba(189, 252, 254, 0.3) 100%)',
        'custom1': 'linear-gradient(250.57deg, rgba(255, 255, 255, 0.3) 25.87%, rgba(255, 255, 255, 0) 63.04%), conic-gradient(from 180deg at 51.95% 49.81%, rgba(0, 0, 0, 0.105455) -2.11deg, rgba(51, 231, 255, 0) 131.45deg, #F5D4FF 184.64deg, rgba(51, 157, 255, 0) 252.32deg, rgba(0, 0, 0, 0.0885149) 310.85deg, rgba(0, 0, 0, 0.105455) 357.89deg, rgba(51, 231, 255, 0) 491.45deg)',
        'filter': 'linear-gradient(93.17deg, #FFFFFF 0.92%, #06132D 100%), linear-gradient(93.17deg, rgba(6, 19, 45, 0) 0.92%, #FFFFFF 100%)',
        'banner': 'linear-gradient(93.17deg, #FFFFFF 0.92%, #06132D 100%), linear-gradient(93.17deg, rgba(6, 19, 45, 0) 0.92%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
};
