module.exports = {
    testEnvironment: 'node', // or 'jsdom' for browser-like environment
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    // setupFilesAfterEnv: ['<rootDir>/test-setup.js'], // Setup file to run before each test suite
    coverageDirectory: './src/main.js', // Directory for coverage reports
    collectCoverageFrom: ['src/**/*.js'], // Files to include in code coverage analysis
    collectCoverage: true,
    verbose: true,
    coverageDirectory: "coverage",
    // Other configuration options...
  };
  