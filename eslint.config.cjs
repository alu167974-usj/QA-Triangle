const globals = require('globals');

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'coverage/**'
    ]
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        ...globals.jest,
        chai: 'readonly'
      }
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'off',
      'semi': ['error', 'always']
    }
  }
];
