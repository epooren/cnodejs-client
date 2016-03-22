

var fs = require('fs');
var resolve = require('path').resolve;
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require('express');
var httpProxy = require('http-proxy');

var config = require('./webpack.config.js');
config.output.filename = 'js/[name].js';
config.plugins.push(new ExtractTextPlugin('css/[name].css'));
var complier = webpack(config);


var port = 8080;
var app = express();

app.set('views', config.SRC_PATH);
app.set('view engine', 'ejs');

app.use(webpackDevMiddleware(complier, {
    //noInfo: true,
    publicPath: config.output.publicPath,

    stats: {
        colors: true,
        progress: true
    }
}));
app.use(webpackHotMiddleware(complier));

// 访问入口
app.get('/plan/*.html', function (req, res) {
    // 动态注入webpack生成的资源
    var name = req.params[0];

    res.render('template.ejs', {
        stylesheets: [
            '/plan/dist/css/commons.css',
            '/plan/dist/css/' + name + '.css'
        ],
        javascripts: [
            '/plan/dist/js/commons.js',
            '/plan/dist/js/' + name + '.js'
        ]
    });
});

// 代理
var proxyServer = httpProxy.createProxyServer();
app.all('*', function (req, res, next) {
    var path = req.path;

    if ((/^\/api\//).test(path)) {
        proxyServer.web(req, res, {
            target: 'http://m.zuzuche.com',
            changeOrigin: true
        });
    } else {
        next();
    }
});


app.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> Listening on port ' + port);
    }
});



