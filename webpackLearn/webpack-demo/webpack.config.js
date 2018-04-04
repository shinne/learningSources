const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devtool:'none',
    devServer:{
        contentBase:'./build',//本地服务器所加载的页面所在的路径
        historyApiFallback:true, //不跳转
        inline:true
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader"
                },
                exclude:/node_modules/
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