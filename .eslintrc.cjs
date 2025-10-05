module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended', // Включает Prettier в ESLint
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rrules: {
    'import/no-unresolved': [2, { ignore: ['\\.css$'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './',
        ignore: ['\\.css$'], // 💡 игнорируем CSS
      },
    ],
  },
};
