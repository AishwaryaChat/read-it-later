const path = require('path')

module.exports = {
  entry: ['app/app.js'],
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules'
    ],
    alias: {
      Main: path.resolve('app/views/components/Main.js')
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
