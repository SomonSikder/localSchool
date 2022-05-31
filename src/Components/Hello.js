import React from "react";
import { useState } from "react/cjs/react.development";

const Hello = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={increase}>increase</button>
      <h2>{count}</h2>
    </div>
  );
};

export default Hello;
