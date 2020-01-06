const path = require('path');
const paths = require('../paths');
const { client: clientLoaders } = require('./options/loaders');
const resolvers = require('./options/resolvers');
const plugins = require('./options/plugins');

module.exports = {
  name: 'client',
  target: 'web',
  entry: {
    bundle: ['babel-polyfill', path.resolve(__dirname, '../../src/client/index.js')],
  },
  output: {
    path: paths.clientBuild,
    filename: 'bundle.js',
    publicPath: paths.publicPath,
  },
  module: {
    rules: clientLoaders,
  },
  resolve: resolvers,
  plugins: [...plugins.shared, ...plugins.client],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  optimization: {
    splitChunks: {
      // by default webpack v4+ provides new common chunks stategies out of the box
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};
