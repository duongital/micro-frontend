const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    "single-spa.config": "./single-spa.config.js"
  },
  output: {
    publicPath: "/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          }
        ]
      }
    ]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    },
    modules: [path.resolve(__dirname, "node_modules")]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Demo",
      template: "index.html"
    })
  ],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true,
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
    contentBase: "./dist"
  }
};
