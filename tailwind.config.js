/** @type {import('tailwindcss').Config} */
import { BLUE, GREY, LIGHT_BLUE, WHITE, BLACK } from './src/utilities/Constant';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      blue: BLUE,
      lightBlue: LIGHT_BLUE,
      grey: GREY,
      white: WHITE,
      black: BLACK,
    },
  },
  plugins: [],
};
