import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  function increment() {
    setCount((state) => {
      return state + 1;
    });
    setCounter((sum) => {
      return sum + 1;
    });
  }
  function decrement() {
    setCount((state) => {
      return state - 1;
    });
    setCounter1((sum) => {
      return sum + 1;
    });
  }
  return (
    <div>
      <h1>{count}</h1>
      <p className="text-primary">Вы кликнули {counter + counter1} раз(а)</p>
      <p className="text-success">Kликнули на кнопку + {counter} раз(а)</p>
      <p className="text-danger">Kликнули на кнопку - {counter1} раз(а)</p>
      <button onClick={increment} className="btn btn-success m-2">
        +
      </button>
      <button onClick={decrement} className="btn btn-danger m-2">
        -
      </button>
    </div>
  );
};

export default Counter;
