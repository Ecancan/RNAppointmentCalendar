module.exports = {
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['simple-import-sort', 'react'],
  root: true,
  rules: {
    'import/order': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'react-hooks/exhaustive-deps': 0
  }
};
