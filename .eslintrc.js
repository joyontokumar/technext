module.exports = {
    settings: {
      react: {
        version: '16.11.0'
      }
    },
    ignorePatterns: [
      'node_modules/'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: ['@typescript-eslint', 'jsx-a11y'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended'
    ],
    rules: {
      '@typescript-eslint/camelcase': ['off'
      ],
      'react/react-in-jsx-scope': ['off'
      ],
      'react/display-name': ['off'
      ],
      semi: [
        2, 'never'
      ],
      // "@typescript-eslint/no-unused-vars": "off",
      '@typescript-eslint/quotes': [
        'error',
        'single',
        {
          'allowTemplateLiterals': true
        }
      ],
      '@typescript-eslint/semi': [
        2, 'never'
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }