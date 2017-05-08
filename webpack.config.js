const path = require('path');
      webpack = require('webpack'),

module.exports = {
	context: path.resolve(__dirname, './src/js'),
	entry: {
		app: './app.js',
	},
	output: {
		path: path.resolve(__dirname, './dist/js'),
		//publicPath: '/dist/',
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                	loader: 'babel-loader',
                	options: { presets: ['es2015'] }
                }]
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
};