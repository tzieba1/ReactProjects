import React from 'react';
import './TextInput.css';

export const TextInput = ({type, value, placeHolder, handleChange, validationMessage}) => {
  return (
    <div className="TextInput">
      <input
        type={type}
        defaultValue={value}
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </div>
  );
}