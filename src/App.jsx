import { useState } from 'react'
import Navbar from "./companents/Navbar/Nav"
import Section from './companents/Section/Section'
import Errors from "./companents/404/Error"
import './App.css'
import { BrowserRouter , Routes , Route,   } from 'react-router-dom'
function App() {
  return (
    
  <>
    <BrowserRouter>
   
<Routes>
<Route path='/' element={<Navbar/>} />
<Route path='/error' element={<Errors/>} />

</Routes>
       
        </BrowserRouter>


  </>
  )
}

export default App
