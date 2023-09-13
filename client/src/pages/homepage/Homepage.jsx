import React from "react";
import "./homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import HomeAbout from "../../components/homeAbout/HomeAbout";


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
                            <li><a href="#AcercaDe">Acerca de</a></li>
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
                                <h3>Portabilidad, Productividad y Automatización</h3>
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

                <div className="homeAbout" id="AcercaDe">
                    <div className="hText">
                        <div className="content">
                            <h2>¿ Qué es AgroBIN ?</h2>
                            <p>Nuestras 42 habitaciones son amplias y cómodas. Todas, incluyen calefacción y aire acondicionado, televisión y 
                            wi-fi gratis. El hotel cuenta con planta baja, primer piso y segundo piso. Las habitaciones estan distribuidas en 
                            cada una de las zonas del hotel. Si bien solo existe una sola categoria de habitaciones, nuestra nueva pagina permite
                            a los clientes optar por una habitacion en los interiores del hotel o una con vista a la calle. Hablando un poco de
                            capacidad de las habitaciones, el hotel cuenta con habitaciones dobles, con una cama matrimonial o dos camas individuales,
                            tambien posee habitaciones triples, con una cama matrimonial y una cama individual, o tres camas individuales, y por ultimo
                            tenemos habitaciones cuadruples, con una cama matrimonial y dos camas individuales, o cuatro camas individuales. La estadia
                            cuenta con servicio de mucama y conserjeria las 24 horas. Tu comodidad es nuestra máxima prioridad. </p>
                        </div>
                    </div>
                    <div className="hImg">
                            <img src="images/habSingle.jpg" alt="" className="image"/>
                    </div>
                </div>

                <div className="homeAbout2" >
                    <div className="hImg2">
                            <img src="images/habSingle.jpg" alt="" className="image2"/>
                    </div>
                    <div className="hText2">
                        <div className="content2">
                            <h2>¿ Qué es AgroBIN ?</h2>
                            <p>Nuestras 42 habitaciones son amplias y cómodas. Todas, incluyen calefacción y aire acondicionado, televisión y 
                            wi-fi gratis. El hotel cuenta con planta baja, primer piso y segundo piso. Las habitaciones estan distribuidas en 
                            cada una de las zonas del hotel. Si bien solo existe una sola categoria de habitaciones, nuestra nueva pagina permite
                            a los clientes optar por una habitacion en los interiores del hotel o una con vista a la calle. Hablando un poco de
                            capacidad de las habitaciones, el hotel cuenta con habitaciones dobles, con una cama matrimonial o dos camas individuales,
                            tambien posee habitaciones triples, con una cama matrimonial y una cama individual, o tres camas individuales, y por ultimo
                            tenemos habitaciones cuadruples, con una cama matrimonial y dos camas individuales, o cuatro camas individuales. La estadia
                            cuenta con servicio de mucama y conserjeria las 24 horas. Tu comodidad es nuestra máxima prioridad. </p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Homepage