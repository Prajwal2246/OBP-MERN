import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
      setCount(count + 1);
    }

    function decreent() {
      setCount(count - 1);
    }

    return (
      <div>
        <button>{count}</button>
        <button onClick={increment}> Increment</button>
        <button onClick={decreent}> Decrement</button>
      </div>
    );
  }

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <Counter />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
