module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'
  ],
  globals: {
    'window': true,
    'document': true
  }
}
