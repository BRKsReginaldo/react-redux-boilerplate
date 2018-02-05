const webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins = [
  new ExtractTextPlugin("assets/css/app.css?v=[chunkhash:6]"),
  new HtmlWebpackPlugin({
    template: './template/template.html'
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(new MinifyPlugin())
}

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'assets/js/app.js?v=[chunkhash:6]'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.styl$/, 
        use: ExtractTextPlugin.extract('css-loader!stylus-loader')
      }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
}