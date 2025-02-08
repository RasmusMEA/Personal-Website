import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [mobileMenuVisible, setMobileMenu] = useState(false);

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

    // Mobile Menu Toggle
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById("mobile-menu");
        setMobileMenu(!mobileMenuVisible);
        mobileMenu.classList.toggle("hidden");
    }

    return (
        // Navbar
        <nav id="navbar" class="fixed w-full bg-white/80 backdrop-blur-md shadow-md transition-transform duration-300 transform-gpu z-50">
            <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">@RasmusMEA</a>

                {/* Navigation Links */}
                <ul class="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li><a href="#" class="hover:text-blue-500 transition-colors">Home</a></li>
                    <li><a href="#" class="hover:text-blue-500 transition-colors">Projects</a></li>
                    <li><a href="#" class="hover:text-blue-500 transition-colors">Contact</a></li>
                    <li><a href="#" class="hover:text-blue-500 transition-colors">CV</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button id="menu-btn" class="md:hidden flex items-center text-gray-700" onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" class="hidden bg-white shadow-md transition-all duration-300">
                <ul class="space-y-4 p-4 text-gray-700 font-medium">
                    <li><a href="#" class="block hover:text-blue-500 transition-colors">Home</a></li>
                    <li><a href="#" class="block hover:text-blue-500 transition-colors">Projects</a></li>
                    <li><a href="#" class="block hover:text-blue-500 transition-colors">Contact</a></li>
                    <li><a href="#" class="block hover:text-blue-500 transition-colors">CV</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
