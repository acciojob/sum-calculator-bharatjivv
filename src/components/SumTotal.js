import React, { useState } from "react";

const SumTotal = () => {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value !== "") {
      setNumbers([...numbers, Number(value)]);
      setInputValue("");
    }
  };

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <input type="number" value={inputValue} onChange={handleChange} />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumTotal;
