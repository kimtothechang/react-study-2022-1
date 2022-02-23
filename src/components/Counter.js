import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const addNumber = () => {
    setNumber((current) => current + 1);
  };

  const subNumber = () => {
    setNumber((current) => current - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={addNumber}>⬆</button>
      <button onClick={subNumber}>⬇</button>
    </div>
  );
};

export default Counter;
