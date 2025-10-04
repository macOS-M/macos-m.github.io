import React from 'react';
import './FunFacts.css';
import DogJudging from '../../assets/dog-judging3.png';
import DogSilly from '../../assets/dog-silly.png';
import DogSurprise from '../../assets/dog-surprise.png';

const FunFacts = () => {
  return (
    
    <section className="fun-facts">
      <h2 className="section-title">Meet Pochi</h2>
      <div className="container">
        <div className="facts-grid">
          <div className="fact-card">
            <div className="fact-image">
              <img src={DogJudging} alt="My dog giving a judging look" />
            </div>
            <h3>My Code Reviewer</h3>
            <p>Pochi gives me this look every time I google "Ruby for loops"</p>
          </div>
          
          <div className="fact-card">
            <div className="fact-image">
              <img src={DogSilly} alt="My dog being silly" />
            </div>
            <h3>Break Time Expert</h3>
            <p>I've learned the importance of taking breaks, specially for belly rubs.</p>
          </div>
          
          <div className="fact-card">
            <div className="fact-image">
              <img src={DogSurprise} alt="My dog surprised" />
            </div>
            <h3>Bug Discovery</h3>
            <p>Pochi is always here to help me debug!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;