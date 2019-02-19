const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/dist",//打包后的文件存放的地方
        filename: "bundle-[hash].js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: './public', //本地服务器所加载的页面所在的目录
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
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('shinne_you'),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/pages//index.tmpl.html'
        }),
        new UglifyWebpackPlugin(),
        new CleanWebpackPlugin('dist/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
}