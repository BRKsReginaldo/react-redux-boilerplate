const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

module.exports = (a, env) => {
  let devtool = 'inline-source-map'
  let plugins = [
    new MiniCssExtractPlugin({
      filename: 'assets/css/app.css?v=[hash:6]',
      chunkFilename: 'assets/css/app.css?v=[hash:6]',
    }),
    new HtmlWebpackPlugin({
      template: './template/template.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.mode || 'development')
    }),
    new webpack.NamedModulesPlugin()
  ]

  if (env.mode === 'production') {
    plugins.push(new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css.*$/,
      cssProcessorOptions: {discardComments: {removeAll: true}}
    }))
    devtool = 'source-map'
  }

  return {
    entry: [
      'babel-polyfill',
      './src/index.js'
    ],
    devtool: devtool,
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'assets/js/app.js?v=[hash:6]',
      chunkFilename: 'assets/js/[name].chunk.js?v=[hash:6]',
      publicPath: "/"
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.css',
        '.sass',
        '.styl'
      ]
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.scss/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.styl$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            },
            {
              loader: 'stylus-loader'
            }
          ]
        }
      ]
    },
    plugins: plugins,
    devServer: {
      contentBase: './public',
      historyApiFallback: true
    },
  }
}