module.exports = {
	entry: "./entry.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/},
			{
				test:/\.(js|jsx)$/, loader: "babel-loader",
				query:{
					presets: ["es2015", "stage-0", "react"],
					plugins: ['transform-runtime']
				},
				exclude: /node_modules/
			}
		]
	}
}