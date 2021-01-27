import React, {Component} from 'react';
import $ from 'jquery';
import './App.styles.css';
import {Form} from './components/form/form.component.js';
import {CourseTable} from './components/course-table/course-table.component.js';
import {AnalyticsTable} from './components/analytics-table/analytics-table.component.js';

class App extends Component{
  constructor() {
    super();
    this.state = {
      grades: [],
      courseNameText: "",
      gradeText: "",
      edit: 0,
      courseNameValidation: "",
      gradeValidation: ""
    };
  }

  componentDidMount() {
    //TODO: jQuery for changing document dimensions with a gradient background
    $(window).on("resize", function(){
      $(".App").height($(document).height());
    });
    $(".App").height($(document).height());
  }
  
  componentDidUpdate() {
    //TODO: jQuery for changing document dimensions with a gradient background
    $(window).on("resize",function(){
      $(".App").height($(document).height());
    });
    $(".App").height($(document).height());
  }
  
  addButton_Click = (event) => {
    event.preventDefault();
    
    //Set the state so that validation messages are accessible to child components requiring them.
    this.setState({courseNameValidation: this.state.courseNameText != "" ? "" : "Course name cannot be blank"});
    this.setState({gradeValidation: this.state.gradeText >= 0 && this.state.gradeText <= 100 && this.state.gradeText != "" ? "" : "Grade must be an integer between 0-100"});

    //Condition checking for valid entry in the course tabl to proceed.
    if(this.state.courseNameText != "" && this.state.gradeText >= 0 && this.state.gradeText <= 100 && this.state.gradeText != "") {
      //Make a copy of the current grades for the new grades to be added to it for the state.
      let newGrades = this.state.grades;

      //Change the specific entry for an edited grade if the Apps state has a non-null edit property.
      if(this.state.edit){
        newGrades[this.state.edit - 1] = {
          gradeId: this.state.edit, 
          courseName: this.state.courseNameText, 
          grade: this.state.gradeText
        };
        this.setState({edit: 0});
      }

      //Otherwise, append a new grade to the end of the current grades.
      else {
        newGrades.push(
          {
            gradeId: newGrades.length + 1,
            courseName: this.state.courseNameText, 
            grade: this.state.gradeText
          }
        );
      }
      
      this.setState({grades: newGrades});
      this.setState({courseNameText: ""});
      this.setState({gradeText: ""});
    }
  }

  editButton_Click = (event) => {
    //Set the entryId for the entry to edit as the buttonid (directly related to gradeId).
    var entryId = event.target.attributes.buttonid.value;

    //Set the state to behave conditionally since an entry is being edited.
    this.setState({edit: entryId});

    //Use entryId to obtain the correct entry in the course table and set it in the text input fields.
    var entry = this.state.grades[entryId - 1];
    this.setState({courseNameText: entry.courseName, gradeText: entry.grade});
  }

  deleteButton_Click = (event) => {
    var gradesLength = this.state.grades.length;

    //Set the entryId for the entry to delete as the buttonid (directly related to gradeId).
    var entryId = event.target.attributes.buttonid.value;

    //Splice new grades up to entry to be removed corresponding to entryId (same as index entryId - 1)
    var tempGrades = this.state.grades;
    var newGrades = this.state.grades.splice(0, entryId - 1);

    //Append remaining entries not being removed to newGrades (ensure id is correct 
    //to render into Course table and Analytics table).
    let num = 1;
    for(var i = entryId - 1 ; i < gradesLength - 1 ; i++) {
      newGrades[i] = {
        gradeId: i + 1, 
        courseName: tempGrades[num].courseName, 
        grade: tempGrades[num].grade
      };
      num++;
    }
    this.setState({grades: newGrades});
  }

  courseNameTextInput_Change = (event) => {
    this.setState({courseNameText: event.target.value});  
  }

  gradesTextInput_Change = (event) => {
    this.setState({gradeText: event.target.value});
  }
  
  render() {
    return (
      <div className="App">
        <Form 
          edit={this.state.edit}
          courseNameText = {this.state.courseNameText}
          gradeText = {this.state.gradeText}
          handleCourseNameChange={this.courseNameTextInput_Change} 
          handleGradeChange={this.gradesTextInput_Change} 
          handleAddClick={this.addButton_Click} 
          gradeValidation={this.state.gradeValidation}
          courseNameValidation={this.state.courseNameValidation}
        />
        <CourseTable 
          grades={this.state.grades} 
          handleEdit={this.editButton_Click} 
          handleDelete={this.deleteButton_Click}
        />
        <AnalyticsTable grades={this.state.grades}/>
      </div>
    ); 
  }
}
export default App;