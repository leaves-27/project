var HtmlwebpackPlugin = require('html-webpack-plugin');//用来生成一个html
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index:"./src/js/index.js"
  },
  output:{
    path: "./build",
    filename:'bundle.js'
  },
  module: {
    loaders: [{
      test:/\.css$/,
      loader: ExtractTextPlugin.extract("style-loader","css-loader")
    }]
    // loaders: [{
    //   test: /\.css$/,
    //   loaders: ['style','css']
    // }]
  },
  plugins:[
    new HtmlwebpackPlugin({
      filename: 'home.html',
      template: 'src/html/test.html'
    }),
    new ExtractTextPlugin("./src/css/main.css"),
  ]
};