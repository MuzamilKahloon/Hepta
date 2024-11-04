// Navbar.js
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx'; 
import { Link } from 'react-router-dom'; 
import '../navbar/Navbar.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = () => {
        setIsOpen(false); 
    };

    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <h1>Hepta</h1>
                </div>
                <div className="toggle-button" onClick={toggleMenu}>
                    {isOpen ? (
                        <span className="close"><RxCross2 /></span>
                    ) : (
                        <span className="menu-icon"><GiHamburgerMenu /></span>
                    )}
                </div>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to="/hostels" onClick={handleLinkClick}>Hostels</Link></li>
                        <li><Link to="/aboutus" onClick={handleLinkClick}>About Us</Link></li>
                        <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
                        <li><Link to="/news" onClick={handleLinkClick}>News</Link></li>
                        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
