const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
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
                  require('postcss-css-variables'),
                  require('postcss-apply'),
                  require('postcss-nested'),
                  autoprefixer({
                    browsers: '>= 5%'
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
    new ExtractTextPlugin('css/[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    })
  ]
};