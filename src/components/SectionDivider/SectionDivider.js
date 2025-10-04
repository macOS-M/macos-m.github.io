import React from 'react';
import './SectionDivider.css';
import DogWalking from '../../assets/dog-sand.png'; 

const SectionDivider = () => {
  const scrollToHero = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="section-divider">
      <div className="divider-image" onClick={scrollToHero}>
        <img src={DogWalking} alt="My dog walking" />
        <div className="text-bubble">
          <span>Go up! 🐾</span>
          <div className="bubble-arrow"></div>
        </div>
      </div>
      <div className="divider-line"></div>
    </div>
  );
};

export default SectionDivider;