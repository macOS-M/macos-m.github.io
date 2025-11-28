import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Logo from '../../assets/logo.png';   


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Marcos</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-description">
            I design and test high-quality web applications — SDET & full-stack developer with 2+ years experience. See my CV for full details.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            <a href="public/MmoralesCV0.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" download>
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="logo-container">
            <img src={Logo} alt="Raccoon Logo - Software Engineer" className="logo-image" />
            <div className="logo-glow"></div>
            <div className="image-badge">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      


      <div className="social-links">
        <a href="https://github.com/macos-M" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/marcosmoralesc" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <button type="button" className="social-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Open contact form">
          <FaEnvelope />
        </button>
      </div>
      
    </section>
  );
};

export default Hero;