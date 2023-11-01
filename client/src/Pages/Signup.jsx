import React, { useState } from 'react'
import NavBar from '../Components/NavBar';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cPass, setcp] = useState('');
  return (
    <NavBar>
      <div className='signup-div'>
        <div className='form-div'>
            <div className='detail-div'>
                <h1>Sign Up</h1>
                <input type="text" placeholder='Enter name' value={name} onChange={e=> setName(e.target.value)}/>
                <input type="email" placeholder='Enter email' value={email} onChange={e=> setEmail(e.target.value)}/>
                <input type="password" placeholder='Enter password' value={pass} onChange={e=> setPass(e.target.value)}/>
                <input type="password" placeholder='Confirm password' value={cPass} onChange={e=> setcp(e.target.value)}/>
                <button>Sign Up</button>

            </div>
        </div>
      </div>
    </NavBar>
  )
}

export default Signup;
