import React from 'react';
import '../Styles/NavBar.css';
import logo from '../assets/Logo.png';
import { BsCart3 } from "react-icons/bs"
import { Link } from 'react-router-dom';

function NavBar({children}) {


  return (
    <>
        <div className='navBar'>
        <div className='logo'>
            <span><h1>Zippy</h1></span>
        </div>
        <ul className='navLinks'>
            <li className='HomeNav'>Home</li>
            <li className='MenuNav'>Menu</li>
            <li className='ContactNav'>Contact</li>
            <li className='AboutNav'>About Us</li>
        </ul>
        <div className='btns'>
          <button className='login-btn'>Login</button>
          <Link to="/signup"><button className='login-btn'>Sign Up</button></Link>
          <div className='cart-div'>
            <Link to="/cart" ><BsCart3 className='cart'/>
            <span className='count'>0</span></Link>
          </div>
          
        </div>
        </div>
        {children}
    </>
  );
}

export default NavBar;
