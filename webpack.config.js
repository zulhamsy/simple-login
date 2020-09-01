const path = require('path');

module.exports = {
    entry: {
        home: ['babel-polyfill', './src/js/home.js'],
        login: ['babel-polyfill', './src/js/login.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}