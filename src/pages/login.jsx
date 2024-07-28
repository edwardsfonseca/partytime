import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
//funcion login te lleve a vista login 
//alert en que caso de que el usuario no existe o este mal escrito

function Login() {
    return (
        <div className="container login-container">
            <div className="row login-row login">
                <div className="col-md-6 login-form-1" id="form1">
                    
                    <h3>Inicia sesión</h3>

                    <form className="loginf form-group">
                        <input
                            id="user"
                            type="text"
                            className="form-control"
                            placeholder="Tu correo electrónico *"

                        />
                        <div className="loginf form-group">
                            <input
                                id="pass"
                                type="password"
                                className="form-control"
                                placeholder="Tu contraseña *"
                            />
                        </div>
                        <div className="loginf form-group">
                            <input

                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                            <Link to="/registro">
                                <input type="submit" className="btnSubmit" value="Regístrate" />
                            </Link>
                            
                        </div>
                    </form>

                    <div>
                    </div>
                </div>
                <div className="col-md-6 login-form-2">
                    <div className="login-logo">
                        <Link to="/">
                            <i className="fa-solid  fa-arrow-left"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login