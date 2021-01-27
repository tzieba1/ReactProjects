import React from 'react';
import './Button.css';

//Forced to use 'buttonid' instead of 'buttonId' and 'buttontype' instead 
//of 'buttonType' to avoid a React warning in the browser console.
export const Button = ({buttonid, iconSource, handleClick}) => {
  
  
  return(
    <input
      className="Button"
      type="image"
      buttonid={buttonid}
      onClick={handleClick}
      src={iconSource}
      alt="buttonIcon"
    />
  );
}