import React from "react";
import "./homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import logo from '../../logoSOL.png';

const Homepage = () => {
    return(
        <div>
            <div className="homeContainer">
             
                <div className="homeNavbar">
                    <div className="navbarItems">
                        <div className="logoTittle">
                        <img src={logo} className="sol" />
                        <h1 className="homeLogo"><a href="/">AgroBIN</a></h1>
                        </div>
                        <ul className="homeList">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Log In</a></li>
                        </ul>
                        <div className="homeIcon"><FontAwesomeIcon icon={faBars}/></div>
                    </div>
                </div>

                <div className="homeContent">
                    <div className="contentText">

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Homepage