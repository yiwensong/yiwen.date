var webpack = require('webpack');  
module.exports = {  
    entry: [
        "./yiwen_dot_date/static/js/app.js"
    ],
    output: {
        path: __dirname + '/yiwen_dot_date/static',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
    ]
};
