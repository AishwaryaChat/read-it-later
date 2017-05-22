const path = require('path')

module.exports = {
  entry: ['./app/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public')
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules'
    ],
    alias: {},
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
