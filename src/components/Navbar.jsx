import { useEffect, useState } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';

import '../css/Navbar.css';
import '../css/Common.css';
import '../css/Contacts.css';

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
            <div id="pc-menu" className="half-width">
                { useLocation().pathname !== "/" ?
                    <button id="back-btn" onClick={() => navigate(-1)}>
                        <img src={ Backbutton } alt="Back Arrow" style={{ filter: "invert(1)" }} />
                    </button> 
                    :
                    <div id="logo"> @RasmusMEA </div>
                }
                
                <ul id="navigation">
                    <li><button id="home-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Home </button></li>
                    { document.getElementById("projects") &&
                        <li><button id="projects-btn" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}> Projects </button></li>
                    }
                    { document.getElementById("updates") &&
                        <li><button id="updates-btn" onClick={() => document.getElementById("updates").scrollIntoView({ behavior: "smooth" })}> Updates </button></li>
                    }
                </ul>
                <Contacts DarkMode />
            </div>
            <div id="divider" />
        </nav>
    );
}

export default Navbar;
