import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        
      </div>
      <h1>Welcome to party</h1>
      <div classNameName="card">
        <button onClick={() => setCount((count) => count + 1)}>
        <Link to="/registros">Registro</Link>
        </button>
        
      </div>
      <p classNameName="read-the-docs">
        Personas Registrsssadas {count}
      </p>
      
    </>
  )
}

export default Home