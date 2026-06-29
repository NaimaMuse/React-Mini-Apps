import { useState } from "react";

function Age() {
  const [age, setAge] = useState("");
  const [result, setResult] = useState("");

  function CalculateAge() {
    if (age === "") {
      setResult("2026");
      return;
    }

    setResult(2026 - Number(age));
  }

  return (
    <div className="age-page">

      <div className="age-header">
        <h1>Age Calculator</h1>
        <p>Calculate your age using your birth year</p>
      </div>

      <div className="age-card">

        <div className="age-input-box">
          <label>Birth Year</label>

          <input
            type="number"
            placeholder="Enter your birth year"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button className="age-btn" onClick={CalculateAge}>
          Calculate Age
        </button>

        <div className="age-result">
          <h3>Your Age</h3>

          <div className="age-number">
            {result}
          </div>
        </div>

      </div>

    </div>
  );
}

export default Age;