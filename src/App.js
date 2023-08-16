import './App.css';


import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import {Routes,BrowserRouter as Router,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Ecart from './Components/Ecart';
import AddItem from './Components/Additem';

function App() {
  return (
        <div style={{backgroundClip:"gray"}}>
    <Router>
    <Navbar/>
      <Routes>
        <Route  path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Home/>}/>
        <Route path='/ecart' element={<Ecart/>}/>
        <Route path='/additem' element={<AddItem/>}/>
      </Routes>
    </Router>
        </div>
  );
}

export default App;
