import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  }

  let decrement = () => {
    if(count>0){
      setCount(count - 1);
    }
  }

  return (
    <>
      <h3>count : {count}</h3>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Decrease</button>
    </>
  );
}

export default App;