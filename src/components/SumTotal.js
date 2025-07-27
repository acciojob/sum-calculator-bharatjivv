import React, { useState, useEffect } from 'react';

const SumTotal = () => {
  const [numbers, setNumbers] = useState([]);      // Stores all entered numbers
  const [sum, setSum] = useState(0);               // Stores the sum
  const [inputValue, setInputValue] = useState(''); // Controls input field

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // When input is a valid number
    if (value !== '' && !isNaN(value)) {
      const parsed = parseInt(value);
      setNumbers((prev) => [...prev, parsed]);
      setInputValue(''); // Clear input after submission
    }
  };

  // Recalculate sum whenever numbers change
  useEffect(() => {
    // Use async pattern with setTimeout to simulate heavy/async calc
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(total);
    }, 0); // Simulated async, without UI blocking

    return () => clearTimeout(timer); // Cleanup
  }, [numbers]);

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter number"
      />
      <p><strong>Current Sum:</strong> {sum}</p>

      
    </div>
  );
};

export default SumTotal;
