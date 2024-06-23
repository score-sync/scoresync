/** @type {import('tailwindcss').Config} */
import {
  BLUE,
  GREY,
  LIGHT_BLUE,
  WHITE,
  BLACK,
  RED,
  RED100,
  BLUE100,
  BLUE200,
  BLACK100,
  NEON,
  NEON100,
} from './src/utilities/Constant';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      blue: BLUE,
      blue100: BLUE100,
      blue200: BLUE200,
      lightBlue: LIGHT_BLUE,
      grey: GREY,
      white: WHITE,
      black: BLACK,
      black100: BLACK100,
      red: RED,
      red100: RED100,
      neon: NEON,
      neon100: NEON100,
    },
  },
  plugins: [],
};
