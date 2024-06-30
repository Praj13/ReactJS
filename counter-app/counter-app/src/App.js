import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Counter</h1>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
      </header>
    </div>
  );
}

export default App;
