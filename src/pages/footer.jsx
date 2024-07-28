import React from 'react'
import '../syles/footer.css'
function Footer() {
  return (
    <footer className='foter'>
    <div className='foot-contenido'>
        <p className='texto1'>COPYRIGHT © 2022-2023 CHEFDEV Informática Todos los derechos reservados. </p>
    </div>
    <div className="foot-contacto">
        <a id="text-contact">CONTACT</a> <hr />
        <a id='text-contact'>FAQ</a><hr />
        <a id='text-contact'>PRIVACY</a><hr />
    </div>
    <div className='container foot-redes'>
        <i className="fa-brands fa-3x fa-instagram"></i>
        <i className="fa-brands fa-3x fa-facebook"></i>
        <i className="fa-brands fa-3x fa-twitter"></i>
    </div>
    <div className="noticias subscribe">
        <h3 id='titulo-noticia'>Newsletter</h3>
        <div>
            <input type="email" placeholder="Your email id here" />
            <button className="sub">Subscribe</button>
        </div>
    </div>
</footer>
  )
}

export default Footer