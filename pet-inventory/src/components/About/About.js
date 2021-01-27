import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';

export default class About extends React.Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 componentDidMount() {

 }

 render() {
   return (
      <div className="About">
      <h1>Pet Inventory</h1>
        <p>This application is a pet iventory that can be used to store data about pets from a pre-defined backend database. The database consists of one table that stores entries representing pets by animal, description, age, and price.</p>
        <img src="./images/pets.jpg" width="40%" />
        <p>Use the <Link to="/Search">Search</Link> page to query all pets.</p>
        <p>Use the <Link to="/Edit">Edit</Link> page to add new pets, edit existing pet attributes, or remove pets that have found a home.</p>
      </div>
    );
 }
}