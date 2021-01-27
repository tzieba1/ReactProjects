import React from 'react';
import './course-table.styles.css';
import {Button} from '../button/button.component.js';;

export const CourseTable = ({grades, handleEdit, handleDelete}) => (
  <table className="CourseTable">
    <thead>
      <tr>
        <th id="courseCell">Course Name</th>
        <th id="gradeCell">Grade</th>
        <th id="actionCell">Edit</th>
        <th id="actionCell">Delete</th>
      </tr>
    </thead>
    <tbody>
      {grades.map(g => (
        <tr key={g.gradeId}>
          <td id="courseCell">{g.courseName}</td>
          <td id="gradeCell">{g.grade}</td>
          <td id="actionCell">
            <Button 
              buttonid={g.gradeId} 
              sizeId="table"
              iconSource={"./public/images/edit.png"} 
              handleClick={handleEdit} 
            />
          </td>
          <td id="actionCell">
            <Button 
              buttonid={g.gradeId} 
              sizeId="table"
              iconSource={"./public/images/delete.png"} 
              handleClick={handleDelete} 
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);