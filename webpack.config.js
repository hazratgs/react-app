const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
  entry: path.join(__dirname, 'src') + '/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack-app'
    })
  ]
};

const developmentConfig = {
  devServer: {
    stats: 'errors-only',
    port: 9000,
    compress: true
  }
};

module.exports = env => {
  if (env === 'production'){
    return common
  }
  if (env === 'development'){
    return merge(common, developmentConfig)
  }
}