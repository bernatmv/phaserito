var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

var isDirectory = function (file) {
	return fs.statSync(path.join('./src/games/', file)).isDirectory();
};

module.exports = {
	cache: false,
	context: path.join(__dirname, 'src'),
	entry: {
		'vendor': [
		'phaser'
		],
		'src/js': './js/main.js'
	},
	output: {
		path: path.join(__dirname, './build'),
		publicPath: '/',
		filename: 'js/app.min.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/i, exclude: /node_modules/i, loader: 'traceur?experimental&arrayComprehension&runtime' },
			{ test: /(phaser-arcade-physics|phaser-debug)(\.min)?\.js$/i, loader: 'script' },
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
			'phaserito': path.join(__dirname, 'src/lib/main.js'),
			'phaser': path.join(__dirname, 'node_modules/phaser/dist/phaser-arcade-physics.js'),
			'phaser-debug': path.join(__dirname, 'node_modules/phaser-debug/dist/phaser-debug.js')
		},
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.ProvidePlugin({
			console: 'imports?this=>window!exports?window.console!console-polyfill',
			Promise: 'bluebird',
			Phaserito: 'phaserito'
		}),
		new StatsPlugin(path.join(__dirname, 'stats.json')),
		new HtmlWebpackPlugin({
			config: {
				googleAnalytics: "UA-58578359-1"
			},
			template: 'src/index.html',
      filename: 'index.html'
		})
	]
};
