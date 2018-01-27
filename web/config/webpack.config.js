const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =
{
  entry:
  {
    'main':
    [
      '/app/web/src/main.js',
      'webpack-hot-middleware/client?reload=true'
    ]
  },
  devtool: 'source-map',
  resolve:
  {
    extensions: ['.js'],
    modules:
    [
      '/app/web/src',
      'node_modules'
    ]
  },
  output:
  {
    path: '/app/out',
    filename: '[name].js'
  },
  module:
  {
    rules:
    [
      {
        test: /\.js$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins:
  [
    new HtmlWebpackPlugin({}),
    new CompressionPlugin(
    {
      minRatio: 5,
      deleteOriginalAssets: true,
      exclude: /^index.html/
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer:
  {
    watchOptions:
    {
      poll: true
    }
  }
}