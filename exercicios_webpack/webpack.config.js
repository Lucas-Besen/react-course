const { transform } = require('babel-core');
const webpack = require('webpack');
const ExtracttextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry:'./ex/index.js',
    output: {
        path: __dirname + '/public',
         filename: './bunble.js'
    },
    devServer:{
        port:8080,
        contentBase: './public'
    },
    plugins: [
        new ExtracttextPlugin('app.css')
    ],
    module:{
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']

            }

        },{
           test: /\.css$/,
           loader: ExtracttextPlugin.extract('style-loader','css-loader') 
        }]
    }
}