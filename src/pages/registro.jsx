import { Routes, Route, Link } from 'react-router-dom';
import '../syles/registro.css'
function Registro() {
//funcion de registro de session cuando tengas los datos en el form los guarde en una db para se utilizadas cuando se necesiten
//alerte en caso de no completar los formularios correctamente

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
                  placeholder="Tu nombre"
                  className="form-control"
                />
              </div>
              <div className="form-group">
             
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tu correo electrónico"

                />

              </div>
              <div className="form-group">
              
                <input
                  type="password"
                  className="form-control"
                  placeholder="Tu contraseña"

                />

              </div>
              <div className="form-group">
          
                <input
                  type="text"
                  placeholder="Tu dirección"
                  className="form-control"

                />

              </div>
              <div className="form-group">
               
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tu teléfono"

                />

              </div>
              <div className="form-group">
                <input type="submit" className="btnSubmit" />
              </div>
            </form>
          </div>
          <div className="col-md-6 login-form-2">
            <div className="login-logo">
              {<Link to="/">
                <i className="fa-solid  fa-arrow-left"></i>
              </Link>}
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Registro