// LOAD LOCAL ENVIRONMENT VARIABLES
const dotenv = require("dotenv").config({
  path: ".env.development"
});

const config = require("./webpack.config.js");

config.mode = "development";

config.devServer = {
  historyApiFallback: true,
  // contentBase: path.join(__dirname, 'dist'),
  // compress: true,
  port: 9000,
  contentBase: "./dist"
};

config.devtool = "source-map";

module.exports = config;
