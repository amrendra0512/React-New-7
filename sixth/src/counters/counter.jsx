import { useState } from "react";
import "./counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    counter <= 24 && setCounter(counter + 1);
  };

  const subtractCounter = () => {
    counter > 0 && setCounter(counter - 1);
  };

  return (
    <>
      <div className="counter">
        <div >
          <h2>Counter : {counter}</h2>
        </div>

        <div>
          <div>
            <button onClick={() => addCounter()}>+</button>
          </div>
          <div>
            <button onClick={() => subtractCounter()}>-</button>
          </div>
          <div>
            <button onClick={() => setCounter(0)}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
