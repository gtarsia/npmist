module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:ava/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: [2, 'never'],
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './lib']
        ],
      }
    }
  }
}
