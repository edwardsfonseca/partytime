import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../syles/nav.css'
function Nav() {

    return (
        <nav className="navbar " id="navbar">
            <div className="container coco d-flex justify-content-center">
                <div className="fle">
                    <Link to="/">
                        <button type="button" className="btn coc ">HOME</button>
                    </Link>
                    <Link to="/album">
                        <button type="button" className="btn coc ">ALBUM</button>
                    </Link>
                    <Link to="/menu">
                        <button type="button" className="btn coc ">MENU</button>
                    </Link>
                    <Link to="/contacto">
                        <button type="button" className="btn coc ">CONTACTO</button>
                    </Link>
                    
                </div>
                <hr className="v-line"/>
            </div>
            <div className="loginicn" id="iconos">
					<Link to="/login">
				<i className="fa-solid fa-user" id="loginicon"></i>
				</Link>
				
				</div>
        </nav>
    );

}
export default Nav