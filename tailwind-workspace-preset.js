const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: ({ colors }) => ({
        neutral: colors.neutral,
        primary: colors.cyan,
        secondary: colors.indigo,
        accent: colors.teal,
        danger: colors.rose,
        warning: colors.amber,
        success: colors.emerald,
        white: "#fafafa",
        black: "#0a0a0a",
      }),
      fontFamily: {
        sans: ["Fira Sans", ...fontFamily.sans],
        mono: ["Fira Mono", ...fontFamily.mono],
        book: ["Fira Sans Book", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
