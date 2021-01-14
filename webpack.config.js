const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      short_name: 'Petgram',
      description:
        'Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/assets/img/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          destination: path.join('Icons'),
          ios: true,
        },
        {
          src: path.resolve('src/assets/img/icon.png'),
          size: '1024x1024', // you can also use the specifications pattern
        },
        {
          src: path.resolve('src/assets/img/icon.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp(
            'https://petgram-server.antoniojh10.vercel.app/'
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: false,
    port: 3000,
  },
};
