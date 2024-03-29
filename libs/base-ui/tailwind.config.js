const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{js,jsx,mjs,ts,tsx,html,mdx}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require("../../tailwind-workspace-preset.js")],
};
