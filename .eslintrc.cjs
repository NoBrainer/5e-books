module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google', 'plugin:jsx-a11y/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'jsx-a11y', 'react'],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [
          ['builtin', 'external'],
          ['index', 'internal', 'parent', 'sibling'],
        ],
        'newlines-between': 'never',
      },
    ],
    'max-len': ['warn', 120],
    'no-unused-vars': 'warn',
    'require-jsdoc': 'off',
  },
  ignorePatterns: ['build/**/*'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.mjs'],
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules'],
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
