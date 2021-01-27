import './App.css';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Search from './components/Search/Search';
import About from './components/About/About';
import Edit from './components/Edit/Edit';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render(){
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render={() => (<Redirect to="/About" />)} />
        <Route path="/Search/:term?" component={Search} />
        <Route exact path="/Edit" component={Edit} />
        <Route exact path="/About" component={About} />
        <br/>
        <footer>&copy;&nbsp;2020&nbsp;|&nbsp;Tommy Zieba</footer>
      </div>
    );
  }
}