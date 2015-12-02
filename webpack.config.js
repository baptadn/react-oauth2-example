'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  target: 'web',
  cache: true,
  context: __dirname,
  entry: {
    app: path.join(__dirname, 'src/app'),
    vendor: ['react', 'react-dom', 'react-router', 'react-mixin', 'alt', 'history']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        include: /\.js$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'bundle.vendor.js'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      title: 'Auth app',
      minify: false,
      inject: 'body'
    }),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    __dirname: true,
    fs: 'empty'
  }
};
