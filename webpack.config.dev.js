var CopyWebpackPlugin = require('copy-webpack-plugin');
var NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
var WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;
var njkUtils = require('./src/njkUtils')

module.exports = {
  entry: './src/app.js',
  output: {
    path: `${__dirname}/dist`,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    contentBase: './src',
    watchContentBase: true
  },
  plugins: [
    new NunjucksWebpackPlugin({
      templates: njkUtils.generateTemplates(false)
    }),
    new CopyWebpackPlugin ([
      { from: 'src/assets', to: 'assets' }
    ]),
    new WatchExternalFilesPlugin({
      files: [
        './src/**/*.*'
      ]
    }),
  ],
};
