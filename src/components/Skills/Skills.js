import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import { FaCheckCircle, FaWrench, FaBook } from 'react-icons/fa';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);

useEffect(() => {
  const element = sectionRef.current; 
  if (!element) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setAnimationKey(prev => prev + 1); 
      } else {
        setIsVisible(false);
      }
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }
  );

  observer.observe(element);

  return () => {
    observer.unobserve(element); 
  };
}, []);


const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: "strong" },
      { name: "C#", level: "strong" },
      { name: "TypeScript", level: "strong" },
      { name: "Ruby", level: "strong" },
      { name: "Python", level: "working" }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", level: "strong" },
      { name: "CSS", level: "strong" },
      { name: "JavaScript", level: "strong" },
      { name: "Ruby on Rails", level: "strong" },
      { name: "Bootstrap", level: "strong" },
      { name: "Tailwind CSS", level: "strong" },
      { name: "React", level: "working" },
      { name: "Next.js", level: "working" },
      { name: "Node.js", level: "working" },
      { name: ".NET", level: "working" },
      { name: "AngularJS", level: "learning" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL", level: "strong" },
      { name: "MongoDB", level: "working" },
      { name: "PostgreSQL", level: "working" },
      { name: "SQLite", level: "working" },
      { name: "MySQL", level: "working" },
      { name: "Redis", level: "learning" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: "strong" },
      { name: "GitHub", level: "strong" },
      { name: "Jira", level: "strong" },
      { name: "Postman", level: "strong" },
      { name: "Bitbucket", level: "working" },
      { name: "Azure DevOps", level: "working" },
      { name: "Insomnia", level: "working" },
      { name: "Docker", level: "learning" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: "working" },
      { name: "Azure", level: "working" },
      { name: "Linux", level: "working" },
      { name: "CI/CD", level: "working" },
      { name: "Microservices", level: "working" },
    ]
  },
  {
    title: "Methodologies & APIs",
    skills: [
      { name: "Agile", level: "strong" },
      { name: "SCRUM", level: "strong" },
      { name: "RESTful APIs", level: "strong" },
      { name: "GraphQL", level: "working" }
    ]
  }
];



  const getProficiencyIcon = (level) => {
    switch (level) {
      case "strong":
        return <FaCheckCircle className="proficiency-icon crown" />;
      case "working":
        return <FaWrench className="proficiency-icon star" />;
      case "learning":
        return <FaBook className="proficiency-icon award" />;
      default:
        return <span className="proficiency-dot"></span>;
    }
  };

  return (
    <section id="skills" className={`skills ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <h2 className="section-title" key={animationKey}>
        <span className="title-text">Technical Skills</span>
        <div className="title-animation">
          <div className="anim-line line-horizontal line-top"></div>
          <div className="anim-line line-horizontal line-bottom"></div>
          <div className="anim-line line-vertical line-right"></div>
          <div className="anim-line line-vertical line-left"></div>
          <div className="l-corner corner-tl"></div>
          <div className="l-corner corner-tr"></div>
          <div className="l-corner corner-bl"></div>
          <div className="l-corner corner-br"></div>
        </div>
      </h2>
      
      <div className="skills-container">
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="animated-header">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={`skill-item ${skill.level}`}>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">
                      {getProficiencyIcon(skill.level)}
                      <span className="level-text">{skill.level}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;