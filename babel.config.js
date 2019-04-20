const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['Android >= 5.0', 'IE 9', 'Chrome > 43'],
        },
        useBuiltIns: 'usage',
        modules: false
      },
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        useBuiltIns: true
      }
    ],
    "babel-plugin-react-docgen"
  ]
}

module.exports = config
