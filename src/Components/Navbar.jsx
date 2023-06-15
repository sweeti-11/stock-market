import React from 'react'
import logo from '../assest/Chaylogoo.png'
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
            
         </img></NavLink> 
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
            <NavLink className="nav-link" to="/gallary">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link desk"  >Types of Tea</Link>
            <Link className="nav-link mob" to="" data-bs-toggle="dropdown">Types of Tea</Link>
            <div className="dropdown-menu bg-light rounded-0 m-0 text-dark">
                          
          
                        <Link to="/milktea" className="dropdown-item">Milk Tea Speical</Link>
                        <Link to="/delightmilktea" className="dropdown-item">Delight Of Milk Special</Link>
                        <Link to="/HerbalTeawithmilk" className="dropdown-item">Herbal Tea With Milk</Link>
                        <Link to="/HerbalTeawithoutmilk" className="dropdown-item">Herbal Tea Without Milk</Link>
                        <Link to="/hotcoffee" className="dropdown-item">Hot Coffee</Link>
                        <Link to="/coldcoffee" className="dropdown-item">Cold Coffee</Link> 
                        </div>
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
            <a className="nav-link" href="/gallary">Gallary</a>
          </li>
          <li className="nav-item">
            <a className="nav-link desk"  >Types of Tea</a>
            <a className="nav-link mob" href="" data-bs-toggle="dropdown">Types of Tea</a>
            <div className="dropdown-menu bg-light rounded-0 m-0 text-dark">
                          
          
                        <a href="/milktea" className="dropdown-item">Milk Tea Speical</a>
                        <a href="/delightmilktea" className="dropdown-item">Delight Of Milk Special</a>
                        <a href="/HerbalTeawithmilk" className="dropdown-item">Herbal Tea With Milk</a>
                        <a href="/HerbalTeawithoutmilk" className="dropdown-item">Herbal Tea Without Milk</a>
                        <a href="/hotcoffee" className="dropdown-item">Hot Coffee</a>
                        <a href="/coldcoffee" className="dropdown-item">Cold Coffee</a> 
                        </div>
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