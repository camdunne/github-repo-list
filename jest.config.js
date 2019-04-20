module.exports = {
  clearMocks: true,

  coverageDirectory: "coverage",

  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.css$": "jest-transform-css"
  },

  transformIgnorePatterns: [
    "/node_modules/"
  ],
};
