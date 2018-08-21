const { resolve } = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const development = require('./development.config')
const production = require('./production.config')

const common = {
  entry: {
    app: [resolve(__dirname, '../src') + '/index.js'],
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
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
  resolve: {
    modules: ['node_modules', 'src']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(jpg|png|woff|woff2|ttf|otf|eot)$/,
        loader: 'file-loader',
        options: {
          name: 'public/[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          'svg-react-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeTitle: true},
                {convertColors: {shorthex: false}},
                {convertPathData: false}
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([ { from: 'src/public/', to: './' } ]),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/public') + '/index.html'
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