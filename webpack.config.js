const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

config = {
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
        test: /\.html$/,
        exclude: /node_modules|svelte/,
        loader: "html-loader"
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
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.jade/,
        use: ["raw-loader", "pug-html-loader"]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "stylus-loader", // compiles Stylus to CSS
            options: {
              use: [require('nib')()],
              import: ['~nib/lib/nib/index.styl']
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader", // compiles Stylus to CSS
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          }
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
          }
        }
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
  externals: []
};

module.exports = config;
