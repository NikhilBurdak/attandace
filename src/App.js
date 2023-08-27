import React, { useState, useEffect } from 'react';
import './App.css';
import StudentList from './StudentList';
import {Navigate} from 'react-router-dom';
import UpdatedAttendance from './UpdatedAttendance';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [name, setName] = useState('');
  const [rollnumber, setRollnumber] = useState(0);
  const [studentList, setStudentList] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const [attendanceArray, setAttendanceArray] = useState([]);

  const addToList = () => {
    const list1 = studentList;
    console.log(list1)
    list1.push({name:name,rollnumber:rollnumber})
    setStudentList(list1);
    setName('');
    setRollnumber(0);
  };

  const handleAttendanceChange = (rollnumber, name, attendance) => {
    setAttendanceData((prevData) => ({
      ...prevData,
      [rollnumber]: [name,attendance],
    }));
  };

  const handleUpdateAttendance = () => {
    const attendanceArray = Object.entries(attendanceData).map(([rollnumber, [name,attendance]]) => ({
      rollnumber,
      name,
      attendance,
    }));
    setAttendanceArray(attendanceArray);
  }

  return (
    <div className="App">
      <h1> BASIC ATTENDANCE MANAGEMENT APPLICATION</h1>
      <div className="StudentForm">
        <label>Name :</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Roll Number :</label>
        <input type="number" value={rollnumber} onChange={(e) => setRollnumber(parseInt(e.target.value))} />
        <button onClick={addToList}>Add to List</button>
      </div>
      <StudentList
        studentList={studentList}
        attendanceData={attendanceData}
        handleAttendanceChange={handleAttendanceChange}
      />
      <div className="ButtonContainer">
        <button className="UpdateButton" onClick={handleUpdateAttendance}>
          Update
        </button>
      </div>
      <UpdatedAttendance attendanceArray={attendanceArray} />
    </div>
  );
}

export default App;
