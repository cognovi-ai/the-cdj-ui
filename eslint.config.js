import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import pluginJest from 'eslint-plugin-jest';

export default [
  {
    ignores: ['docs', 'node_modules', 'dist', 'coverage'],
  },
  {
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      '@stylistic/ts': stylisticTs,
      'jest': pluginJest,
    },
  },
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'capitalized-comments': ['warn', 'always'],
      'dot-notation': 'warn',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'quotes': ['error', 'single'],
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/semi': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'sort-imports': 'warn',
      'callback-return': 'warn',
      'global-require': 'warn',
      'handle-callback-err': 'warn',
      'no-buffer-constructor': 'error',
      'no-mixed-requires': ['warn', { grouping: true, allowCall: true }],
      'no-new-require': 'error',
      'no-path-concat': 'error',
      'no-process-exit': 'warn',
      '@typescript-eslint/no-unused-vars': ['error'],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
];