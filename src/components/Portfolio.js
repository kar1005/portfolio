import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, User, BookOpen, Award, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';
import './Portfolio.css';
import Photo from './../images/Photo.jpeg'

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'HTML/CSS',
    'MongoDB', 'Express.js', 'Git', 'SQL', 'REST APIs', 'Firebase'
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/kar1005',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Responsive task management application with drag-and-drop functionality, real-time updates, and collaborative features.',
      tech: ['React', 'Firebase', 'CSS3', 'JavaScript'],
      github: 'https://github.com/kar1005',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and beautiful UI animations.',
      tech: ['JavaScript', 'API Integration', 'CSS3', 'HTML5'],
      github: 'https://github.com/kar1005',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations and dark theme.',
      tech: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/kar1005',
      live: '#'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="stars-bg">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-image">
              <div className="profile-inner">
                <img src={Photo} className='circular-img' width={150} height={150}/>
              </div>
            </div>
            <h1 className="hero-title">
              Hi, I'm Khushi Ruparelia
            </h1>
            <p className="hero-subtitle">
              Passionate Software Engineer developing innovative solutions. Dedicated to continuous learning and growth.
            </p>
            <div className="social-links">
              <a
                href="https://github.com/kar1005"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:khushiruparelia2004@gmail.com"
                className="social-link"
              >
                <Mail size={24} />
              </a>
              <a
                href="#"
                className="social-link"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection('about')}
              className="cta-button"
            >
              Explore My Work
            </button>
          </div>
          <div className="scroll-indicator">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <div className="about-img-container">
                <div className="about-img-inner">
                  <Code size={80} />
                </div>
              </div>
            </div>
            <div className="about-text">
              <p className="about-paragraph">
                I'm a passionate software engineer with a love for creating innovative solutions that make a difference. 
                My journey in technology started with curiosity and has evolved into a dedicated pursuit of excellence 
                in software development.
              </p>
              <p className="about-paragraph">
                I specialize in full-stack development, with expertise in modern web technologies like React, Node.js, 
                and various databases. I'm always eager to learn new technologies and take on challenging projects 
                that push the boundaries of what's possible.
              </p>
              <p className="about-paragraph">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or planning my next creative venture. I believe in continuous learning and growth, both personally 
                and professionally.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Problems Solved</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Built</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="skill-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon">
                  <Code size={24} />
                </div>
                <h3 className="skill-name">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card"
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="project-link"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Let's Connect</h2>
            <p className="contact-subtitle">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>
            
            <div className="contact-grid">
              <div className="contact-card">
                <Mail size={32} />
                <h3>Email</h3>
                <a href="mailto:khushiruparelia2004@gmail.com">
                  khushiruparelia2004@gmail.com
                </a>
              </div>
              
              <div className="contact-card">
                <Github size={32} />
                <h3>GitHub</h3>
                <a 
                  href="https://github.com/kar1005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @kar1005
                </a>
              </div>
              
              <div className="contact-card">
                <Linkedin size={32} />
                <h3>LinkedIn</h3>
                <a href="#">
                  Connect with me
                </a>
              </div>
            </div>
            
            <button
              onClick={() => window.location.href = 'mailto:khushiruparelia2004@gmail.com'}
              className="contact-button"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Khushi. Built with React and lots of ☕</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;