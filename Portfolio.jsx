import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const portfolioRef = useRef(null);

  const categories = ['all', 'web', 'mobile', 'branding', 'ui/ux'];

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

    const elements = portfolioRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProjects]);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(
        portfolioData.filter(project => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <section id="portfolio" className="section portfolio" ref={portfolioRef}>
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>Portfolio</h2>
          <p>Explore my recent work and creative projects</p>
        </div>

        <div className="portfolio-filters animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-item animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-image">
                <div className="portfolio-image-placeholder" style={{ background: project.color }}>
                  <div dangerouslySetInnerHTML={{ __html: project.icon }} />
                </div>
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="portfolio-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <h4>{project.title}</h4>
                <p className="portfolio-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="portfolio-empty">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
