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
    <div className="grade-page">

      <div className="grade-header">
        <h1>Grade Calculator</h1>
        <p>Calculate your grade based on your score</p>
      </div>

      <div className="grade-card">

        <div className="grade-input-box">

          <label>Score</label>

          <input
            type="number"
            placeholder="Enter your score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />

        </div>

        <button
          className="grade-btn"
          onClick={calculateGrade}
        >
          Calculate Grade
        </button>

        <div className="grade-result">

          <h3>Your Grade</h3>

          <div className="grade-letter">
            {grade}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Grade;