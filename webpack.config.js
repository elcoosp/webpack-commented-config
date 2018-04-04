const HtmlWebpackPlugin = require('html-webpack-plugin') // Npm installed
const webpack = require('webpack') //For built-in plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  // Main js file, shortand for entry: { main: ... }, we can pass an arry instead of main
  // We could also specify vendors to split the libraries apart and cache them on the client
  entry: './src/index.js',
  target: 'web', // Specify the environnment in which the programm is running (node, web by default)
  output: {
    filename: 'bundle.js', // Referenced in the public/index.html file, use [name] if multiple entry points
    path: path.resolve(__dirname, 'dist') // Where to write the bundle
  },
  mode: 'development', // Or development, set process.env.NODE_ENV
  module: {
    rules: [
      // Set rules of loaders to use for the tested type of files, loaders are "piped"
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({ template: './src/public/index.html' })
  ]
}
