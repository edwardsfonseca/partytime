import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './Home';
import Registros from './registros';

const App = () => {
  return (
    <div>
      <nav className='navhome'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registros" element={<Registros/>} />
        
      </Routes>
    </div>
  );
};

export default App;