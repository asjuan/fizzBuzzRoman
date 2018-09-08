module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: "´./app.js"
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2016']
                    }
                }
            }
        ]
    }
}