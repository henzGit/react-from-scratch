const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    }, {
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader"
      ]
    }, {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'public/img'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: "index.html",  //target html
      template: "./src/public/index.html" //source html
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 200000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}