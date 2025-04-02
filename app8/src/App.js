import logo from './logo.svg';
import './App.css';
import ChildComponent1 from './components/childComponent1';
import PureComponentEx1 from './components/PureCompponentEx1';
import PureComponentEx2 from './components/PureCompponentEx2';
import UseMemoEx from './components/UseMemoEx';
import RefExample1 from './components/RefExample1';
import RefExample2 from './components/RefExample2';


function App() {

  function greetings(username) {
    alert("Welcome to world of React JS "+username);
  }
  return (
    <div className="App">
      <header className="App-header">
       {/* <ChildComponent1 greet={greetings}></ChildComponent1> */}
           {/* <PureComponentEx1></PureComponentEx1> */}
           {/* <PureComponentEx2></PureComponentEx2> */}
          {/* <UseMemoEx></UseMemoEx> */}
          {/* <RefExample1></RefExample1> */}
            {/* <RefExample2></RefExample2> */}

      </header>
    </div>
  );
}

export default App;
