// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const entry = ['./client/index.js'];

// const output = {
//   path: path.resolve(__dirname, 'dist'),
//   publicPath: '/dist/',
//   filename: 'bundle.js',
// };

// module.exports = {
//   mode: 'development',
//   entry,
//   output,
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './index.html',
//     }),
//   ],
//   // devtool: 'eval-source-map',
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//            loader: 'babel-loader',
//            options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//            }
//         },
//       },
//     ],
//   },
//   devServer: {
//     host: 'localhost',
//     port: 8080,
//     // contentBase: path.resolve(__dirname, 'dist'),
//     hot: true,
//     // publicPath: '/',
//     proxy: {
//       '/': {
//         target: 'http://localhost:3000/',
//         // secure: false,
//       }
//     }
//   }
// }

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: '/public/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(
    {
      template: './index.html'
    }),
  ],
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules)/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000'
    },
    compress: true,
    hot: true
  },
};