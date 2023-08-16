import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navbar justify-content-around bg-info '>
    <NavLink className="nav-item" to={"/"} >signup</NavLink>
    <NavLink className="nav-item" to={"/login"} >Login</NavLink>
    <NavLink className="nav-item" to={"/dashboard"} >Home</NavLink>
    <NavLink className="nav-item" to={"/ecart"} >Ecart</NavLink>
    <NavLink className="nav-item" to={"/additem"} >Additem</NavLink>
    
    </div>
  )
}

export default Navbar