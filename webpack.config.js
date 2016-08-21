var autoprefixer = require('autoprefixer');
var path = require('path');
var s = path.sep;

module.exports = {
	entry: __dirname + s + 'js' + s + 'main.js',
	output: {
		path: __dirname + s + 'js' + s,
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, 'js' + s + 'components'),
				],
				query: {
					presets: ['react', 'es2015'],
				},
			},
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, 'css'),
				],
				loader: 'style-loader!css-loader!postcss-loader',
			},
		],
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}
