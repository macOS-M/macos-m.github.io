import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>macOS-M</h3>
          </div>

          <div className="footer-social-row">
            <div className="footer-social">
              <a href="https://github.com/macOS-M" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/marcosmoralesc" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;