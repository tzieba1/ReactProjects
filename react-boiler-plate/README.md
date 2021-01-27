***NPM TERMINAL COMMANDS, FILES, AND DIRECTORIES: PRODUCING BOILERPLATE REACT APP***
*Author:* Tommy Zieba
## This guide was created on November 13, 2020. 
## This guide may not be identically applicable in the future since packages are constantly updated and possible changes to this procedure may emerge. 
## Note that Node.js must be installed on your computer.

## [SHORTCUT] ##
A zipped version of the final sample application does not include the required `node_modules` folder since it is large and has permissions for certain files - preventing compression into a zipped file. For the application to run succesfully, you must install all the required npm packages - which automatically creates the `node_modules` folder with required files. 

A shortcut to run the resulting boilerplate app would be to drop the zipped files into a root project directory, open the terminal, change to that directory, then do the following:

*Run 2 commands:*   1. `npm install react react-dom`
                    2. `npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin`

*Command to start app:* `npm start`

*Navigate to this URL in browser:* http://localhost:3000/
                                
## [STEP 1] ##
**Create app directories (anywhere) to hold all source files and package-related files and go to the root app directory (called `react-boiler-plate` here)**

*Terminal commands:*  `mkdir react-boiler-plate`
                      `cd react-boiler-plate`
                      `mkdir src`
                      `mkdir public`
                      `cd public`
                      `vim index.html`
                      `cd ../src`
                      `vim index.js index.css App.js`
                      `cd ..`

## [STEP 2] ##
**Add some boilerplate code for the files added to represent a react app**

**CODE INSERTED INTO `react-boiler-plate/public/index.html`**
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <!-- Injection point for react app being created. --> 
    <div id="root"></div>
  </body>
</html>

**CODE INSERTED INTO `react-boiler-plate/src/index.js`**
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

**CODE INSERTED INTO `react-boiler-plate/src/App.js`**
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor() {
    super();
    this.state = {
      stateProp1: "stateProp1",
      stateProp2: "stateProp2",
      stateProp3: "stateProp3"
    };
  }

  render() {
    return (
      <div className="App">Insert Componenets Here Using JSX</div>
    );
  }
}
export default App;

## [STEP 3] ##
**Initialize package.json file using 'npm init' command with the -y flag for default config option**

*Terminal command:*   `npm init -y`

## [STEP 4] ##
**Add dependencies for 'react' and 'react-dom' in package.json**
**Create node_modules directory with all modules required for dependent packages (e.g. the 'react' package is composed of several modules)**
**Note:** The following command will produce another file called `package-lock.json` which lists the module dependency details for the app's package dependencies in `package.json`. The package lock is used for version control - rollback app to previous versions with different package dependencies.

*Terminal Command:*   `npm install react react-dom`

*Directories added to node_modules for 'react':* You can check the package.json file in `node_modules/react/package.json` (not the same as above) and see that there are dependencies listed for `loose-envift` and `object-assign` modules. Hence, you will see those directories added to `node_modules` directory automatically. The `loose-envify` depends on `js-tokens`, so a directory appears for it in `node_modules` as well. Part of `loose-envify` requires execution in the system environment, so it appears in the `node_modules/.bin` folder (for executable command line scripts) because `loose-envify` deals with environment variables on your system. Consequently, file-paths need not be used during imports of package contents for JS files in the app being made.

*Directories added to node_modules for 'react-dom':* Similarly as for `react`, a  `react-dom` directory is added to `node_modules` and has dependencies listed for the `scheduler` module. Morever, the `node_mudules/scheduler` directory has also been added.

## [STEP 5] (optional - Git vs. Local project)##
**Add '.gitignore' file specifically for listing directories and/or files NOT to push to GitHub**

*Terminal Commands:*  `vim .gitignore`
                      `i`
                      `node_modules`
                      `ESC`
                      `:wq`

## [STEP 6] ##
**Add build dependencies in package.json file for several 'babel' and 'wepack' packages required for interpretting JSX across a variety of browsers**
**Add additional modules required for 'babel' and 'webpack' packages**
**Note:** Use this schema for interpretting some packages below: `npm install @myorg/privatepackage`

*Terminal command:*   `npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin`

*Note:* Now, expand `node_modules` and notice all the modules - all depending on each other in some way. These are not explained here, but to interpret the dependencies, you can perform the same kind of checks as explained above after installing `react` and `react-dom`. Also, can install these packages one at a time and check what has been added to `node_modules` to interpret the dependencies.

*Note:* The babel and webpack dependencies are listed in `react-boilerplate/package.json` as 'devDependencies' since these are only used for building the app, i.e. preparing it to be used universally on the internet across all old/new browsers. The flag `--save-dev` accomplishes this in the terminal command above. It (somehow) translates and transcribes the code you have written along with dependent code not written by you.

*Note:* This procedure has installed Babel preset for both react and the environment (browser), style loaders to handle the importation of our assets and Babel loader for our .js files.


## [STEP 7] ##
**Add 2 required babel and webpack files in the project's root directory**

*Terminal commands:*  `touch webpack.config.js .babelrc`

**Insert the following code into the newly created `webpack.config.js` file**
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
  //babel) on all .css files (also excluding node_modules). Allows for imports to resolve filepaths.
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

**The following is noted in the 'react' README**
**Note:** by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages. Don't forget to use the [production build](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build) when deploying your application.

**Insert the following code into the newly created `.babelrc` file (formatted as a JSON file)**
{
  "presets": ["@babel/preset-env","@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties","@babel/plugin-syntax-class-properties"]
} 

*After some troubleshooting/debugging while working with theis project, foudn that it is also required to include the "plugins" for the .babelrc JSON object so that eventHandlers can be added to classes with state. This was tested with the arrow-function version (not requiring the bind() method) of a handler for an add button.*

**The following is noted in the BABEL docs because this required babel file has 2 flavours**
**What's your use case?**
  *1. You are using a monorepo?*
  *2. You want to compile node_modules?*
    babel.config.json is for you!

  *3. You have a configuration that only applies to a single part of your project?*
    .babelrc.json is for you!

## [STEP 8] ##
**Set up 'start' (starts the dev server for running app locally in browser during development) and 'build' (for compiling the app) npm scripts in `package.json`. Since we won’t be doing any testing and ejecting, we only need two scripts for this projects.**

**Insert the following code into the `package.json` file's object - note that the "scripts" key may already exist and in that case add the 2 objects to it along with the "test" key that should exist**
"scripts": {
  "start": "webpack serve",
  "build": "webpack"
}