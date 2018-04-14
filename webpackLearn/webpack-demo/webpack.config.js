/**
 webpack4 新增 --mode 模式，开发者模式打包的资源例如js不压缩，
 */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const publicPath = "/static/360buyimg"

module.exports = {
    entry: {
        index:__dirname + "/src/page/index/index.js",
        home:__dirname + "/src/page/home/home.js"
    },
    output: {
        path: __dirname + "/dist",
        //通过加载hash，避免缓存的问题
        filename: "[name].js"/*,
        //cdn
        publicPath:'/static/360buyimg/'*/
    },
    devtool:'source-map',
    devServer:{
        contentBase:'./dist',//本地服务器所加载的页面所在的路径
        historyApiFallback:true, //不跳转
        inline:true  //当原文件改变时会自动刷新页面
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader"
                    //这里将options整合到.babelrc中
                    /*,
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }*/
                },
                exclude:/node_modules/
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader?limit=1024&name=images/[name].[ext]'
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","sass-loader"]
                })
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin("dist/*.*",{
            root:__dirname,
            verbose:true,
            dry:false
        }),
        new webpack.BannerPlugin("Edit by shinneyou"),
        new HtmlWebpackPlugin({
            template:__dirname + "/src/page/home/home.html", // new一个插件的实例，并传入相关的参数
            filename:"home.html",
            chunks:['home']
        }),
        new HtmlWebpackPlugin({
            template:__dirname + "/src/page/index/index.html", // new一个插件的实例，并传入相关的参数
            filename:"index.html",
            chunks:['index']
        }),
        new ExtractTextPlugin("[name].css"),
    ]
}