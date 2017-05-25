const webpack = require('webpack');
const cssnext = require('postcss-cssnext');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  module: {
    rules: [
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
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/style.css'),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};