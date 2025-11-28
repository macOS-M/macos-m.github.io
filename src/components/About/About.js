import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
              <h2 className="section-title">About Me</h2>
      <div className="container">

        
        <div className="about-content">
          <div className="about-text">
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>100+</h3>
                <p>Dog walks completed</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <span>About Me Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;