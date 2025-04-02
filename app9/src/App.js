import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { HighOrderComponentBlue, HighOrderComponentOrange, HighOrderComponentPurple } from './components/HighOrderComponent';

function MyCounter(){
  let [counter, setCounter] = useState(0);

  return<>
    <h1>Counter is {counter}</h1>
    <button onClick={()=>setCounter(counter + 1)}>Update</button>
  </>
}

function App() {
  return (
    <div className="App">
      <header>
        <HighOrderComponentPurple counter={MyCounter}></HighOrderComponentPurple>
        <HighOrderComponentBlue  counter={MyCounter}></HighOrderComponentBlue>
        <HighOrderComponentOrange counter={MyCounter}></HighOrderComponentOrange>
      </header>
    </div>
  );
}

export default App;
