import { useState } from "react";

function Attendance() {
  const initialStudents = [
    { name: "Alice Johnson", status: "" },
    { name: "Brian Smith", status: "" },
    { name: "Charlie Davis", status: "" },
    { name: "Diana Prince", status: "" },
  ];

  const [students, setStudents] = useState(initialStudents);

  function markPresent(index) {
    const updated = [...students];
    updated[index].status = "Present";
    setStudents(updated);
  }

  function markAbsent(index) {
    const updated = [...students];
    updated[index].status = "Absent";
    setStudents(updated);
  }

  function resetAttendance() {
    setStudents(initialStudents);
  }

  const present = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absent = students.filter(
    (student) => student.status === "Absent"
  ).length;

  const rate = Math.round((present / students.length) * 100);

  return (
    <div className="attendance-page">

      <div className="attendance-header">
        <h1>Class Attendance</h1>
        <p>Manage today's attendance record</p>
      </div>

      <div className="attendance-stats">

        <div className="attendance-card">
          <h3>Present</h3>
          <h1>{present}</h1>
        </div>

        <div className="attendance-card">
          <h3>Absent</h3>
          <h1>{absent}</h1>
        </div>

        <div className="attendance-card">
          <h3>Rate</h3>
          <h1>{rate}%</h1>
        </div>

      </div>

      <div className="attendance-list">

        {students.map((student, index) => (

          <div className="student-card" key={index}>

            <div>

              <h3>{student.name}</h3>

              <p className={student.status.toLowerCase()}>
                {student.status || "Not Marked"}
              </p>

            </div>

            <div className="attendance-buttons">

              <button
                className="present-btn"
                onClick={() => markPresent(index)}
              >
                ✓ Present
              </button>

              <button
                className="absent-btn"
                onClick={() => markAbsent(index)}
              >
                ✕ Absent
              </button>

            </div>

          </div>

        ))}

      </div>

      <button
        className="reset-attendance-btn"
        onClick={resetAttendance}
      >
        Reset Roster Status
      </button>

    </div>
  );
}

export default Attendance;