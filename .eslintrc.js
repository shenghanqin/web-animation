module.exports = {
  "env": {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    serviceworker: true,
    worker: true
  },
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "ecmaVersion": 2018,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "settings": {
    "react": {
      "version": "16.4", // React version, default to the latest React stable release
    }
  },
  "rules": {
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    "linebreak-style": [
      "warn",
      "unix"
    ],
    'no-extra-boolean-cast': 1,
    'no-console': 'off',
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true,
      },
    ],
    "quotes": [
      1,
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "react/prop-types": [
      1,
      {
        ignore: ["children"]
      }
    ]
  }
};
