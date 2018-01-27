const express = require('express');
const app = express();

const webpack = require('webpack');
const webpackConfig = require('/app/web/config/webpack.config.js');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);

app.use(webpackDev(compiler, webpackConfig.devServer || {}));
app.use(webpackHot(compiler, {log: console.log}));
app.use(express.static(webpackConfig.output.path));

app.listen(process.env.PORT);