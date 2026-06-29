import { useState } from "react";

function Temperature() {
  const [celsius, setCelsius] = useState("");
  const [result, setResult] = useState("");

  function Calculate() {
    if (celsius === "") {
      setResult("F: 32");
      return;
    }

    setResult((celsius * 9 / 5) + 32);
  }

  return (
    <div className="temperature-page">

      <div className="temperature-header">
        <h1>Temperature Converter</h1>
        <p>Convert Celsius to Fahrenheit</p>
      </div>

      <div className="temperature-card">

        <div className="temperature-input-box">
          <label>Celsius (°C)</label>

          <input
            type="number"
            placeholder="Enter temperature"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
          />
        </div>

        <button
          className="temperature-btn"
          onClick={Calculate}
        >
          Convert
        </button>

        <div className="temperature-result">

          <h3>Fahrenheit (°F)</h3>

          <div className="temperature-number">
            {result}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Temperature;