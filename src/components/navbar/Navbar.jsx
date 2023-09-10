import React from 'react'
import './navbar.css'
import logoIcon from '../../assets/logo.png'; 
import logo from '../../assets/SkinClinic.png';
import profile from '../../assets/profile.png';
import search from '../../assets/search.png';
import like from '../../assets/like.png';
import cart from '../../assets/cart.png';


const Navbar = () => {
  return (
      <nav className="nav-bar">
      <div className="navbar-links">
      <div className="logo">
        <img src={logoIcon} alt="logo" className="logo-icon" />
        <img src={logo} alt="logo" className="logo-" />
        </div>


      <div className="navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#Shop">Shop</a></p>
          <p><a href="#About">About</a></p>
          <p><a href="#Contact">Contact</a></p>
        </div>

        <div className='navbar-icons'>
        <img src={profile} alt="logo" />
        <img src={search} alt="logo" />
        <img src={like} alt="logo" />
        <img src={cart} alt="logo"  />
        </div>

        </div>  
     </nav>
      
      
   
  )
}

export default Navbar
