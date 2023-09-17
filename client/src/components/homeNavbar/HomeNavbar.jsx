import React, { useState, useEffect} from "react";
import "./homenavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

const HomeNavbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="homeNavbar">
            <div className="navbarItems">
                <div className="navbarTittle">
                    <h1 className="navLogo"><a href="/">AgroBIN</a></h1>
                </div>
                <ul className={`navList ${isMenuOpen ? "open" : ""}`}>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="#AcercaDe">Acerca de</a></li>
                    <li><a>Contacto</a></li>
                    <li><a>Iniciar sesión</a></li>
                </ul>
                <div className="navIcon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>
    )}

export default HomeNavbar