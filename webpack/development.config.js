const { resolve } = require('path');
const webpack = require('webpack');
const cssnext = require('postcss-cssnext');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-import'),
                cssnext({
                  browsers: '> 5%'
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, '../build'),
    publicPath: '/',
    stats: 'errors-only',
    port: 3000,
    compress: true,
    historyApiFallback: true
  }
};