// https://docs.expo.dev/guides/using-eslint/
['/dist/*'],
  (module.exports = {
    extends: ['expo', 'prettier'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      semi: true,
    },
  });
