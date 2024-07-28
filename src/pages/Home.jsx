import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../syles/home.css'
import '../syles/App.css'
import Nav from '../pages/Nav';
import Footer from './footer';
import Gatito from './gatito';

//recordatorio agregar funcion alert para dar la bienvenida.\
//agregar footer , podria agregar redes sociales, boton de enviar sugerencias
//agregar un menu de comida dada por la fiesta
  
//
function Home() {
  useEffect(() => {
    alert('¡Bienvenido a PARTY TIME!');
  }, []);

  return (
    <>
      <div className='container login-container'>
        <Nav/>
         
        <div className='columns'>
          <Gatito/>
    <div className='column'>
        <div className="card home">
          <div className="card-content">
            <div className="content">
              Bienvenido a PARTY TIME !! te invitamos a registrarte y poder compartir tus fotos con los anfitriones !!,si deseas dejar alguna sugerencia puedes hacerlo en la seccion contacto 
            </div>
          </div>
        </div>
        </div>
        </div>
      <Footer/>
      </div>

    </>
  )
}

export default Home