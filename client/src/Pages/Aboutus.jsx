import React, { useRef } from 'react'
import "../Styles/Aboutus.css"
import {BsLinkedin} from 'react-icons/bs';
function Aboutus() {


  return (
    <div className='aboutPage'>
      <h1>About us</h1>
      <h3>We are Student of PSIT</h3>
      <div className='card'>
        <div className='image-div'>
          <img src="" alt="" />
        </div>
        <div className='info'>
          <h3 className='name'></h3>
          <p className='rollno'></p>
          <a className='linkedin' href=""><BsLinkedin/></a>
        </div>
      </div>
      <p className='problem-statement'></p>
    </div>
  )
}

export default Aboutus
