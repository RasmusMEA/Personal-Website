import { useEffect, useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './Navbar.css';
import '../common/Common.css';
import '../common/Contacts.css';

import Contacts from '../common/Contacts';

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

    return (
        <nav id="navbar">
            <div id="pc-menu" class="half-width">
                <a id="logo" href="#"> @RasmusMEA </a>
                <ul id="navigation">
                    <li><NavHashLink smooth to="/#hero"> Home </NavHashLink></li>
                    <li><NavHashLink smooth to="/#projects"> Projects </NavHashLink></li>
                    <li><NavHashLink smooth to="/#updates"> Updates </NavHashLink></li>
                </ul>
                <Contacts DarkMode />
            </div>
            <div id="divider" />
        </nav>
    );
}

export default Navbar;
