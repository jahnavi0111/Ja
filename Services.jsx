import React, { useEffect, useRef } from 'react';
import { servicesData } from '../data/servicesData';
import '../styles/Services.css';

const Services = () => {
  const servicesRef = useRef(null);

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

    const elements = servicesRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section services" ref={servicesRef}>
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>Services</h2>
          <p>Comprehensive solutions tailored to your needs</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="service-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <div dangerouslySetInnerHTML={{ __html: service.icon }} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="service-cta">
                <span>Learn More</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta animate-on-scroll">
          <h3>Need a custom solution?</h3>
          <p>Let's discuss your project and create something amazing together.</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.offsetTop - offset;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
              }
            }}
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
