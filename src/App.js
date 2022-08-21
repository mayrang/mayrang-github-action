import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div data-testid="counter">{count}</div>
        <button data-testid="plus-button" disabled={disable} onClick={() => setCount(prev => prev+1)}>+</button>
        <button data-testid="minus-button" disabled={disable}  onClick={() => setCount(prev => prev -1)}>-</button>
        <button data-testid="on-off-button" style={{backgroundColor: "blue"}} onClick={() => setDisable(prev => !prev)}>on/off</button>
      </header>
    </div>
  );
}

export default App;
