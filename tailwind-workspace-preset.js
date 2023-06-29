const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", ...fontFamily.sans],
        mono: ["Fira Mono", ...fontFamily.mono],
        book: ["Fira Sans Book", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
