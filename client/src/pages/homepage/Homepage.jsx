import React from "react";
import "./homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import logo from '../../logoSOL.png';


//<img src={logo} className="sol" />

const Homepage = () => {
    return(
        <div>
            <div className="homeContainer">
                <div className="homeNavbar">
                    <div className="navbarItems">
                        <div className="logoTittle">
                            <h1 className="homeLogo"><a href="/">AgroBIN</a></h1>
                        </div>
                        <ul className="homeList">
                            <li><a href="/">Inicio</a></li>
                            <li><a>Acerca de</a></li>
                            <li><a>Contacto</a></li>
                            <li><a>Iniciar sesión</a></li>
                        </ul>
                        <div className="homeIcon"><FontAwesomeIcon icon={faBars}/></div>
                    </div>
                </div>

                <div className="homeContent">
                    <div className="homeItems">
                        <div className="contentText">
                            <div className="texts">
                                <h1>Todas las operaciones en un único entorno digital</h1>
                                <h2>Sistema de gestión agricola</h2>
                                <h3>Portabilidad, Productividad & Automatización</h3>
                                <button className="comenzarButton"><span>Comenzar</span></button>
                            </div>
                        </div>
                        <div className="contentImg">
                            <div className="Imgbox">
                                <img src="logoSOL.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homepage