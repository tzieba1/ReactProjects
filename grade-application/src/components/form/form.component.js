import React from 'react';
import './form.styles.css';
import {Button} from '../button/button.component.js';
import {TextInput} from '../text-input/text-input.component.js';

export const Form = ({
  edit,
  courseNameText,
  courseNameValidation,
  gradeText,
  gradeValidation,
  handleCourseNameChange,
  handleGradeChange,
  handleAddClick
}) => {
  var iconSource = edit
    ? "./public/images/edit.png"
    : "./public/images/add.png";

  return (
    <form className="Form">
      <fieldset>
        <label htmlFor="course">Course Name</label>
        <TextInput
          id="course"
          placeHolder="e.g. COMP10244"
          value={courseNameText}
          handleChange={handleCourseNameChange}
          validationMessage={courseNameValidation}/>
      </fieldset>
      <fieldset>
        <label htmlFor="grade">Grade</label>
        <TextInput
          id="grade"
          placeHolder="e.g. 95"
          value={gradeText}
          handleChange={handleGradeChange}
          validationMessage={gradeValidation}/>
      </fieldset>
      <Button buttonid={0} sizeId="form-button-size" iconSource={iconSource} handleClick={handleAddClick}/>
  </form>
  );
}