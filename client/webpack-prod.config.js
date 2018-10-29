const path = require('path');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-bundle-[chunkhash].js'
    },

    plugins: [
        new UglifyJsPlugin()
    ]
});
