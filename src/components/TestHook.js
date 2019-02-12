import React, { useState, useEffect } from "react";

function TestHook({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
  );
}

export default TestHook;
