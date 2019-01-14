const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getEntry = require('./getEntry');
const config = {
    entry: getEntry.entry,
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: "[name].js"
    },
    plugins: [],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};
getEntry.htmlWebpack.forEach(conf => {
    config.plugins.push(new HtmlWebpackPlugin(conf))
});
module.exports = config;