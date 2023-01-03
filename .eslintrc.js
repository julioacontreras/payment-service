module.exports = {
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.ts'],
    ecmaVersion: 7,
    sourceType: "module"    
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    browser: true,
    node: true,
    jest: true
  },  
  overrides: [{
    files: ['*.ts', '*.scss'],
    rules: {
      'quotes': [2, 'single', { 'avoidEscape': true }],
      'indent': [2, 2],
      'linebreak-style': ['error', 'unix'],
      'comma-style': ['error', 'last'],
      'eol-last': ['error', 'always'],
      'space-before-function-paren': ['error', 'always'],
      'semi': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'no-unused-vars': 'off',
      'no-undef': 'error'
    }
  }]
}
