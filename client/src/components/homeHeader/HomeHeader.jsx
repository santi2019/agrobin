import React, { useState, useEffect} from "react";
import "./homeheader.css";

const HomeHeader = () => {
return(

    <div className="homeHeader">
        <div className="headerItems">
                <div className="texts">
                    <h1>Todas las operaciones en un único entorno digital</h1>
                    <h2>Sistema de gestión agricola</h2>
                    <h3>Portabilidad, Productividad y Automatización</h3>
                    <button className="startButton"><span>Comenzar</span></button>
                </div>
            <div className="headerImg">
                <img src="logoSOL.png" alt="" />
            </div>
        </div>
    </div>

    )
}

export default HomeHeader