import React from 'react';
import NavBar from '../Components/NavBar';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import Contact from '../Pages/Contact';
import Aboutus from '../Pages/Aboutus';
import Footer from '../Components/Footer';


function WebLayout() {
  return (
    <NavBar>
      <Home/>
      <Menu/>
      <Contact/>
      <Aboutus/>
      <Footer/>
    </NavBar>
  )
}

export default WebLayout
