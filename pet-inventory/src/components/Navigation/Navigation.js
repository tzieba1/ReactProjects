import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends React.Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 render() {
   return (
      <nav className="Navigation">
        <ul>
          <li>
            <img src={'/images/logo.png'} alt="pawsLogo" width="50px"/>
          </li>
          <li>
            <NavLink 
              className="navLink" 
              activeClassName="navLinkActive" 
              id="search" 
              exact 
              to="/Search"
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink 
              className="navLink"  
              activeClassName="navLinkActive" 
              id="edit" 
              exact 
              to="/Edit"
            >
              Edit
            </NavLink>
          </li>
          <li>
            <NavLink 
              className="navLink" 
              activeClassName="navLinkActive" 
              id="about" 
              exact 
              to="/About"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    );
 }
}