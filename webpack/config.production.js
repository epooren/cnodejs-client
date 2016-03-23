var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var DefinePlugin = webpack.DefinePlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./webpack.config.js');


// overwrite output.filename
config.output.filename = 'js/[name].[hash].js';
// 抛出错误
config.bail = true;
// @overwrite 取出css
config.plugins[4] = new ExtractTextPlugin('css/[name].[chunkhash].css');
// 传入环境参数
config.plugins.push(new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}));
// 压缩
config.plugins.push(new UglifyJsPlugin({compress: {warnings: false}}));


module.exports = config;







