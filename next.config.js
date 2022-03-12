const webpack = require('webpack');
const path = require('path');

module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    images: {
        domains: ['images.unsplash.com'],
    },
}