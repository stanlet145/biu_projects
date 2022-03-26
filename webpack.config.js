var path = require("path");
module.exports = {
    entry: "./lab2/src/index.js",
    output: {path: path.join(__dirname, "dist", "assets"), filename: "bundle.js"},
    module: {rules: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]}
};