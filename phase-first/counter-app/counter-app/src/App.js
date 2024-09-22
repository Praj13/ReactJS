import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navbar logoText="code with prajwol"/>
      <header className="App-header">
        <h1>Simple Counter</h1>
        <p>Count: {count}</p>
        <button onClick={()=>{
          setCount(count+1);
        }}>Increment</button>
      </header>
    </div>
  );
}

export default App;


