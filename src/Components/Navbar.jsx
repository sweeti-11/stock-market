import React from 'react'
import logo from '../assest/virtual_trading.png'
import './Navbar.css' 
import { NavLink,Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>

{/* Desktop:------ */}
<>
    <nav className="navbar navbar-expand-lg bg-light sticked fixed-top  desktop" style={{marginBottom:'50px'}}>
    <div className="container-fluid">
      <NavLink className="nav-link " aria-current="page" to="/" >
      <img 
       src={logo} className='img-fluid'  alt="Logo"
       style={{width
       :"100px"}}
         >
            
         </img>
         </NavLink> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/aboutus">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/service">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/platform">Platform</NavLink>
          </li>
         <li className="nav-item">
            <NavLink className="nav-link" to="/contactus">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>


    {/* mobile:-- */}

    <nav className="navbar navbar-expand-lg bg-light sticked fixed-top mobile" style={{marginBottom:'50px'}}>
    <div className="container-fluid">
      <a className="nav-link " aria-current="page" href="/" >
      <img 
       src={logo} className='img-fluid'  alt="Logo"
       style={{width
       :"100px"}}
         >
            
         </img></a> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/aboutus">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/service">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/platform">Platform</a>
          </li>
         <li className="nav-item">
            <a className="nav-link" href="/contactus">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar