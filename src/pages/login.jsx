import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
function Login() {
    return (
        <div className="container login-container">
            <div className="row login-row login">
                <div className="col-md-6 login-form-1" id="form1">
                    <img className="logoproyecto" src="/../../logoproyecto.jpg"></img>
                    <h3>Inicia sesión</h3>

                    <form className="form-group">
                        <input
                            id="user"
                            type="text"
                            className="form-control"
                            placeholder="Tu correo electrónico *"

                        />
                        <div className="form-group">
                            <input
                                id="pass"
                                type="password"
                                className="form-control"
                                placeholder="Tu contraseña *"
                            />
                        </div>
                        <div className="form-group">
                            <input

                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                            <Link to="/registro">
                                <input type="submit" className="btnSubmit" value="Regístrate" />
                            </Link>
                            {alert && (
                                <div className="alert alert-danger" id="alertSI" role="alert">
                                    Completa datos
                                </div>
                            )}
                        </div>
                    </form>

                    <div>
                    </div>
                </div>
                <div className="col-md-6 login-form-2">
                    <div className="login-logo">
                        <Link to="/">
                            <i className="fa-solid  fa-house icon-house"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login