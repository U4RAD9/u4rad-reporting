const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "@cornerstonejs/tools": "@cornerstonejs/tools/dist/umd/index.js",
      "@cornerstonejs/core": "@cornerstonejs/core/dist/umd/index.js",
    },
    fallback: {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
    },
    extensions: ['.js', '.jsx', '.ts', '.wasm']
  },
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.wasm$/,
        type: 'webassembly/async'
      },
    ],
  },
  experiments: {
    asyncWebAssembly: true,
    topLevelAwait: true,
  },
  optimization: {
    minimize: true,
  },
  plugins:[
    new webpack.DefinePlugin({
        process: {env: {}}
    }),
  ],
};
