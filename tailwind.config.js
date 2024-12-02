/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  mode: 'jit',
  theme: {
    colors: {
      primary: '#F9831F', // 기본 색상 지정
      secondary: '#404040',
      disabled: '#C0C0C0',
      tertiary: '#EEEEEE',
      white: '#ffffff',
      black: '#000000',
      'primary-black': '#1A1A1A',
      'custom-black': 'rgba(0,0,0,0.3)',
    },
    fontFamily: {
      SUIT: ['SUIT', 'sans-serif'],
    },
    backgroundImage: {
      'gradient-to-transparent':
        'linear-gradient(180deg, rgba(30,30,30,0.3) 0%, rgba(255,255,255,0) 100%);',
    },
    border: {},
    extend: {
      boxShadow: {
        nav: '0 4px 30px 0 rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
