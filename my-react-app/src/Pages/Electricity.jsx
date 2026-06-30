import { useState } from "react";

function ElectricityBill() {
  const [name, setName] = useState("");
  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("");
  const [rate, setRate] = useState("");

  const [bill, setBill] = useState(null);
  const [error, setError] = useState("");

  function calculateBill() {

    if (!name.trim()) {
      setError("All the feilds are required");
      return;
    }

    if (previous === "" || current === "" || rate === "") {
      setError("All fields must be filled");
      return;
    }

    if (Number(previous) < 0 || Number(current) < 0 || Number(rate) < 0) {
      setError("Values cannot be negative");
      return;
    }

    if (Number(current) < Number(previous)) {
      setError("Current reading must be greater than previous reading");
      return;
    }

    // clear error if valid
    setError("");

    const units = Number(current) - Number(previous);
    const total = units * Number(rate);

    setBill({
      name,
      previous,
      current,
      rate,
      units,
      total,
    });
  }

  return (
    <div className="electricity-page">

      <div className="electricity-header">
        <h1>Electricity Bill Calculator</h1>
        <p>Calculate customer electricity usage and bill amount</p>
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>
          {error}
        </p>
      )}

      <div className="electricity-card">

        <div className="electricity-inputs">
          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Previous Reading"
            value={previous}
            onChange={(e) => setPrevious(e.target.value)}
          />

          <input
            type="number"
            placeholder="Current Reading"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          />

          <input
            type="number"
            placeholder="Unit Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <button className="electricity-btn" onClick={calculateBill}>
          Calculate Bill
        </button>
      </div>

      {bill && (
        <div className="electricity-result">

          {typeof bill === "string" ? (
            <h3>{bill}</h3>
          ) : (
            <>
              <h2>Bill Report</h2>

              <p><b>Name:</b> {bill.name}</p>
              <p><b>Previous Reading:</b> {bill.previous}</p>
              <p><b>Current Reading:</b> {bill.current}</p>
              <p><b>Units Used:</b> {bill.units}</p>
              <p><b>Unit Rate:</b> {bill.rate}</p>

              <h1>Total Bill: {bill.total}</h1>
            </>
          )}

        </div>
      )}

    </div>
  );
}

export default ElectricityBill;