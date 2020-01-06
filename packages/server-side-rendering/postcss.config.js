module.exports = {
  plugins: [
    require('postcss-custom-properties')(),
    require('postcss-flexbugs-fixes')(),
    require('postcss-nested')(),
    require('autoprefixer')({
      browsers: ['last 3 versions', 'ie >= 9', 'chrome 4', 'Edge <= 15'],
    }),
    require('postcss-assets')({
      basePath: './assets',
    }),
  ],
  sourceMap: true,
};
