import React from 'react';
import './analytics-table.styles.css'

export const AnalyticsTable = ({grades}) => {
  var tempGrades = grades;
  var max = 0, min = 0, avg = 0;

  if (tempGrades.length > 0) {
    max = Number(tempGrades[0].grade);
    min = max;
    avg = max;

    for (var i = 1; i < tempGrades.length; i++) {
      max = tempGrades[i].grade > max ? tempGrades[i].grade : max;
      min = tempGrades[i].grade < min ? tempGrades[i].grade : min;
      avg += Number(tempGrades[i].grade);
    }
    avg = avg / tempGrades.length;
  }

  return (
    <table className="AnalyticsTable">
      <thead>
        <tr>
          <th id="maxCell">Maximum</th>
          <th id="minCell">Minimum</th>
          <th id="averageCell">Average</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="maxCell">{max}</td>
          <td id="minCell">{min}</td>
          <td id="averageCell">{avg}</td>
        </tr>
      </tbody>
    </table>
  );
}