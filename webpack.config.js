const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    performance: {
        maxAssetSize: 10000000,
        maxEntrypointSize: 10000000,
        hints: "warning"
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(scss|css)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'sass-loader'
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: function () {
                        return [
                            require('autoprefixer')
                        ];
                    }
                }
            }
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf)$/i,
            use: 'url-loader?limit=1024&name=src/font/[name].[ext]'
        },
        {
            test: /\.(jpe?g|png|gif)$/i,
            use: [
                'file-loader?limit=1024&name=src/img/[name].[ext]'
            ]
        },
        {
            test: /\.(svg)$/i,
            use: [
                'file-loader?limit=1024&name=src/img/icons/[name].[ext]'
            ]
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ]
};