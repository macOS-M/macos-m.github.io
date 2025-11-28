import React from 'react';
import './About.css';
import profile from '../../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="about">
              <h2 className="section-title">About Me</h2>
      <div className="container">

        
        <div className="about-content">
          <div className="about-text">
            <p>
              Software Engineer with experience as an SDET and QA Engineer, specializing in test automation, full-stack development, and systems optimization.
            </p>
            <p>
              When I’m not coding, I’m usually outdoors spending time with my dog on long walks. I’m also an avid gamer and skateboarder, two hobbies that taught me persistence and iterative problem solving. Whether it’s landing a trick or beating a tough level, I approach challenges by trying different angles until something works, a mindset I bring into debugging and improving software every day.
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
              <img src={profile} alt="Marcos Morales - Software Engineer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;