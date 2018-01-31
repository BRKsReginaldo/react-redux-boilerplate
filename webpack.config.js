const MinifyPlugin = require("babel-minify-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'assets/js/app.js'
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
  plugins: [
    new MinifyPlugin(),
    new ExtractTextPlugin("assets/css/app.css")
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
}