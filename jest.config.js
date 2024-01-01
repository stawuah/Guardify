module.exports = {
    testEnvironment: 'node', // or 'jsdom' for browser-like environment
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    // setupFilesAfterEnv: ['<rootDir>/test-setup.js'], // Setup file to run before each test suite
    coverageDirectory: './src/main.js', // Directory for coverage reports
    collectCoverageFrom: ['src/**/*.js'], // Files to include in code coverage analysis
    moduleNameMapper: {
      // Mock CSS and other file imports in Jest
      '\\.(css|scss)$': 'identity-obj-proxy',
      // Handle image imports in Jest
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/fileMock.js',
    },
    collectCoverage: true,
    verbose: true,
    coverageDirectory: "coverage",
    // Other configuration options...
  };
  