const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = require('./webpack/development.config');
const production = require('./webpack/production.config');

const cssnext = require('postcss-cssnext')

const common = {
  entry: path.join(__dirname, 'src') + '/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              modules: true,
              camelCase: true,
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
    new HtmlWebpackPlugin({
      title: 'Webpack-app'
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
}