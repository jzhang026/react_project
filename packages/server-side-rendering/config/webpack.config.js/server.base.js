const path = require('path');
const nodeExternals = require('webpack-node-externals');

const paths = require('../paths');
const { server: serverLoaders } = require('./options/loaders');
const resolvers = require('./options/resolvers');
const plugins = require('./options/plugins');

module.exports = {
  name: 'server',
  target: 'node',
  entry: {
    server: ['babel-polyfill', path.resolve(__dirname, '../../src/server/index.js')],
  },
  externals: [nodeExternals()],
  output: {
    path: paths.serverBuild,
    filename: 'server.js',
    publicPath: paths.publicPath,
  },
  resolve: resolvers,
  module: {
    rules: serverLoaders,
  },
  plugins: [...plugins.shared, ...plugins.server],
};
