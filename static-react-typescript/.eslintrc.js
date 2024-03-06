module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: ['**/*.test.ts'],
      },
    ],
    'no-usused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'import/no-cycle': 'off',
    'class-methods-use-this': 'off',
    'no-unused-expressions': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'no-underscore-dangle': 'off',
  },
  overrides: [
    {
      files: ['config/**/*.ts', 'serverless.ts'],
      rules: {
        'no-template-curly-in-string': 'off',
      },
    },
    {
      files: ['src/**/*.d.ts'],
      rules: {
        'no-use-before-define': 'off',
        'no-shadow': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
