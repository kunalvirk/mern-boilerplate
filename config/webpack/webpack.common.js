const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCSSPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('../helpers');

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';

module.exports = {
    entry : {
        'app' : [
            helpers.root('client/app/index.js')
        ]
    },

    output : {
        path : helpers.root('dist'),
        publicPath : '/'
    },

    resolve : {
        extensions : ['.js', '.json', '.css', '.scss', '.html'],
        alias : {
            'app' : 'client/app'
        }
    },

    module : {
        rules : [
            {
                // JS, JSX files
                test : /\.js?$/,
                include : helpers.root('client'),
                loader : 'babel-loader'
            },

            {
                // CSS,SCSS files
                test : /\.scss$/,
                use : [
                    ExtractCSSPlugin.loader,
                    {
                        loader : 'css-loader',
                        options : {
                            sourceMap : true
                        }
                    },
                    {
                        loader : 'sass-loader',
                        options : {
                            sourceMap : true
                        }
                    },
                    {
                        loader : 'postcss-loader',
                        options: {
                            plugins : () => {
                                autoprefixer
                            }
                        }
                    }
                ]
            },
            // Images loader
            {   
                test : /\.(jpe?g|png|gif|svg)$/,
                use : ['file-loader']
            }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.EnvironmentPlugin({
            NODE_ENV : JSON.stringify('production')
        }),

        new HtmlWebpackPlugin({
            template : helpers.root('client/public/index.html'),
            inject : 'body'
        }),

        new ExtractCSSPlugin({
            filename : 'css/[name].[hash].css',
            disable : !isProd
        }),

        new CopyWebpackPlugin([{
            from : helpers.root('client/public')
        }])
    ]
};