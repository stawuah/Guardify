
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  collectCoverageFrom: ['src/**/*.js'],
  collectCoverage: true,
  verbose: true,
  coverageDirectory: "coverage",
  coverageReporters: ['json', 'json-summary', 'lcov', 'text', 'clover']
};
