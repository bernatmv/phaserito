var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var isDirectory = function (file) {
	return fs.statSync(path.join('./src/games/', file)).isDirectory();
};

var entries = {
	'vendor': [
		'consolePolyfill',
		'bluebird',
		'httpplease',
		'phaser'
	],
	'src/js': './js/main.js'
};

module.exports = {
	cache: false,
	context: path.join(__dirname, 'src'),
	entry: entries,
	output: {
		path: path.join(__dirname, './build'),
		publicPath: '/',
		filename: 'js/app.min.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/i, exclude: /node_modules/i, loader: 'traceur?experimental&arrayComprehension&runtime' },
			{ test: /(phaser-arcade-physics|phaser-debug)\.js$/i, loader: 'script' },
			{ test: /\.json$/i, exclude: /\.audiosprite\.json$/i, loader: 'json' },
			{ test: /\.css$/i, loader: 'style!css' },
			{ test: /\.less$/i, loader: 'style!css!less' },
			{ test: /\.(jpe?g|png|gif)$/i, loader: 'image?bypassOnDebug&name=[path][name].[ext]?[hash]' },
			{ test: /\.(mp3|ac3|ogg|m4a)$/i, loader: 'file?name=[path][name].[ext]?[hash]' },
			{ test: /\.(ttf|woff|eot)$/i, loader: 'file?name=[path][name].[ext]?[hash]' },
			{ test: /\.audiosprite\.json$/i, loader: 'file?name=[path][name].[ext]?[hash]' }
		]
	},
	resolve: {
		alias: {
			// Console polyfill for IE9
			'consolePolyfill': path.join(__dirname, 'vendor/consolePolyfill.js'),
			'phaserito': path.join(__dirname, 'src/lib/main.js'),
			'phaser': path.join(__dirname, 'node_modules/phaser/dist/phaser-arcade-physics.js'),
			'phaser-debug': path.join(__dirname, 'node_modules/phaser-debug/dist/phaser-debug.js')
		},
		extensions: ['', '.js', '.mustache']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'libs/phaserito.vendor.js'),
		new webpack.ProvidePlugin({
			Promise: 'bluebird',
			phaserito: 'phaserito',
			Phaserito: 'phaserito'
		}),
		new HtmlWebpackPlugin({
			config: {
				googleAnalytics: "UA-58578359-1"
			},
			template: 'src/index.html',
      		filename: 'index.html'
		}),
		function() {
			this.plugin('done', function(stats) {
				var dir = './.work';
				if (!fs.existsSync(dir)){
				    fs.mkdirSync(dir);
				}
				require('fs').writeFileSync(
					path.join(__dirname, '.work/stats.json'),
					JSON.stringify(stats.toJson()));
				});
		}
	]
};
