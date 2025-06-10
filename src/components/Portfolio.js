import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, User, BookOpen, Award, ExternalLink, Menu, X, ChevronDown, GraduationCap, Calendar } from 'lucide-react';
import './Portfolio.css';
import Photo from './../images/Photo.jpeg'
import Lottie from "lottie-react";
import developerAnim from "../assets/developer.json"; // adjust path if needed
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGit, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiDjango, SiJavascript, SiMysql } from 'react-icons/si';
import { FaBrain } from 'react-icons/fa'; // Best alternative for Machine Learning



const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    document.title = "Khushi Ruparelia";
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
const skills = [
  { name: 'Spring Boot', icon: <SiSpringboot size={30} /> },
  { name: 'React', icon: <FaReact size={30} color="#61DBFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={30} color="#68A063" /> },
  { name: 'Python', icon: <FaPython size={30} color="#3572A5" /> },
  { name: 'Java', icon: <FaJava size={30} /> },
  { name: 'Machine Learning', icon: <FaBrain size={30} color="#FF6B81" /> },
  { name: 'MongoDB', icon: <SiMongodb size={30} color="#4DB33D" /> },
  { name: 'Django', icon: <SiDjango size={30} color="#092E20" /> },
  { name: 'Git', icon: <FaGit size={30} color="#F1502F" /> },
  { name: 'SQL', icon: <SiMysql size={30} color="#00758F" /> },
  { name: 'JavaScript', icon: <SiJavascript size={30} color="#F0DB4F" /> },
  { name: 'Docker', icon: <FaDocker size={30} color="#0db7ed" /> }
];

  const education = [
    {
      institution: 'Dharmsinh Desai University',
      degree: 'Bachelor of Technology - BTech, Computer Engineering',
      duration: 'Sep 2023 - May 2026',
      grade: '8.62 CGPA',
      logo: '🎓'
    },
    {
      institution: 'Gujarat Technological University (Kalyan Polytechnic, Jamnagar)',
      degree: 'Diploma, Computer Engineering',
      duration: 'Jun 2020 - Aug 2023',
      grade: '10 CGPA',
      logo: '🏛️'
    },
    {
      institution: 'St Ann\'s High School',
      degree: 'Upto 10th',
      duration: 'Completed 2020',
      grade: '89%(99.53 Percentile)',
      logo: '🏫'
    }
  ];

  const projects = [
    {
      title: 'MovieBuff',
      description: 'MovieBuff is a comprehensive web-based movie ticket booking platform designed to modernize and streamline the cinema-going experience. The system serves as a bridge between moviegoers, theater operators, and cinema administrators, providing an integrated solution for movie ticket booking and theater management.',
      tech: ['React', 'Spring Boot', 'MongoDB', 'Cloudionary'],
      github: 'https://github.com/kar1005/MovieBuff',
      live: 'https://moviebuff-lac.vercel.app'
    },
    {
      title: 'CodeMateAI',
      description: 'CodeMate AI is a powerful web application that leverages AI to analyze GitHub repositories and generate comprehensive code insights, summaries, and software architecture diagrams. Built with a modern tech stack featuring Express.js backend, FastAPI for AI integration, and React frontend, CodeMate AI helps developers understand codebases faster and better visualize software architecture.',
      tech: ['React', 'Express.js', 'MongoDB', 'Flask'],
      github: 'https://github.com/kar1005',
      live: '#'
    },
    {
      title: 'GourmetBite',
      description: 'GourmetBite is a versatile web application designed to streamline restaurant operations and enhance customer satisfaction.It offers intuitive interfaces for customers to browse menus, place orders, book tables, and manage payments effortlessly.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/kar1005/GourmetBite',
      live: ''
    },
    {
      title: 'Movie Recommender System',
      description: 'Machine learning-based movie recommendation engine using TMDB dataset with interactive user interface using Streamlit',
      tech: ['Streamlit', 'Machine Learning', 'Python'],
      github: 'https://github.com/kar1005/movie-recommender-system',
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
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              {/* Khushi Ruparelia */}
            </div>
            
            {/* Desktop Menu */}
            <div className="nav-menu desktop-menu">
              {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="mobile-nav-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

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
                href="https://www.linkedin.com/in/khushi-ruparelia-10m/"
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
                  <Lottie animationData={developerAnim} loop={true} />
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

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-icon">
                  <GraduationCap size={24} />
                </div>
                <div className="education-content">
                  <div className="education-header">
                    <div className="education-logo">{edu.logo}</div>
                    <div className="education-info">
                      <h3 className="education-institution">{edu.institution}</h3>
                      <h4 className="education-degree">{edu.degree}</h4>
                      <div className="education-duration">
                        <Calendar size={16} />
                        <span>{edu.duration}</span>
                      </div>
                      {edu.grade && (
                        <div className="education-grade">
                          <Award size={16} />
                          <span>Grade: {edu.grade}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* {edu.skills.length > 0 && (
                    <div className="education-skills">
                      <h5 className="skills-title">Skills:</h5>
                      <div className="skills-tags">
                        {edu.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h3 className="skill-name">{skill.name}</h3>
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
                <a href="https://www.linkedin.com/in/khushi-ruparelia-10m/">
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