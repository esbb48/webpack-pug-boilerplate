var CopyWebpackPlugin = require('copy-webpack-plugin');
var NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
var HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
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
  plugins: [
    new NunjucksWebpackPlugin({
      templates: njkUtils.generateTemplates(true),
      configure: {
        trimBlocks: true,
        lstripBlocks: true,
      }
    }),
    new CopyWebpackPlugin ([
      { from: 'src/assets', to: 'assets' }
    ]),
    new HtmlMinifierPlugin({
      removeComments: true,
      collapseWhitespace: true,
    }),
  ],
};
