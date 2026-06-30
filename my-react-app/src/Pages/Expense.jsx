import { useState } from "react";

function BudgetTracker() {
  const [budgetCategory, setBudgetCategory] = useState("");
  const [budgetAmount, setBudgetAmount] = useState("");

  const [category, setCategory] = useState("");
  const [remarks, setRemarks] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // Add Budget
  function addBudget() {
    if (!budgetCategory || !budgetAmount) return;

    setBudgets([
      ...budgets,
      { category: budgetCategory, budget: Number(budgetAmount) },
    ]);

    setBudgetCategory("");
    setBudgetAmount("");
  }

  // Add Expense
  function addExpense() {
    if (!category || !amount) return;

    setExpenses([
      ...expenses,
      {
        date: date || new Date().toLocaleDateString(),
        category,
        remarks,
        amount: Number(amount),
      },
    ]);

    setCategory("");
    setRemarks("");
    setAmount("");
    setDate("");
  }

  // totals
  const totalBudget = budgets.reduce((a, b) => a + b.budget, 0);

  const totalExpense = expenses.reduce((a, b) => a + b.amount, 0);

  const remaining = totalBudget - totalExpense;

  return (
    <div className="budget-page">

      {/* HEADER */}
      <div className="budget-header">
        <h1>Budget Planning & Expense Tracker</h1>
        <p>Manage your income and expenses easily</p>
      </div>

      {/* BUDGET SECTION */}
      <div className="budget-card">
        <h2>Budget Category</h2>

        <div className="budget-inputs">
          <input
            type="text"
            placeholder="Category"
            value={budgetCategory}
            onChange={(e) => setBudgetCategory(e.target.value)}
          />

          <input
            type="number"
            placeholder="Monthly Budget"
            value={budgetAmount}
            onChange={(e) => setBudgetAmount(e.target.value)}
          />

          <button onClick={addBudget}>Add Budget</button>
        </div>
      </div>

      {/* EXPENSE SECTION */}
      <div className="budget-card">
        <h2>Expense Entry</h2>

        <div className="budget-inputs">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="text"
            placeholder="Remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button onClick={addExpense}>Add Expense</button>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="budget-summary">
        <div className="summary-card">
          <h3>Total Budget</h3>
          <h1>{totalBudget}</h1>
        </div>

        <div className="summary-card">
          <h3>Total Expense</h3>
          <h1>{totalExpense}</h1>
        </div>

        <div className="summary-card">
          <h3>Remaining</h3>
          <h1>{remaining}</h1>
        </div>
      </div>

      {/* TRANSACTIONS */}
      <div className="budget-table">
        <h2>Expense Transactions</h2>

        {expenses.length === 0 ? (
          <p className="no-data">No expenses yet</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Remarks</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {expenses.map((e, i) => (
                <tr key={i}>
                  <td>{e.date}</td>
                  <td>{e.category}</td>
                  <td>{e.remarks}</td>
                  <td>{e.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default BudgetTracker;