/**
 *  作者：Abbott.liu
 *  搭建时间：2017年10月5日
 *  功能：webpack 生产环境
 */
const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: { //打包路径

        //filename: '[name].bundle.js', //出口文件名
        // filename: '[name].[chunkhash].js',
        // 可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径
        /*
        path: path.resolve(__dirname, './public/dist'), //打包路径
        publicPath: 'dist/', // 指定资源文件引用的目录
        //filename: '[name].bundle.js',
        filename: '[name].[hash:5].js',
        //chunkFilename: '[name].bundle.js',
        chunkFilename: '[name].[hash:5].chunk.js',
        */
        //filename: '[name].bundle.js', //出口文件名

        // filename: '[name].[chunkhash].js',
        // 可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径

        path: path.resolve(__dirname, './public/dist'), //打包路径
        publicPath:'dist/', // 指定publicPath
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'


    },
    //publicPath: "/dist"

    devtool: 'source-map', // 为了可以在控制台跟踪到自己的代码位置，精确到行
    plugins: [
        new UglifyJSPlugin({ // //压缩代码
            sourceMap: true,
            compress: {
                warnings: false,
                // Drop 'console' statements
                drop_console: true
            },
            except: ['$super', '$', 'exports', 'require']    //排除关键字
        })
    ]
});
