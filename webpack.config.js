var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'eval',
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    library: ['MyApp', 'something']
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  externals: {
      'react': 'React'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      // loaders: ['react-hot', 'babel'],
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
