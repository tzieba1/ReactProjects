import React from 'react';
import './button.styles.css';

//Forced to use 'buttonid' instead of 'buttonId' and 'buttontype' instead 
//of 'buttonType' to avoid a React warning in the browser console.
export const Button = ({sizeId, buttonid, iconSource, handleClick}) => (
  <input
    className="Button"
    type="image"
    id={sizeId}
    buttonid={buttonid}
    onClick={handleClick}
    src={iconSource}
  />
);