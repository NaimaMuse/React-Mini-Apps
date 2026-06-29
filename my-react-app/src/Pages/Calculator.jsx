import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function add() {
    setResult(Number(num1) + Number(num2));
  }

  function subtract() {
    setResult(Number(num1) - Number(num2));
  }

  function multiply() {
    setResult(Number(num1) * Number(num2));
  }

  function divide() {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  }

  return (
   <div className="calculator-page">

  <div className="calculator-header">
    <h1>Calculator</h1>
    <p>Basic Arithmetic Operations</p>
  </div>

  <div className="calculator-card">

    <div className="input-row">

      <div className="input-box">
        <label>First Number</label>

        <input
          className="calculator-input"
          type="number"
          placeholder="Enter number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>


      <div className="input-box">
        <label>Second Number</label>

        <input
          className="calculator-input"
          type="number"
          placeholder="Enter number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

    </div>

    <div className="calculator-buttons">

      <button onClick={add}>+</button>

      <button onClick={subtract}>−</button>

      <button onClick={multiply}>×</button>

      <button onClick={divide}>÷</button>

    </div>

    <div className="calculator-result">

      <h3>Result</h3>

      <div className="result-value">
        {result}
      </div>

    </div>

  </div>

</div>
  );
}

export default Calculator;