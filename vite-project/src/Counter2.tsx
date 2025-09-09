import React, { useState } from "react";

type CounterProps = {
  start?: number; // optional prop
};

const Counter2: React.FC<CounterProps> = ({ start = 0 }) => {
  const [count, setCount] = useState<number>(start);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Counter: {count}</h2>
      <button
        onClick={handleIncrement}
        className="px-4 py-2 bg-green-500 text-white rounded mr-2"
      >
        +
      </button>
      <button
        onClick={handleDecrement}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        -
      </button>
    </div>
  );
};

export default Counter2;
