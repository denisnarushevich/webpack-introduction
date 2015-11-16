module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: "style!css!less"},
        ]
    }
}