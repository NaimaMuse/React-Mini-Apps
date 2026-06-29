import { useState } from "react";

function Temperature() {
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState("");

  function Calculate() {
    if (currency === "") {
      setResult("SLSH: 0");
      return;
    }

    setResult(currency * 10000);
  }

  return (
    <div className="currency-page">

      <div className="currency-header">
        <h1>Currency Converter</h1>
        <p>Convert US Dollars (USD) to Somali Shillings (SLSH)</p>
      </div>

      <div className="currency-card">

        <div className="currency-input-box">

          <label>Amount in USD ($)</label>

          <input
            type="number"
            placeholder="Enter dollars"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />

        </div>

        <button
          className="currency-btn"
          onClick={Calculate}
        >
          Convert
        </button>

        <div className="currency-result">

          <h3>Amount in SLSH</h3>

          <div className="currency-number">
            {result}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Temperature;