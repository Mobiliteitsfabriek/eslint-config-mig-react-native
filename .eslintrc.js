module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'airbnb/hooks', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'detox'],
  ignorePatterns: ['*.graphql', 'graphql.ts', 'src/locales/'],
  globals: { React: true, JSX: true },
  env: { jest: true },
  rules: {
    'prefer-template': 'off',

    // allow the use of dev dependencies in dev scripts
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/*.{stories,story}.[jt]s?(x)',
          '**/*.spec.[jt]s?(x)',
        ],
      },
    ],

    // allow the import of React, while disalowing use-before-define in general
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],

    // don't use non-null assertion, prefer defensive programming in case you are wrong
    '@typescript-eslint/no-non-null-assertion': 'error',

    // don't use semicolons.
    semi: ['error', 'never'],

    // format arrow body methods as required
    'arrow-body-style': 'off',

    // use typescript by default
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // import by default when necessary
    'import/prefer-default-export': 'off',

    // break lines at 80
    'max-len': ['error', 120],

    // don't commit console statements
    'no-console': ['warn'], // warn when using console statements

    // don't use unused var except with _ prefix
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // forbid to use 'any' type
    '@typescript-eslint/no-explicit-any': ['error'],

    // use of curlies
    'object-curly-spacing': [2, 'always'],
    'react/jsx-curly-newline': 'off',

    // allow prop spreading
    'react/jsx-props-no-spreading': 'off',

    // react specific settings
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-unescaped-entities': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-fragments': ['error', 'element'],

    // prefer to not use array index as key, it is not the best for performance
    'react/no-array-index-key': 'warn',

    // allow inconsistent returns
    'consistent-return': 'off',

    // allow underscore dangle for apollo / graphql
    'no-underscore-dangle': [2, { allow: ['__typename'] }],

    // allow switch without default case
    'default-case': 'off',

    // Arrange components consistently
    'react/sort-comp': [
      2,
      {
        order: [
          'static-variables',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],

    // Sort RN styles, this will sort typed stylenames and style props in alphabetic order
    'react-native/sort-styles': [
      'error',
      'asc',
      { ignoreClassNames: false, ignoreStyleProperties: false },
    ],

    // Sort props for JSX component
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
}
