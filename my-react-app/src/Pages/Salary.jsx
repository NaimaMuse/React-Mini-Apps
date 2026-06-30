import { useState } from "react";

function Payroll() {
  const [fullName, setFullName] = useState("");
  const [salary, setSalary] = useState("");
  const [overtime, setOvertime] = useState("");
  const [allowance, setAllowance] = useState("");
  const [advance, setAdvance] = useState("");
  const [bankLoan, setBankLoan] = useState("");
  const [bills, setBills] = useState("");

  const [netSalary, setNetSalary] = useState(0);
  const [showReport, setShowReport] = useState(false);

  const [error, setError] = useState("");

  function calculatePayroll() {

    if (!fullName.trim()) {
      setError("All the feilds are required");
      return;
    }

    if (
      salary === "" ||
      overtime === "" ||
      allowance === "" ||
      advance === "" ||
      bankLoan === "" ||
      bills === ""
    ) {
      setError("All fields must be filled");
      return;
    }

    if (
      Number(salary) < 0 ||
      Number(overtime) < 0 ||
      Number(allowance) < 0 ||
      Number(advance) < 0 ||
      Number(bankLoan) < 0 ||
      Number(bills) < 0
    ) {
      setError("Values cannot be negative");
      return;
    }

    // clear error if valid
    setError("");

    const total =
      Number(salary) +
      Number(overtime) +
      Number(allowance) -
      Number(advance) -
      Number(bankLoan) -
      Number(bills);

    setNetSalary(total);
    setShowReport(true);
  }

  function resetForm() {
    setFullName("");
    setSalary("");
    setOvertime("");
    setAllowance("");
    setAdvance("");
    setBankLoan("");
    setBills("");
    setNetSalary(0);
    setShowReport(false);
    setError(""); // clear error
  }

  return (
    <div className="payroll-page">

      <div className="payroll-header">
        <h1>Payroll Calculator</h1>
        <p>Calculate Employee Net Salary</p>
      </div>

      {/* NEW: ERROR MESSAGE */}
      {error && (
        <p style={{ color: "red", marginBottom: "10px" }}>
          {error}
        </p>
      )}

      <div className="payroll-card">

        <div className="payroll-grid">

          <input
            type="text"
            placeholder="Employee Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Basic Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />

          <input
            type="number"
            placeholder="Overtime"
            value={overtime}
            onChange={(e) => setOvertime(e.target.value)}
          />

          <input
            type="number"
            placeholder="Allowance"
            value={allowance}
            onChange={(e) => setAllowance(e.target.value)}
          />

          <input
            type="number"
            placeholder="Advance"
            value={advance}
            onChange={(e) => setAdvance(e.target.value)}
          />

          <input
            type="number"
            placeholder="Bank Loan"
            value={bankLoan}
            onChange={(e) => setBankLoan(e.target.value)}
          />

          <input
            type="number"
            placeholder="Bills"
            value={bills}
            onChange={(e) => setBills(e.target.value)}
          />

        </div>

        <div className="payroll-buttons">

          <button
            className="payroll-calculate"
            onClick={calculatePayroll}
          >
            Calculate Payroll
          </button>

          <button
            className="payroll-reset"
            onClick={resetForm}
          >
            Reset
          </button>

        </div>

      </div>

      {showReport && (

        <div className="payroll-slip">

          <h2>Payroll Slip</h2>

          <div className="slip-item">
            <span>Employee</span>
            <span>{fullName}</span>
          </div>

          <div className="slip-item">
            <span>Salary</span>
            <span>${salary}</span>
          </div>

          <div className="slip-item">
            <span>Overtime</span>
            <span>${overtime}</span>
          </div>

          <div className="slip-item">
            <span>Allowance</span>
            <span>${allowance}</span>
          </div>

          <div className="slip-item">
            <span>Advance</span>
            <span>-${advance}</span>
          </div>

          <div className="slip-item">
            <span>Bank Loan</span>
            <span>-${bankLoan}</span>
          </div>

          <div className="slip-item">
            <span>Bills</span>
            <span>-${bills}</span>
          </div>

          <hr />

          <div className="net-salary">
            Net Salary : ${netSalary}
          </div>

        </div>

      )}

    </div>
  );
}

export default Payroll;