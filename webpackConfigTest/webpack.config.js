var webpack = require("webpack");
var HtmlwebpackPlugin = require('html-webpack-plugin');//用来生成一个html
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index:"./src/js/index.js",
    lib: ['jquery']
  },
  output:{
    path: "./build",
    filename:'[name].[hash].js'
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
      filename: 'test.html',
      template: 'src/html/test.html'
    }),
    new ExtractTextPlugin("./css/main.css"),
    new webpack.optimize.CommonsChunkPlugin('lib', '[name].[hash].js')
  ],
  devServer:{
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  }
};