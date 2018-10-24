const { resolve } = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const development = require('./development.config')
const production = require('./production.config')

const common = {
  entry: {
    polyfill: 'babel-polyfill',
    app: resolve(__dirname, '../src') + '/index.js',
  },
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'js/[name].js',
    publicPath: '/'
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new CopyWebpackPlugin([ { from: 'src/public/', to: './' } ]),
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