const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //Sets the starting file for app as 'react-boiler-plate/src/index.js'.
  //But you can customize this to any path you want, e.g. wherever you put the starting index.js file.
  entry: path.join(__dirname, 'src', 'index.js'),   

  //Sets the path and filename to the directory containing the outputted (Babel/Webpack-built) app.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },

  //Rule that tells webpack to use babel-loader on all .js files in project (excluding node_modules).
  //Similarly, a rule is applied for using the style-loader and css-loader packages (installed with 
  //babel) on all .css files (also excluding node_modules).
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
          }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  //The default port is 8080, which may be blocked by other processes when running the app and this
  //will change the default port.
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    port: 3000
  },

  //The 'react' package has production and development modes - see note in 'node_modules/react'
  mode:'development',

  //Point to HTML template where the application will be initially injected using document.renderDOM()
  //Again, this can be customized to another location where this file exists, like 'entry' above. 
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html'
      })
  ]
};