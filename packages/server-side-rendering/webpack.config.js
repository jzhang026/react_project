const path = require('path')
module.exports = {
  entry: {
    app: [
      './client/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: '.webpack-cache'
            }

          }
        ]
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',

}