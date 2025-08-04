import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <div className="counter-display">
        <h3>Count: {count}</h3>
      </div>
      
      <div className="counter-controls">
        <button onClick={decrement} className="button counter-btn">
          -
        </button>
        <button onClick={reset} className="button counter-btn reset">
          Reset
        </button>
        <button onClick={increment} className="button counter-btn">
          +
        </button>
      </div>

      <div className="counter-info">
        <p>This is a simple counter component with:</p>
        <ul>
          <li>Increment functionality</li>
          <li>Decrement functionality</li>
          <li>Reset functionality</li>
          <li>State management with React hooks</li>
        </ul>
      </div>
    </div>
  );
};

export default Counter; 