import logo from './logo.svg';
import './App.css';
import PreviousStateinFunction from './components/PreviousStateinFunction';
import { useState } from 'react';
import PreviousStateinFunction1 from './components/PreviousStateinFunction1';
import { commonData } from './components/CommonContext.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Services from './components/Services.js';
function App() {
  let[count,setCount] = useState(0);
  let[theme, setTheme] = useState({fg: "blue", bg:"black"});
  return (
    <div className="App">
      {/* <PreviousStateinFunction></PreviousStateinFunction> */}
      {/* <PreviousStateinFunction1 count={count}></PreviousStateinFunction1> */}
      {/* <button onClick={()=>setCount(count + 1)}>Update</button> */}

      <commonData.Provider value={theme}>
         <Home></Home>
         <About></About>
         <Services></Services>
      </commonData.Provider>

      <button onClick={()=>setTheme({fg: "blue", bg:"black" })}>Theme 1</button>
      <button onClick={()=>setTheme({fg: "orange", bg:"red" })}>Theme 2</button>
      <button onClick={()=>setTheme({fg: "green", bg:"purple" })}>Theme 3</button>
    </div>
  );
}

export default App;
