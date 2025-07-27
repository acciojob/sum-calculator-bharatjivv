import React, { useState } from "react";

const SumTotal = () => {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddNumber = () => {
    if (inputValue.trim() !== "") {
      // Convert to number before adding
      setNumbers([...numbers, Number(inputValue)]);
      setInputValue("");
    }
  };

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddNumber}>Add</button>
      <p>Sum is: {sum}</p>
      
    </div>
  );
};

export default SumTotal;
