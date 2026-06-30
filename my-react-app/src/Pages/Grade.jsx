import { useState } from "react";

function Grade() {
  const [score, setScore] = useState("");
  const [grade, setGrade] = useState("F");

  function calculateGrade() {
    const marks = Number(score);

    if (marks >= 90 && marks <= 100) {
      setGrade("A");
    } else if (marks >= 80) {
      setGrade("B");
    } else if (marks >= 70) {
      setGrade("C");
    } else if (marks >= 60) {
      setGrade("D");
    } else {
      setGrade("F");
    }
  }

  return (
    <div>
      <h2>Grade Calculator</h2>

      <input
        type="number"
        placeholder="Enter your score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <br />
      <br />

      <button onClick={calculateGrade}>Calculate Grade</button>

      <h3>Grade: {grade}</h3>
    </div>
  );
}

export default Grade;