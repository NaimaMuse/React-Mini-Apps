import { useState } from "react";

function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  function Calculate() {
    if (weight === "" || height === "") {
      setResult("Please enter all fields");
      return;
    }

    const bmi = Number(weight) / (Number(height) * Number(height));
    setResult(bmi.toFixed(2));
  }

  return (
    <div className="bmi-page">

      <div className="bmi-header">
        <h1>BMI Calculator</h1>
        <p>Calculate your Body Mass Index</p>
      </div>

      <div className="bmi-card">

        <div className="bmi-inputs">

          <div className="input-box">
            <label>Weight (kg)</label>

            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label>Height (m)</label>

            <input
              type="number"
              placeholder="Example: 1.75"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

        </div>

        <button className="bmi-btn" onClick={Calculate}>
          Calculate BMI
        </button>

        <div className="bmi-result">

          <h3>Your BMI</h3>

          <div className="result-number">
            {result}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Bmi;