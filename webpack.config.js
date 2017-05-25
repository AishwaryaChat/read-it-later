const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['app/app.js'],
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      './app/components'
    ],
    alias: {
      Main: path.resolve('app/components/Main.js'),
      Navbar: path.resolve('app/components/Navbar.js'),
      Sources: path.resolve('app/components/Sources.js'),
      App: path.resolve('app/components/App.js'),
      LandingPage: path.resolve('app/components/LandingPage.js'),
      LandingNavbar: path.resolve('app/components/LandingNavbar.js'),
      Signup: path.resolve('app/components/Signup.js')
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
        ]
      }
    ]
  }
}
