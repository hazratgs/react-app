const cssnext = require('postcss-cssnext');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                modules: true,
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
    new ExtractTextPlugin('./css/[name].css')
  ],
  devServer: {
    stats: 'errors-only',
    port: 9000,
    compress: true
  }
};