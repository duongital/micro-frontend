// LOAD LOCAL ENVIRONMENT VARIABLES
const dotenv = require("dotenv").config({
  path: ".env.production"
});

const config = require("./webpack.config.js");

config.mode = "production";

module.exports = config;
