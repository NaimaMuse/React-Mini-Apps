import { useState } from "react";

function Unit() {
  const [miles, setMiles] = useState("");
  const [result, setResult] = useState("");

  function Calculate() {
    if (miles === "") {
      setResult("Miles: 0 KM");
      return;
    }

    setResult(miles * 1.60934);
  }

  return (
    <div className="currency-page">

      <div className="currency-header">
        <h1>Unit (Miles to KM)</h1>
      </div>

      <div className="currency-card">

        <div className="currency-input-box">


          <input
            type="number"
            placeholder="Enter Miles Count"
            value={miles}
            onChange={(e) => setMiles(e.target.value)}
          />

        </div>

        <button
          className="currency-btn"
          onClick={Calculate}
        >
          Convert
        </button>

        <div className="currency-result">

          <h3>Miles</h3>

          <div className="currency-number">
            {result}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Unit;