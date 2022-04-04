import React from 'react'
import logo from '../assets/logo.svg'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='contenedor'>
      <img src={logo} alt="logo" />
      <div className='flex'>
        <p className='btnsNav'>Features</p>
        <p className='btnsNav'>Team</p>
        <p className='btnsNav'>Sign In</p>
      </div>
    </div>
  );
}

export default Navbar