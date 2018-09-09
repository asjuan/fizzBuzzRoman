module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
      filename: './app.js'
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        }
      ]
    }
  }