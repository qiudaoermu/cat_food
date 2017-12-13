/**
 *  作者：Abbott.liu
 *  搭建时间：2017年12月
 *  功能：webpack 单元测试
 */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// 引入dev-server配置文件
console.log(common)
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(common, {
    entry: {
        main: './unitTest/routerTest/index.js',
    },
    output: { //打包路径
        publicPath:'test/', // 指定publicPath
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'

    },
    devtool: 'source-map',
    devServer: {
        // contentBase: './static',
        contentBase: [path.join(__dirname, "./unitTest")], // 本地服务器 加载页面 所在的目录
        // port:7000,
        host: '127.0.0.1',
        port: 6700,

        hot: true // 服务器热加载
    }
});
