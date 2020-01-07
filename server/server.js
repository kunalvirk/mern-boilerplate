const express = require('express');
const mongoose = require('mongoose');
const historyAPI = require('connect-history-api-fallback');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

/* Configs */
const config = require('../config/keys');
const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port = config.port;

/* DB config here */
    //TODO :: Add DB config
/* end DB config here */

const app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());


if (isDev) {
    const compiler = webpack(webpackConfig);
    console.log(compiler.options.output);

    app.use(historyAPI({
        verbose : false
    }));

    app.use(webpackDevMiddleware(compiler, {
        publicPath : webpackConfig.output.publicPath,
        contentBase : path.resolve(__dirname, '../client/public'),
        stats : {
            colors : true,
            hash : false,
            timings : true,
            chunks : false,
            chunkModules : false,
            modules : false
        }
    }));

    app.use(webpackHotMiddleware(compiler));
    app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
    app.use(express.static(path.resolve(__dirname, '../dist')));
    app.get('*', function (req, res) {
      res.sendFile(path.resolve(__dirname, '../dist/index.html'));
      res.end();
    });
}


app.listen(port, '172.32.82.62', (err) => {
    if (err) {
      console.log(err);
    }
  
    console.info('>>> 🌎 Open http://172.32.82.62:%s/ in your browser.', port);
  });


//   module.exports = app;