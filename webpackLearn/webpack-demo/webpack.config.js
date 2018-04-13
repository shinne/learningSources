const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        //通过加载hash，避免缓存的问题
        filename: "bundle-[hash].js"
    },
    devtool:'source-map',
    devServer:{
        contentBase:'./build',//本地服务器所加载的页面所在的路径
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
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader","sass-loader"]
                })
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader?limit=1024&name=images/[name].[ext]'
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin("Edit by shinneyou"),
        new HtmlWebpackPlugin({
            template:__dirname + "/app/index.tmpl.html" // new一个插件的实例，并传入相关的参数
        }),
        new ExtractTextPlugin("[name].css"),
        new CleanWebpackPlugin("build/*.*",{
            root:__dirname,
            verbose:true,
            dry:false
        })
    ]
}