// jest.config.mjs
export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
};
