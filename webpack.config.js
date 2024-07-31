const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve (__dirname, 'dist'),
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'Lord of the Plates',
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'img/',
                            limit: 8192,
                        },
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader',]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
};