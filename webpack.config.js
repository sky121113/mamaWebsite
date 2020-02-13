/* eslint-disable no-undef */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const BootstrapPluginConfig = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  Tether: 'tether',
  Popper: ['popper.js', 'default'],
  // In case you imported plugins individually, you must also require them here:
  // Util: 'exports-loader?Util!bootstrap/js/dist/util',
  // Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
});
module.exports = {
// 這個webpack打包的對象，這裡面加上剛剛建立的index.js
  entry: ['./src/index.jsx'],
  output: {
    // publicPath: '/dist/',
    path: `${__dirname}/src`,
    filename: 'index_bundle.js',
  },
  // 將loader的設定寫在module的rules屬性中
  module: {
  // rules的值是一個陣列可以存放多個loader物件
    rules: [
      { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-flow'], plugins: ['@babel/proposal-class-properties'] } } },
      { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-flow'], plugins: ['@babel/proposal-class-properties'] } } },
      { test: /.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  devServer: {
    // 指定開啟port為9999
    port: 9999,
  },
  plugins: [HTMLWebpackPluginConfig, BootstrapPluginConfig],
  resolve: {
    extensions: ['.js', '.jsx'], // 字尾名自動補全
  },

};
