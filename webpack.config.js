const path = require("path");

module.exports = {
  entry: "./scripts/index.js",
  mode: "development",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
