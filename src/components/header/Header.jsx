import React from 'react'
import './header.css'
import header from '../../assets/header.png';

const Header = () => {
  return (
    <div className='header-logo'>
      <img src={header} alt="header-logo"/>
      
    </div>
  )
}

export default Header
