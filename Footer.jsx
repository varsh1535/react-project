import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="socialMediaIcons">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
        <p className="footerText">© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;