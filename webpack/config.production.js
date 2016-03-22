
var fs = require('fs');
var resolve = require('path').resolve;

var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
var DefinePlugin = webpack.DefinePlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('./assets-plugin.js');

var config = require('./webpack.config.js');

config.plugins.push(new ExtractTextPlugin('css/[name].[chunkhash].css'));
// 抛出错误
config.bail = true;
// ID顺序
config.plugins.push(new OccurenceOrderPlugin(true));
// 传入环境参数
config.plugins.push(new DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}));
// 压缩
config.plugins.push(new UglifyJsPlugin({compress: {warnings: false}}));

//生成资源表
config.plugins.push(new AssetsPlugin({
    publicPath: config.output.publicPath,
    template: resolve(config.SRC_PATH, './template.ejs')
}));

module.exports = config;







