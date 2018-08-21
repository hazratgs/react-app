const { resolve } = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const host = 'localhost'
const port = 3000

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    hrm: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server'
    ]
  },
  module: {
    rules: [
      {
        test: /\.pcss$/,
        use: ExtractTextPlugin.extract({
          publicPath: '../',
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                camelCase: true,
                importLoaders: 1,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('postcss-import'),
                  require('postcss-css-variables'),
                  require('postcss-apply'),
                  require('postcss-nested'),
                  require('postcss-csso'),
                  autoprefixer({
                    browsers: '>= 1%'
                  })
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          publicPath: '../',
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: false,
                url: false
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new OpenBrowserPlugin({ url: 'http://' + host + ':'+ port }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, '../build'),
    publicPath: '/',
    stats: 'errors-only',
    compress: true,
    historyApiFallback: true,
    host: host,
    port: port,
    disableHostCheck: true
  }
};