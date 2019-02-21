const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')  //html打包
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')  //压缩js
const CleanWebpackPlugin = require("clean-webpack-plugin");  //清除文件夹
const extractTextPlugin = require("extract-text-webpack-plugin"); //css分离

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: './dist', //本地服务器所加载的页面所在的目录
        host:/*'www.ll.com'*/'localhost',
        port:12345,
        historyApiFallback: true,
        inline: true //实时刷新
    },
    devtool: 'eval-srouce-map',
    module: {
        rules: [
            {
                test: /(\.jsx | \.js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test:/\.scss$/,
                use: [
                    {
                        loader:'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test:/\.(png|jpg|gif|jpeg)/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:500
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('shinne_you'),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/pages//index.tmpl.html'
        }),
        new UglifyWebpackPlugin()
    ]
}