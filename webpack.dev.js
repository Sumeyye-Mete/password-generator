const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const dev = {
	mode: "development",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "./js/[name].js",
		clean: false,
	},
	devServer: {
		watchFiles: ["src/**/*.html", "src/**/*.scss"],
		open: {
			app: {
				name: "Google Chrome",
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.s[ac]ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
};
module.exports = merge(common, dev);
