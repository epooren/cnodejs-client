var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require('express');
var httpProxy = require('http-proxy');
var render = require('./render');

var config = require('./config.js');
var complier = webpack(config);
var port = 8080;
var app = express();
var page = render({
    css: ['/css/commons.css', '/css/main.css'],
    js: ['/js/commons.js', '/js/main.js']
});

app.use(webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath,

    stats: {
        colors: true,
        progress: true
    }
}));
app.use(webpackHotMiddleware(complier));

// 路由
app.get('/', function (req, res) {
    res.send(page);
});

// 代理
// var proxyServer = httpProxy.createProxyServer();
// app.all('*', function (req, res, next) {
//     var path = req.path;

//     if ((/^\/api\//).test(path)) {
//         proxyServer.web(req, res, {
//             target: 'https://cnodejs.org',
//             changeOrigin: true
//         });
//     } else {
//         next();
//     }
// });


app.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> Listening on port ' + port);
    }
});



