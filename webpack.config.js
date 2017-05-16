module.exports = {
    entry: "./styles/sass/stylesheet.scss",
    output: {
        path: "/Users/Isaac/desktop/image_grid/styles/compiled",
        filename: "stylesheet.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};