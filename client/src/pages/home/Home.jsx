import React, { useState, useEffect} from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";
import HomeNavbar from "../../components/homeNavbar/HomeNavbar";
import HomeHeader from "../../components/homeHeader/HomeHeader";
import HomeAbout from "../../components/homeAbout/HomeAbout";

const Home = () => {

const [scrollVisible, setScrollVisible] = useState(false);

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollVisible(scrollPosition > 0);
};

useEffect(() => {
   window.addEventListener("scroll", handleScroll);
   return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
}, []);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

    return(
        <div className="homeContainer">    
            <HomeNavbar />
            <HomeHeader />
            {scrollVisible && ( <button id="scroll-top-button" onClick={scrollToTop} className="scroll-top-button" type="button">
                    <FontAwesomeIcon className="arrowIcon" icon={faArrowUp}/></button> )}
            <div className="homeA">
                <HomeAbout />
            </div>
                                       
        </div>
    )
}


export default Home