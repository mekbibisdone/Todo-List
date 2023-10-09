const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path')
module.exports = {
  mode:'development',
  entry:'./src/index.js',
  devtool: false,
  plugins: [new webpack.SourceMapDevToolPlugin({})],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ToDo List',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: './dist',
  },
}