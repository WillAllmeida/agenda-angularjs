const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-source-map',
    mode: 'development',
    devServer: {
        watchContentBase: true,
        compress: true,
        port: 8080
    },
});
