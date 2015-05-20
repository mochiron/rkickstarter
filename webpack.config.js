var webpack = require('webpack');
var path = require("path");

module.exports = {
    cache: true,
    context: __dirname,
    //the entry section tells webpack where the entry file is,
    //and we have the development server for webpack and react-hot-loader
    entry: [
      'webpack/hot/only-dev-server',
      "./app/app.js"
    ],
    //The output section is where the bundled files should go when we build our app.
    //In this case, the files will be in /build/bundle.js
    output: {
        path: path.join(__dirname,'./build'),
        filename: "[name].js",
        publicPath: "/"
    },
    resolve: {
      extensions: ["", ".js", ".css", ".sass", ".jpg", ".png", ".svg", ".gif"],
      modulesDirectories: ["app", "node_modules"]
    },
    //This is where you add/remove loaders based on what you need webpack to bundle for you.
    //The two main ones we are using are react-hot and babel.
    module: {
        loaders: [
            {
              test: /\.js?$/,
              loaders: ['react-hot', 'babel'],
              exclude: /node_modules/
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
            {
              test: /\.sass$/,
              loaders: [
                'style-loader',
                'css-loader',
                'autoprefixer-loader?browsers=last 2 version',
                'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, "./app")
              ],
            },
            {
              test: /\.(jpg|png|svg|gif|eot|ttf|woff)$/,
              loader: "url-loader",
              query: {
                name: "[path][name].[ext]",
                context: "app",
                limit: "8192",
              }
            }
        ]
    },
    //The last section is plugins and include different type of webpack plugins.
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]

};
