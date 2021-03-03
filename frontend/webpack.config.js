const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("babel-polyfill");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/index"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    inline: true,
    hot: true,
    port: 3030,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
