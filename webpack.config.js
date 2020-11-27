const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'customize': './src/js/customize.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'js'),
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};