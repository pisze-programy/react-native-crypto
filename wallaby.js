module.exports = function (wallaby) {
  // Babel needs this
  process.env.NODE_ENV = 'development';

  return {
    files: [
      '!app/**/*.test.js',
      'app/**/*.js',
      'package.json',
    ],

    tests: [
      'app/**/*.test.js',
      'setupTest.test.js'
    ],

    env: {
      type: 'node',
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: [
          'react-native',
        ],
      }),
    },

    setup: (wallaby) => {
      wallaby.testFramework.configure(require('./package.json').jest);
    },
  };
};