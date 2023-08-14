import './App.css';
import logo from './logo.svg';


import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import {Routes,BrowserRouter as Router,Route} from "react-router-dom"
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route  path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
