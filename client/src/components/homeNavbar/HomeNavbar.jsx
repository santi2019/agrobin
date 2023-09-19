import React, { Component } from "react";
import "./homenavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

class HomeNavbar extends Component{

    state = {clicked: false};

    handleClick = () =>{
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render(){
        return (
            <div className="homeNavbar">
                <div className="navbarItems">
                    <div className="navbarTittle">
                        <h1 className="navLogo"><a href="/">AgroBIN</a></h1>
                    </div>
                    <ul id="navList" className={this.state.clicked ? "#navList active" : "#navList"}>
                        <li><i class="fa-solid fa-house"></i><a href="/">Inicio</a></li>
                        <li><i class="fa-solid fa-circle-info"></i><a href="#AcercaDe">Acerca de</a></li>
                        <li><i class="fa-solid fa-id-badge"></i><a>Contacto</a></li>
                        <li><i class="fa-solid fa-right-to-bracket"></i><a>Iniciar sesión</a></li>
                    </ul>
                    <div id="navIcon" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? "fas fa-xmark" : "fas fa-bars" }></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeNavbar








