const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['css-loader'],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
    devServer: {
        historyApiFallback: true,
    },
};
