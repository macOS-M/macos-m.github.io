import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['Tech1', 'Tech2', 'Tech3'],
      image: 'project1',
      githubLink: '#'
    },
    {
      title: 'Project 2',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['Tech1', 'Tech2', 'Tech3'],
      image: 'project2',
      githubLink: '#'
    },
    {
      title: 'Project 3',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem',
      technologies: ['Tech1', 'Tech2', 'Tech3'],
      image: 'project3',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.image}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.githubLink} className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;