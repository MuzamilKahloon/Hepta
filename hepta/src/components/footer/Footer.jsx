import React, { useState } from 'react'; // Import useState
import '../footer/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#help">Help</a></li>
            <li><a href="#rooms">Rooms</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#location">Our Location</a></li>
            <li><a href="#hosts">The Hosts</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#restaurant">Restaurant</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 >Contact Info</h3>
          <p className='head'>Address:</p>
          <p>98 West 21th Street, Suite 721</p>
          <p>New York NY 10016</p>
          <p className='cnt'>Phone: </p>
          <span>(+1) 435 3533</span>
          <p className='cnt'>Email: </p>
          <span>info@yourdomain.com</span>
        </div>

        <div className="footer-section add">
          <h3>Subscribe</h3>
          <p>Sign up for our newsletter</p>
          <div className="input-container">
            <FaTelegramPlane  className="icon" />
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Your email ..."
              className={`input ${value ? 'filled' : ''}`} // Add a class if input is filled
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2024 All rights reserved | This template is made with <span role="img" aria-label="heart">❤️</span> by Colorlib
        </p>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
