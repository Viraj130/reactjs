import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Students from './Students';

function App() {
  const students = [
    {roll:1, fname:"Viraj", lname:"Bhatti", city:"Rajkot"},
    {roll:2, fname:"Devarshi", lname:"Thakkar", city:"Rajkot"},
    {roll:3, fname:"Pranjal", lname:"Ahir", city:"Rajkot"},
    {roll:4, fname:"Yash", lname:"Singal", city:"Rajkot"},
    {roll:5, fname:"Rajiv", lname:"Sheikh", city:"Rajkot"},
    {roll:6, fname:"Bhavin", lname:"Thakkar", city:"Rajkot"},
    {roll:7, fname:"Nisarg", lname:"Kapupara", city:"Rajkot"},
    {roll:8, fname:"Vaibhav", lname:"Parmar", city:"Rajkot"},
  ];
  return (
    <div className="App">
        <BrowserRouter>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
          <ul className='navbar-nav'>
              {
                students.map((students) => <li className='nav-item'>
                  <Link className='nav-link' to={"/students/"+students.roll+"/"+students.fname+"/"+students.lname+"/"+students.city}>{students.fname}
                  </Link></li> )
              }
          </ul>
        </nav>
            
            <Routes>
              <Route path='/students/:roll/:fname/:lname/:city'element={<Students></Students>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
