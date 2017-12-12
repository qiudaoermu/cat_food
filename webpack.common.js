/**
 *  项目名称：脚手架
 *  搭建时间：2017年10月5日
 *  作者: Abbott.liu
 *  描述: 前端环境配置
 *  功能：webpack 公有配置
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');// 热加载需要的 webpack

// 引入css 单独打包插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件


// the path(s) that should be cleaned
let pathsToClean = [
    // 清理的文件夹名
    'dist',
    'static'
]
// the clean options to use
let cleanOptions = {
    root:     '/', //清理的路径
    // exclude:  ['*.html'],
    verbose:  true,
    dry:      false
}


module.exports = {
    entry: {
        main: './src/main.js',

        // 将react相关组件打包成vendor.js
        vendor: [
            'react',
            'react-dom',
            'react-router'
        ]
        // 将jquery单独打成一个独立打文件
        //jquery:["jquery"],
        // highcharts:["highcharts"],
        //echarts:["echarts"]


    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            /*
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            */
            {
                //正则匹配后缀.js文件;
                test: /\.js$/,
                //需要排除的目录
                exclude: /(node_modules|bower_components)/,
                //加载babel-loader转译es6
                loaders: [
                    'babel-loader', // .babelrc 具体配置文件
                    //'eslint-loader'// 必须在 .babelrc 的后面

                ]
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },


            {
                test:/\.(png|svg|jpg|gif|ico|woff|eot|ttf)$/,
                exclude: /(public)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {

                            limit:8000000,   //小于50K的 都打包

                            name:'[hash:8].[name].[ext]',
                            // publicPath:"img/",  //替换CSS引用的图片路径 可以替换成爱拍云上的路径
                            // outputPath:"../img/"        //生成之后存放的路径
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['static']),
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new webpack.HotModuleReplacementPlugin(), // 热加载的插件，使用缓存时请注释

        new webpack.optimize.CommonsChunkPlugin({
            // names: ['jquery','vendor','runtime'],
            // names: ['jquery','echarts','highcharts','vendor'],//跟页面插入的顺序相反
            // names: ['echarts','highcharts','vendor'],
            // names: ['highcharts','vendor'],
            names: ['vendor'],
            minChunks: Infinity
        }),

        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),

        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        })


        /*
        new webpack.ProvidePlugin({ // 将 $ 变量挂载到 window 下面，可以在项目中直接使用 $ 不用再引用
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
        */

    ],
    // 通过 output.filename 和 output.path 属性，来告诉 webpack bundle（捆）的名称，以及我们想要生成（emit）到哪里

    resolve: {
        //设置可省略文件后缀名（注：如果有文件没有后缀设置‘’会在编译时会报错，必须改成' '中间加个空格);
        extensions: [' ','.css','.less','.js','.json'],
    },
    externals: {

    }
};
