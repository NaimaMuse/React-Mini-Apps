import { useState } from "react";

function LoanPage() {
  const [bankName, setBankName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [loans, setLoans] = useState([]);

  function addLoan() {
    if (!bankName || !description || !amount) return;

    const newLoan = {
      id: Date.now(),
      bankName,
      description,
      amount: Number(amount),
    };

    setLoans([...loans, newLoan]);

    setBankName("");
    setDescription("");
    setAmount("");
  }

  function deleteLoan(id) {
    setLoans(loans.filter((loan) => loan.id !== id));
  }

  return (
    <div className="loan-page">

      <div className="loan-header">
        <h1>Personal Loan Management</h1>
      </div>

      {/* FORM */}
      <div className="loan-card">

        <input
          type="text"
          placeholder="Bank Name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Loan Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Loan Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addLoan}>
          Add Loan
        </button>

      </div>

      {/* TABLE */}
      <div className="loan-table">

        {loans.length === 0 ? (
          <p className="no-data">No loans added</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Bank</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {loans.map((loan) => (
                <tr key={loan.id}>
                  <td>{loan.bankName}</td>
                  <td>{loan.description}</td>
                  <td>${loan.amount}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteLoan(loan.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>

    </div>
  );
}

export default LoanPage;