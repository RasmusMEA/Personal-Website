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
        <>
            <nav id="navbar">
                <div id="pc-menu" class="half-width">
                    <NavHashLink id="logo" to="/Personal-Website"> @RasmusMEA </NavHashLink>
                    <ul id="navigation">
                        <li><NavHashLink smooth to="/Personal-Website#hero"> Home </NavHashLink></li>
                        <li><NavHashLink smooth to="/Personal-Website#projects"> Projects </NavHashLink></li>
                        <li><NavHashLink smooth to="/Personal-Website#updates"> Updates </NavHashLink></li>
                    </ul>
                    <Contacts DarkMode />
                </div>
                <div id="divider" />
            </nav>

            {/* Filer div to prevent content from being hidden behind the navbar */}
            <div id="navbar-filler" />
        </>
    );
}

export default Navbar;
