const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = require('./webpack/development.config');
const production = require('./webpack/production.config');

const common = {
  entry: path.join(__dirname, 'src') + '/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
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