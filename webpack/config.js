const process = require('process');
const resolve = require('path').resolve;
const fs = require('fs');

var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');


/**
 * 项目根目录
 */
var ROOT_PATH = process.cwd();

/**
 * 源码根目录
 */
var SRC_PATH = resolve(ROOT_PATH, './src');


var commonsChunk = new CommonsChunkPlugin({
    name: 'commons',
    minChunks: 2
});

var config = {
    ROOT_PATH: ROOT_PATH,
    SRC_PATH: SRC_PATH,

    devtool: 'source-map',  // 开发模式为eval

    entry: ['webpack-hot-middleware/client?reload=true', './src/index.js'],

    // localhost:port/index.html
    //   * localhost:port/(js|css)/[filename].(js|css)
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/fragments/[chunkhash].js',
        path: 'dist/',
        publicPath: '/'
    },

    resolve: {
        root: [
            SRC_PATH
        ],

        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', 'css', '.scss']
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?presets[]=react,presets[]=es2015'
            },
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!resolve-url!sass?sourceMap')
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?name=img/[name].[hash].[ext]&limit=10'
            },
            {
                test: /\.(eot|ttf|woff|svg)$/,
                loader: 'url?name=fonts/[name].[hash].[ext]'}
        ]
    },

    plugins: [
        commonsChunk,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};



module.exports = config;




