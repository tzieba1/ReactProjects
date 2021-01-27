import React from 'react';
import './PetsTable.css';
import {Button} from '../Button/Button.js';
import {TextInput} from '../TextInput/TextInput.js';

export const PetsTable = ({
    pets, 
    editPet, 
    editIndex, 
    editing,
    handleEditAnimal,
    handleEditDescription,
    handleEditAge,
    handleEditPrice, 
    handleEdit, 
    handleDelete
  }) => {
  //Retrieve tableData to possibly change a row to have TextInputs for editing based on props.
  var tableData = pets.map(p => (
    <tr key={p.id}>
      <td id="animalCell">{p.animal}</td>
      <td id="descCell">{p.description}</td>
      <td id="ageCell">{p.age}</td>
      <td id="priceCell">{p.price}</td>
      <td id="actionCell">
        <Button 
          buttonid={p.id} 
          sizeId="table"
          iconSource={"/images/edit.png"} 
          handleClick={handleEdit} 
        />
        <Button 
          buttonid={p.id} 
          sizeId="table"
          iconSource={"/images/delete.png"} 
          handleClick={handleDelete} 
        />
      </td>
    </tr> 
  ));

  //Must make sure the editId comes from the correct key in tableData
  if(editing) {
    //Use the editIndex provided with props to show fields for target pet to edit
    // and show the value of the editPet in props for the TextInputs.
    tableData[editIndex] = [{
      id: Number(editPet.id), 
      animal: <TextInput value={editPet.animal} handleChange={handleEditAnimal} />, 
      description: <TextInput value={editPet.description} handleChange={handleEditDescription} />, 
      age: <TextInput value={editPet.age} handleChange={handleEditAge} />, 
      price: <TextInput value={editPet.price} handleChange={handleEditPrice} />
    }].map(p => (
        <tr key={p.id}>
          <td id="animalCell">{p.animal}</td>
          <td id="descCell">{p.description}</td>
          <td id="ageCell">{p.age}</td>
          <td id="priceCell">{p.price}</td>
          <td id="actionCell">
            <Button 
              buttonid={p.id} 
              sizeId="table"
              iconSource={"/images/edit.png"} 
              handleClick={handleEdit} 
            />
            <Button 
              buttonid={p.id} 
              sizeId="table"
              iconSource={"/images/delete.png"} 
              handleClick={handleDelete} 
            />
          </td>
        </tr>
      )
    )[0];
  }
  
  return(
    <table className="PetsTable">
      <thead>
        <tr>
          <th id="animalCell">Animal</th>
          <th id="descCell">Description</th>
          <th id="ageCell">Age</th>
          <th id="priceCell">Price</th>
          <th id="actionCell">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>
  );  
}