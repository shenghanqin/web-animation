const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.resolve.alias = Object.assign(
    config.resolve.alias,
    {
      '@utils': path.resolve('utils'),
      '@components': path.resolve('src')
    }
  )
  config.module.rules.push(
    {
      test: /\.(js|jsx)$/,
      use: [
        {
          loader: path.resolve(__dirname, '../', 'node_modules', 'babel-loader'),
          options: {
            cacheDirectory: true
          },
        },
      ],
      exclude: /node_modules/,
    }
  )

  config.module.rules.push({
    test: /\.styl$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: false,
          importLoaders: 1
        }
      },
      {
        loader: 'postcss-loader',
        options: { config: { ctx: { enablePxtorem: false }}}
      },
      {
        loader: 'stylus-loader'
      }
    ]
  })

  // config.module.rules.push({
  //   test: /\.css$/,
  //   use: [
  //     'style-loader',
  //     {
  //       loader: 'css-loader',
  //       options: {
  //         sourceMap: false,
  //         importLoaders: 1
  //       }
  //     }
  //   ]
  // })

  config.module.rules.push({
    test: /\.story\.js$/,
    use: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          enforce: 'pre',
        }
      }
    ]
  })

  return config
}