var path = require('path');
//var webpack = require('webpack');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		publicPath: '/',
		filename: 'main.bundle.js'
	},
	module: {
		loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist/js'),
		compress: true,
		stats: 'errors-only',
		open: true
		//historyApiFallback: {
      	//	index: 'dist/index.html'
    	//}
	}
}