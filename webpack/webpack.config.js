const { resolve } = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const development = require('./development.config');
const production = require('./production.config');

const common = {
  entry: [
    resolve(__dirname, '../src') + '/index.js'
  ],
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        loaders: ['babel-loader', 'svg-react-loader']
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src') + '/index.html'
    })
  ]
};

module.exports = env => {
  if (env === 'production'){
    return merge(common, production)
  }
  if (env === 'development'){
    return merge(common, development)
  }
};