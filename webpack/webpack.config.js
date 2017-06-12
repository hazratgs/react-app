const { resolve } = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const development = require('./development.config');
const production = require('./production.config');

const common = {
  entry: {
    app: [resolve(__dirname, '../src') + '/index.js'],
    vendor: [
      'babel-polyfill',
      'react', 'react-dom',
      'react-router-dom',
      'react-redux',
      'redux-devtools-extension',
      'redux-thunk'
    ]
  },
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new webpack.NoEmitOnErrorsPlugin(),
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