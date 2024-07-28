import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Registro from '../pages/registro';
import Login from '../pages/login';
import Footer from '../pages/footer';
import Vistaadm from '../pages/vistaadm';
import Vistalogin from '../pages/vistalogin';
import Nav from '../pages/Nav';
import Home from './Home';
import Gatito from './gatito';
// routes creadas para poder ver cualquier pagina
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/vistalogin" element={<Vistalogin />} />
      <Route path="/vistaadm" element={<Vistaadm />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/nav" element={<Nav />} />
      <Route path="/gatito" element={<Gatito />} />
    </Routes>
  );
}

export default App;
