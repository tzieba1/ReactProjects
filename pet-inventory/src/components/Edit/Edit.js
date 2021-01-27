import React, {Suspense, Fragment} from 'react';
import { Form } from '../Form/Form';
import {PetsTable} from '../PetsTable/PetsTable';

export default class Edit extends React.Component {
 constructor(props) {
   super(props);
  this.state = { 
    pets: [], 
    editIndex: 0, 
    editing: false
  };
 }

 componentDidMount() {
   this.getPets();
 }


 addPet = (event) => {
   event.preventDefault();
   fetch("http://localhost:3001/api?act=add" 
    + "&animal=" + event.target.form[1].value 
    + "&description=" + event.target.form[3].value 
    + "&age=" + event.target.form[5].value 
    + "&price=" + event.target.form[7].value)
   .then(response => response.json())
   .then(
     (result) => {
       this.setState({addResult: result});
       this.getPets();
     },
     (error) => {this.setState({addResult: "Error adding new pet"});}
   );
 }

  getPets = () => {
    fetch("http://localhost:3001/api?act=getall")
    .then(res => res.json())
    .then(
      (result) => {this.setState({pets: result});},
      (error) => {this.setState({pets: "error making AJAX request"});}
    );
  }

  editPet = (event) => {    
    //Check if a pet data entry is being edited using the state.
    if (this.state.editing) {
      //Compare the current edit id before user clicked the target button for this event (end/switch editing)
      if (Number(this.state.editPet.id) === Number(event.target.attributes.buttonid.value)) {
        fetch("http://localhost:3001/api?act=update" 
        + "&animal=" + this.state.editPet.animal
        + "&description=" + this.state.editPet.description 
        + "&age=" + this.state.editPet.age
        + "&price=" + this.state.editPet.price
        + "&id=" + this.state.editPet.id)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({editResult: result});
            this.getPets();
          },
          (error) => {
            console.log("Error with AJAX request for updating pet");
          }
        );
        this.setState({editing: false});
        console.log("End editing!")
      } else{
        for (var i = 0; i < this.state.pets.length; i++) {
          if(Number(this.state.pets[i].id) === Number(event.target.attributes.buttonid.value)) {
            //If found, set the editPet to that pet
            this.setState({editPet: this.state.pets[i]});
            this.setState({editIndex: i});
            console.log("Switch editing!")
            this.getPets();
          } 
        }
      }
    } 
    //Otherwise, change state representing the pet being edited (now editing)
    else {
      for (i = 0; i < this.state.pets.length; i++) {
        if(Number(this.state.pets[i].id) === Number(event.target.attributes.buttonid.value)) {
          //If found, set the editPet to that pet
          this.setState({editPet: this.state.pets[i]});
          this.setState({editIndex: i});
          this.setState({editing: true});
          console.log("Now editing!")
        } 
      }
    }
  }

  deletePet = (event) => {
    fetch("http://localhost:3001/api?act=delete&id=" + event.target.attributes.buttonid.value)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          deleteResult: result
        });
        this.getPets();
      },
      (error) => {
        this.setState({
          deleteResult: "error making AJAX request"
        });
      }
    );
  }

  handleChange_EditAnimalTextInput = (event) => {
    var temp = this.state.editPet;
    temp.animal = event.target.value;
    this.setState({editAnimal: temp});
  }

  handleChange_EditDescriptionTextInput = (event) => {
    var temp = this.state.editPet;
    temp.description = event.target.value;
    this.setState({editDescription: temp});
  }
  
  handleChange_EditAgeTextInput = (event) => {
    var temp = this.state.editPet;
    temp.age = event.target.value;
    this.setState({editAge: temp});
  }

  handleChange_EditPriceTextInput = (event) => {
    var temp = this.state.editPet;
    temp.price = event.target.value;
    this.setState({editPrice: temp});
  }
  render() {
   return(
      <div className="Edit">
        <h1>New Pets</h1>
        <Form 
          // animalText={} 
          // descriptionText={} 
          // ageText={} 
          // priceText={} 
          // ageValidation={} 
          // priceValidation={} 
          handleAddClick={this.addPet}
        />
        <br/>
        <hr/>
        <h1>Change or Remove Pets</h1>
        <p id="note"><em>Note: </em>Click an '<span><img src="/images/edit.png" width="15px" alt="edit" /></span>' icon to change any fields, then click the same icon to submit changes.</p>
        <p id="note"><em>Note: </em>Click a '<span><img src="/images/delete.png" width="15px" alt="delete"/></span>' icon to remove a pet from inventory.</p>
        <Fragment>
          <Suspense>
            <PetsTable 
              pets={this.state.pets}
              editPet={this.state.editPet}
              editIndex={this.state.editIndex}
              editing={this.state.editing}
              handleEditAnimal={this.handleChange_EditAnimalTextInput}
              handleEditDescription={this.handleChange_EditDescriptionTextInput}
              handleEditAge={this.handleChange_EditAgeTextInput}
              handleEditPrice={this.handleChange_EditPriceTextInput}
              handleEdit={this.editPet}
              handleDelete={this.deletePet}
            />
          </Suspense>
        </Fragment>
      </div>
    );
  }
}