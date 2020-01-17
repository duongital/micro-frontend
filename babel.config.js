// const presets = ['@babel/preset-env']
const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        browsers: ["last 2 versions"]
      }
    }
  ],
  "@babel/preset-react"
];

const plugins = [
  ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: false }],
  ["@babel/plugin-proposal-class-properties"],
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-proposal-object-rest-spread"
];

module.exports = {
  presets,
  plugins
};
