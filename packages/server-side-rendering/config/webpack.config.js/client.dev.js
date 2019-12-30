const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const baseConfig = require('./client.base');

// Forces webpack-dev-server program to write bundle files to the file system.

const config = {
  ...baseConfig,
  plugins: [...baseConfig.plugins, new WriteFileWebpackPlugin()],
  mode: 'development',
  performance: {
    hints: false,
  },
};

module.exports = config;
