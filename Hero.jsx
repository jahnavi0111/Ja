import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div 
          className="hero-shape hero-shape-1"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div 
          className="hero-shape hero-shape-2"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        ></div>
        <div className="hero-gradient"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Projects
          </div>
          
          <h1 className="hero-title">
            Crafting Digital
            <br />
            <span className="hero-title-highlight">Experiences</span>
            <br />
            That Matter
          </h1>
          
          <p className="hero-description">
            I'm a creative designer and developer passionate about building 
            beautiful, functional, and user-centered digital experiences that 
            leave a lasting impact.
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('#portfolio')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('#contact')}
            >
              Let's Talk
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="hero-stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="hero-stat">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-backdrop"></div>
            <div className="hero-image">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="150" fill="url(#gradient1)" opacity="0.2"/>
                <circle cx="200" cy="200" r="120" fill="url(#gradient2)" opacity="0.3"/>
                <circle cx="200" cy="200" r="90" fill="url(#gradient3)" opacity="0.4"/>
                <path d="M200 100 L250 150 L200 200 L150 150 Z" fill="var(--color-secondary)" opacity="0.6"/>
                <path d="M200 200 L250 250 L200 300 L150 250 Z" fill="var(--color-accent)" opacity="0.5"/>
                <circle cx="200" cy="200" r="30" fill="var(--color-primary)"/>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B35"/>
                    <stop offset="100%" stopColor="#F7B801"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F7B801"/>
                    <stop offset="100%" stopColor="#FF6B35"/>
                  </linearGradient>
                  <linearGradient id="gradient3" x1="50%" y1="0%" x2="50%" y2="100%">
                    <stop offset="0%" stopColor="#0A0E27"/>
                    <stop offset="100%" stopColor="#FF6B35"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
