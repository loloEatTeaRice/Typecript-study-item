const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // optimization: {
    //     minimize: false // 关闭代码压缩，可选
    // },

    entry: "./src/index.ts",

    // devtool: "inline-source-map",

    // devServer: {
    //     contentBase: './dist'
    // },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // environment: {
        //     arrowFunction: false // 关闭webpack的箭头函数，可选
        // }
    },

    // resolve: {
    //     extensions: [".ts", ".js"]
    // },

    // webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [{
            // test 指定规则生效的文件
            test: /\.ts$/,
            use: {
                loader: "ts-loader"
            },
            exclude: /node_modules/
        }]
    },

    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new HtmlWebpackPlugin({
    //         title: 'TS测试'
    //     }),
    // ]
}