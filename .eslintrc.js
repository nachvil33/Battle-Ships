module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
  rules: {
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'eol-last': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        json: 'always',
      },
    ],
  },
  ignorePatterns: ['dist/', 'build/'],
};
