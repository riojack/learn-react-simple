module.exports = {
  entry: {
    'music-library': './example/index.js'
  },
  output: {
    filename: '[name].js',
    pathinfo: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};
