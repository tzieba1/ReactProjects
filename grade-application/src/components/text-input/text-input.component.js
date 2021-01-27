import React from 'react';
import './text-input.styles.css';
import {ValidationMessage} from '../validation-message/validation-message.component.js';

export const TextInput = ({value, placeHolder, handleChange, validationMessage}) => {
  return (
    <div className="TextInput">
      <input
        type="text"
        value={value}
        placeholder={placeHolder}
        onChange={handleChange}
      />
      <ValidationMessage message={validationMessage} />
    </div>
  );
}