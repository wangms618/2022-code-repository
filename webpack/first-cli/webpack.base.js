// webpack相关的配置文件是通过NodeJS环境启动并运行的
// 所以他默认使用CommonJS模块语法，不可以使用import 和 export 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
            chunks: ['index']
        })
    ]
}