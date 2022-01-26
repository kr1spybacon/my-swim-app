const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = ['./client/index.js'];

const output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  filename: 'bundle.js',
};

module.exports = {
  mode: 'development',
  entry,
  output,
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  // devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
           loader: 'babel-loader',
           options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
           }
        },
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    publicPath: '/',
    proxy: {
      '/secret/**': {
        target: 'http://localhost:3000/',
        secure: false,
      }
    }
  }
}