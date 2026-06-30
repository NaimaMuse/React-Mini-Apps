import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-page">

      <div className="counter-header">
        <h1>Counter App</h1>
        <p>Increase, decrease or reset the counter</p>
      </div>

      <div className="counter-card">

        <div className="counter-number">
          {count}
        </div>

        <div className="counter-buttons">

          <button
            className="increase-btn"
            onClick={increase}
          >
            +
          </button>

          <button
            className="decrease-btn"
            onClick={decrease}
          >
            −
          </button>

          <button
            className="reset-btn"
            onClick={reset}
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default Counter;