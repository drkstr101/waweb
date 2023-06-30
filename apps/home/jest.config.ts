/* eslint-disable */
export default {
  displayName: "home",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nx/react/plugins/jest",
    "^.+\\.[tj]sx?$": ["babel-jest", { presets: ["@nx/next/babel"] }],
  },
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    // "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    // "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i": `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    "^@home/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "mjs"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageDirectory: "../../coverage/apps/home",
};
