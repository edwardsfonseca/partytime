import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../syles/home.css'
import '../syles/App.css'
import Nav from '../pages/Nav';
import Swal from 'sweetalert2'
import Footer from './footer';
import Gatito from './gatito';

//recordatorio agregar funcion alert para dar la bienvenida.\
//agregar footer , podria agregar redes sociales, boton de enviar sugerencias
//agregar un menu de comida dada por la fiesta
  
//
function Home() {
  useEffect(() => {
    Swal.fire({
      title: "Bienvenidos a la diversion !!.",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(1,123,126,0.4)
        url(https://i.pinimg.com/originals/e1/f2/3d/e1f23dfb401e68caf9e0d81e469a2b46.gif)
        top right
        no-repeat
      `
    });
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