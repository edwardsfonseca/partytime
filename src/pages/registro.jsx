import React, { useState } from 'react';
 // Asegúrate de que la acción esté correctamente definida
import { Link } from 'react-router-dom';
import '../syles/registro.css';

function Registro() {
 



  return (
    <>
      <div className="container login-container">
        <div className="row login-row">
          <div className="col-md-6 login-form-1">
            <h3 className='rgh3'>Registro</h3>
            <form >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  className="form-control"                
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Tu correo electrónico"
                
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Tu contraseña"
                  
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="address"
                  placeholder="Tu dirección"
                  className="form-control"
                
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Tu teléfono"               
                />
              </div>
              <div className="form-group">
                <input type="submit" className="btnSubmit" value="Registrarse" />
              </div>
            </form>          
          </div>
          <div className="col-md-6 login-form-2">
            <div className="login-logo">
              <Link to="/">
                <i className="fa-solid fa-x"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registro;
