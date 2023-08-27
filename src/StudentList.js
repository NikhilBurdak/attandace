import React, { useState } from 'react';
import './StudentList.css';
import SearchComponent from './SearchComponent';

function StudentList({ studentList, attendanceData, handleAttendanceChange }) {
  const [searchResults, setSearchResults] = useState(studentList);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="StudentList">
      <SearchComponent
        data={studentList}
        searchKey="name"
        setSearchResults={handleSearch}
      />

      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Roll Number</th>
            <th style={{ textAlign: 'center' }}>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((student) => (
            <tr key={student.rollnumber}>
              <td>{student.name}</td>
              <td>{student.rollnumber}</td>
              <td>
                <div className="attendance-container">
                  <label>
                    <input
                      type="radio"
                      name={`attendance-${student.rollnumber}`}
                      value="present"
                      checked={attendanceData[student.rollnumber] === 'present'}
                      onChange={() =>
                        handleAttendanceChange(student.rollnumber, student.name, 'present')
                      }
                    />
                    Present
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`attendance-${student.rollnumber}`}
                      value="absent"
                      checked={attendanceData[student.rollnumber] === 'absent'}
                      onChange={() =>
                        handleAttendanceChange(student.rollnumber,student.name,'absent')
                      }
                    />
                    Absent
                  </label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
