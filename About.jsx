import React, { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Web Development', level: 90 },
    { name: 'Brand Identity', level: 85 },
    { name: 'Motion Design', level: 80 }
  ];

  const experiences = [
    {
      year: '2022 - Present',
      title: 'Senior Designer',
      company: 'Creative Agency',
      description: 'Leading design projects for major brands and startups'
    },
    {
      year: '2020 - 2022',
      title: 'Product Designer',
      company: 'Tech Startup',
      description: 'Designed and shipped multiple product features'
    },
    {
      year: '2018 - 2020',
      title: 'Junior Designer',
      company: 'Design Studio',
      description: 'Crafted visual identities and marketing materials'
    }
  ];

  return (
    <section id="about" className="section about" ref={aboutRef}>
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>About Me</h2>
          <p>Get to know more about my journey and expertise</p>
        </div>

        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <h3>Passionate About Creating Meaningful Digital Experiences</h3>
            <p>
              With over 5 years of experience in design and development, I've had 
              the privilege of working with diverse clients and teams to bring 
              innovative digital solutions to life.
            </p>
            <p>
              My approach combines strategic thinking with creative execution, 
              ensuring that every project not only looks beautiful but also 
              delivers real value to users and businesses.
            </p>
            <p>
              I believe in the power of good design to solve problems, tell 
              stories, and create connections. Whether it's a brand identity, 
              a website, or a digital product, I'm committed to excellence in 
              every detail.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <h4>Clean Code</h4>
                  <p>Writing maintainable, scalable solutions</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <h4>Fast Delivery</h4>
                  <p>Meeting deadlines without compromising quality</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="about-skills animate-on-scroll">
              <h4>Skills & Expertise</h4>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ '--progress': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-experience animate-on-scroll">
              <h4>Experience Timeline</h4>
              <div className="experience-list">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-year">{exp.year}</div>
                    <div className="experience-content">
                      <h5>{exp.title}</h5>
                      <p className="experience-company">{exp.company}</p>
                      <p className="experience-description">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
