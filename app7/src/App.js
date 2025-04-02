import logo from './logo.svg';
import './App.css';
import Recipes from './components/Recipes';
import Products from './components/Carts';
import Carts from './components/Carts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Recipes></Recipes> */}
       <Carts></Carts>
      </header>
    </div>
  );
}

export default App;
