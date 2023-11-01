import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import WebLayout from './Layout/WebLayout'
import ItemDetails from './Pages/ItemDetails'
import CartItems from './Pages/cartItems'
import Signup from './Pages/Signup'

function App() {
  return (
    <Routes>
      <Route path='/' element={<WebLayout/>}/>
      <Route path='/detail/:id' element={<ItemDetails/>}/>
      <Route path='/cart' element={<CartItems/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default App
