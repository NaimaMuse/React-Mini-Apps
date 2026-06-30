import { useState } from "react";

function WaterBill() {
  const [name, setName] = useState("");
  const [units, setUnits] = useState("");
  const [bill, setBill] = useState(null);

  function calculateBill() {
    const usage = Number(units);

    const baseFee = 15;
    const ratePerUnit = 2;

    const usageCharge = usage * ratePerUnit;
    const tax = (baseFee + usageCharge) * 0.1;
    const total = baseFee + usageCharge + tax;

    setBill({
      name: name || "Guest Customer",
      usage,
      baseFee,
      usageCharge,
      tax,
      total,
    });
  }

  return (
    <div className="water-page">

      <div className="water-header">
        <h1>💧 EcoWater Calculator</h1>
        <p>Utility Billing Simulation</p>
      </div>

      <div className="water-card">

        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Water Units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        />

        <button onClick={calculateBill}>
          Calculate Bill
        </button>
      </div>

      {bill && (
        <div className="water-result">

          <h3>Account Holder: {bill.name}</h3>

          <div className="bill-line">
            <span>Base Service Fee:</span>
            <span>${bill.baseFee.toFixed(2)}</span>
          </div>

          <div className="bill-line">
            <span>Usage Charge:</span>
            <span>${bill.usageCharge.toFixed(2)}</span>
          </div>

          <div className="bill-line">
            <span>Govt Tax (10%):</span>
            <span>${bill.tax.toFixed(2)}</span>
          </div>

          <hr />

          <div className="bill-total">
            <span>Total Bill:</span>
            <span>${bill.total.toFixed(2)}</span>
          </div>

        </div>
      )}

    </div>
  );
}

export default WaterBill;