const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const PUBLIC_DIR = 'public'

module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, PUBLIC_DIR),
        hot: true,
        port: 3333,
        open: true
    },
    entry: path.resolve(__dirname, 'src', 'index.js'),
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-env'
                    ]
                },
                test: /\.js$/
            },
            {
                exclude: /node_modules/,
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ]
    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    target: 'web'
}