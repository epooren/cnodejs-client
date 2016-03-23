var cwd = require('process').cwd;
var resolve = require('path').resolve;
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
var HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
var NoErrorsPlugin = webpack.NoErrorsPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');


/**
 * 项目根目录
 */
var ROOT_PATH = cwd();

/**
 * 源码根目录
 */
var SRC_PATH = resolve(ROOT_PATH, './src');



var config = {
    ROOT_PATH: ROOT_PATH,
    SRC_PATH: SRC_PATH,

    devtool: 'source-map',  // 开发模式为eval

    entry: ['webpack-hot-middleware/client?reload=true', './src/index.js'],

    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[chunkhash].js',
        path: resolve(ROOT_PATH, './dist/'),
        publicPath: '/'
    },

    resolve: {
        root: [SRC_PATH],

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
        new CommonsChunkPlugin({
            name: 'commons',
            minChunks: 2
        }),
        new OccurenceOrderPlugin(true),
        new HotModuleReplacementPlugin(),
        new NoErrorsPlugin(),
        new ExtractTextPlugin('css/[name].css')
    ]
};



module.exports = config;




