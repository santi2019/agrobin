import React, { useState, useEffect} from "react";
import "./homeabout.css";

const homeAbout = () => {
return(

    <div className="homeAbout" id="AcercaDe">
        <div className="aboutFirst">
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

        <div className="aboutSecond" >
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

)}

export default homeAbout