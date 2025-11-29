import React from 'react';
import './Projects.css';
import cozypng from '../../assets/cozycoon.png';
import techlabs from '../../assets/TechLabs.png';
import officeLogo from '../../assets/officelogo.png';
import duckStudiosLogo from '../../assets/duckstudioslogo.webp';

const Projects = () => {
  const projects = [
    {
      title: 'Intern Software Engineer — OfficeSpace Software',
      description: 'Gained full-stack development experience using React and Ruby on Rails while contributing to the improvement of internal tools and features. Worked closely with developers to resolve tickets and ensure high-quality releases. Supported QA efforts as an SDET by validating code and writing RSpec tests that significantly reduced bugs and strengthened overall product stability.',
      technologies: ['React', 'Ruby on Rails', 'Redis', 'RSpec', 'graphQL'],
      image: officeLogo,
      githubLink: 'https://www.officespacesoftware.com/'
    },
    {
      title: 'Intern Software Engineer — Duck Studios',
      description: 'Contributed to multiple software initiatives, including chatbot enhancements, REST microservice integrations, and internal application improvements. Optimized frontend code and automated workflows to increase team efficiency. Supported infrastructure migration efforts and maintained WordPress sites to improve performance and user experience.',
      technologies: ['JavaScript', 'WordPress', 'REST APIs', 'Zapier'],
      image: duckStudiosLogo,
      githubLink: 'https://www.linkedin.com/company/duckstudios/'
    },
    {
      title: 'Cozy Coon Cabins',
      description: 'Hotel cabin rental platform, uniquely themed around raccoons. Users can browse available cabins, book stays, and leave reviews about their experiences. The app features an admin dashboard for managing cabins and tracking booking performance',
      technologies: ['Ruby on Rails', 'Javascript', 'Bootstrap','PostgreSQL'],
        image: cozypng,
      githubLink: 'https://github.com/macOS-M/cooncabinsProject'
    },
    {
      title: 'TechLabs',
      description: 'TechLabs is a multi-layered application designed to manage medical appointments, allowing users to browse available schedules, select healthcare providers, and book appointments efficiently.',
      technologies: ['C#', '.NET', 'Azure','Javascript','MySQL', 'PayPal API', 'Bootstrap'],
      image: techlabs,
      githubLink: 'https://github.com/macOS-M/TechLabs'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Experience & Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  {typeof project.image === 'string' ? (
                    (project.image.startsWith('/') || /\.(png|jpe?g|svg|webp)$/i.test(project.image)) ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <span>{project.image}</span>
                    )
                  ) : (
                    <img src={project.image} alt={project.title} />
                  )}
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