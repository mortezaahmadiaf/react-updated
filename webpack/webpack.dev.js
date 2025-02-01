const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../src'),
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext][query]',
    publicPath: '/', // Ensure assets are served from the root
  },
  devServer: {
    static: path.resolve(__dirname, '../src'), // Serve files from the 'dist' directory
    port: 3000,
    open: true,
    historyApiFallback: true, // Handle SPA routing
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|mp3)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.jpg',
      '.png',
      '.css',
      '.scss',
      '.mp3',
    ],
    alias: {
      app: path.resolve(__dirname, '../src/'),
      assets: path.resolve(__dirname, '../src/assets/'),
    },
  },
  plugins: [
    new FaviconsWebpackPlugin(path.resolve(__dirname, '../public/favicon.ico')),
    new webpack.DefinePlugin({
      'process.env': {},
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'Mehrabicoin',
      inject: 'body',
      chunksSortMode: 'auto',
      base: '/',
    }),
    new ESLintPlugin({
      extensions: ['js', 'ts', 'tsx'],
    }),
  ],
}
