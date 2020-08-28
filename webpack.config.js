const path = require('path');

module.exports = {
    entry: {
        vendor: ['babel-polyfill', './src/js/vendor/easyHttp.js', './src/js/app.js'],
        home: './src/js/home.js'
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