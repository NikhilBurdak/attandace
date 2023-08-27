import React from 'react'

const UpdatedAttendance = (attendanceArray) => {
    console.log(attendanceArray)
  return (
    <div>
        {attendanceArray.attendanceArray.map((student) => (
            <div className='attendanceDisplay'>
                <p>{student.rollnumber}</p>
                <p>{student.attendance}</p>
            </div>
        ))}
    </div>
  )
}

export default UpdatedAttendance