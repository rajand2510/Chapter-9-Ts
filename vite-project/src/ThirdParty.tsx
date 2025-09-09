import React, { useState } from "react";
import _ from "lodash";

const NumberList: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4]);

  // Use Lodash to double the numbers
  const doubled = _.map(numbers, (n) => n * 2);

  // Add random number
  const addNumber = () => {
    const random = _.random(1, 100);
    setNumbers([...numbers, random]);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h2>Numbers</h2>
      <p>{numbers.join(", ")}</p>

      <h2>Doubled (via Lodash)</h2>
      <p>{doubled.join(", ")}</p>

      <button onClick={addNumber}>Add Random Number</button>
    </div>
  );
};

export default NumberList;
