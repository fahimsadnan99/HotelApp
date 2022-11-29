import React from 'react'
import {NavLink} from "react-router-dom"
import "./style.css"

const Navbar = () => {
  return (
    <div className='navbarWrapper'>
    <div className='container'>
    <nav className="navbar navbar-expand-md ">
 <NavLink className="navbar-brand brandName" to="/">EasyBook</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    <i class="fa fa-bars" aria-hidden="true"></i>
    </span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    
      <li className="nav-item">
       <NavLink className={(navInfo)=> (navInfo.isActive ? "activeNavbar nav-link" : "nav-link") }  to="/">Home</NavLink>
      </li>
     
      <li className="nav-item">
       <NavLink className={(navInfo)=> (navInfo.isActive ? "activeNavbar nav-link" : "nav-link") }  to="/room">Room</NavLink>
      </li>

      <li className="nav-item">
     <NavLink className={(navInfo)=> (navInfo.isActive ? "activeNavbar nav-link" : "nav-link") }  to="/dashboard">Dashboard</NavLink>
    </li>

    <li className="nav-item">
     <NavLink className={(navInfo)=> (navInfo.isActive ? "activeNavbar nav-link" : "nav-link") }  to="/signup">Signup</NavLink>
    </li>

    <li className="nav-item">
   <NavLink className={(navInfo)=> (navInfo.isActive ? "activeNavbar nav-link" : "nav-link") }  to="/signin">Signin</NavLink>
  </li>
    </ul>
  </div>
</nav>
    
    </div>
    
    </div>
  )
}

export default Navbar