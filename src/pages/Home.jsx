import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import '../syles/App.css'

function Home() {
  
  return (
    <>
      <div className=''>
        
        HOME
      </div>
      <Link to="/login"><button>LOGIN</button></Link>
      <Link to="/registro">REGISTRO</Link>
      
    </>
  )
}

export default Home