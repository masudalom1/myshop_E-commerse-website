import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <div className="footer__links">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer__copyright">
          <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
