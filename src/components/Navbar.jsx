import { use, useEffect, useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { useLocation, useNavigate  } from 'react-router-dom';

import 'css/Navbar.css';
import 'css/Common.css';
import 'css/Contacts.css';

import Contacts from './Contacts';
import Backbutton from '../media/logos/back-arrow.svg';

function Navbar() {
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

    // Add Event Listener on Component Mount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollpos]);

    // Hide Navbar on Scroll Down
    function handleScroll() {
        const navbar = document.getElementById("navbar");
        let currentScrollPos = window.pageYOffset;
        navbar.style.transform = prevScrollpos > currentScrollPos ? "translateY(0%)" : "translateY(-100%)";
        setPrevScrollpos(currentScrollPos);
    }

    const navigate = useNavigate();

    return(
        <nav id="navbar">
            <div id="pc-menu" class="half-width">
                { useLocation().pathname !== "/Personal-Website" ?
                    <button onClick={() => navigate(-1)}>
                        <img src={ Backbutton } alt="Back Arrow" style={{ filter: "invert(1)" }} />
                    </button> 
                    :
                    <div id="logo"> @RasmusMEA </div>
                }
                
                <ul id="navigation">
                    <li><NavHashLink smooth to="#hero"> Home </NavHashLink></li>
                    <li><NavHashLink smooth to="#projects"> Projects </NavHashLink></li>
                    <li><NavHashLink smooth to="#updates"> Updates </NavHashLink></li>
                </ul>
                <Contacts DarkMode />
            </div>
            <div id="divider" />
        </nav>
    );
}

export default Navbar;
