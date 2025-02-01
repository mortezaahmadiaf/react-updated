const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

const buildName = process.env.BUILD_NAME || 'dist' // Default to 'dist' if BUILD_NAME is not set

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, `../${buildName}`), // Change output directory to `build`
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
    // publicPath: '/',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|json|mp3)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[contenthash][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      app: path.resolve(__dirname, '../src/'),
      assets: path.resolve(__dirname, '../src/assets/'),
    },
  },
  plugins: [
    // Define environment variables
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(
          process.env.API_URL || 'https://api.example.com'
        ), // Example environment variable
        NODE_ENV: JSON.stringify('production'), // Ensure NODE_ENV is set to production
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../src/assets'), to: 'assets' },
        {
          from: path.resolve(__dirname, '../public/favicon.ico'),
          to: 'favicon.ico',
        },
        {
          from: path.resolve(__dirname, '../public/robots.txt'),
          to: 'robots.txt',
        },
        {
          from: path.resolve(__dirname, '../public/manifest.json'),
          to: 'manifest.json',
        },
        {
          from: path.resolve(__dirname, '../public/apple-touch-icon.png'),
          to: 'apple-touch-icon.png',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      title: 'Mehrabicoin',
      base: `/`,
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      swDest: 'service-worker.js', // Ensure the file is created in the output folder
      maximumFileSizeToCacheInBytes: 50 * 1024 * 1024, // 50MB limit (default is 2MB)
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.destination === 'document',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'html-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24, // 1 day
            },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === 'image',
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            },
          },
        },
        {
          urlPattern: ({ request }) =>
            request.destination === 'script' || request.destination === 'style',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources',
          },
        },
      ],
    }),
    // Enable bundle analysis
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static', // Generates a static HTML report
    //   openAnalyzer: false, // Set to true to automatically open the report in your browser
    //   generateStatsFile: true, // Generates a stats.json file for advanced analysis
    // }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console logs
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single',
  },
  // Enable source maps for debugging in production
  devtool: 'source-map',
}
