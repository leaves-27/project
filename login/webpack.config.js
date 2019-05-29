// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	//页面入口文件配置
	entry: {	
		index : './src/main.js'
	},
	//入口文件输出配置
	output: {	
		path: __dirname + '/build/login/',
    filename:'bundle.js'
	},
	module: {	
		//加载器配置	
		loaders: [{ 
				test: /\.styl$/,
				loader:"style-loader!css-loader!stylus-loader",
				// loader:ExtractTextPlugin.extract('style-loader','css-loader!stylus-loader')
			},{ 
				test: /\.(png|jpg|ico)$/, 
				loader:'url-loader'
			},{
				test: require.resolve('jquery'), 
				loader: 'expose-loader?jQuery'
			}
		]
	}
};
