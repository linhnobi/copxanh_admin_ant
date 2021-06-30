require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
  purge: {
    enabled: false,
    content: ['./src/**/*.ts', './src/**/*.html'],
    options: {
      whitelistPatterns: [/^font/, /^cursor/, /^pl-/, /^px-/, /^pr-/, /^ml-/, /^mx-/, /^mr-/, /^mb-/, /^mt-/, /^ng-/]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
