import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navbar'>
    <NavLink to={"/"} >signup</NavLink>
    <NavLink to={"/login"} >Login</NavLink>
    <NavLink to={"/dashboard"} >Home</NavLink>
    
    </div>
  )
}

export default Navbar