// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Jest doesn't support prettier@^3.x.x for inline snapshots
  // https://github.com/jestjs/jest/issues/14305
  prettierPath: null,
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  collectCoverageFrom: [
    // Ignore our mocks (their used for testing)
    "!**/mocks/**",
    "!*.json",
    // Ignore code coverage
    "!**/coverage/**",
    // Ignore config
    "!jest.config.js",
    "!index.ts",
    "!environment.ts",
    "!constants.ts",
    // Internal types
    "!**/*.d.ts",
  ],
  transform: {
    // https://vanilla-extract.style/documentation/test-environments/
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  moduleNameMapper: {
    "instantsearch.js": "<rootDir>/test/singleIndexMock",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transformIgnorePatterns: ["/node_modules/(?!(jose))"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
};

module.exports = config;
