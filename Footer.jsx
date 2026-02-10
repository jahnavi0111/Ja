import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Brand Identity', href: '#services' },
      { name: 'Consulting', href: '#services' }
    ],
    social: [
      { 
        name: 'LinkedIn', 
        href: '#',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>`
      },
      { 
        name: 'Twitter', 
        href: '#',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>`
      },
      { 
        name: 'GitHub', 
        href: '#',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.430.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>`
      },
      { 
        name: 'Dribbble', 
        href: '#',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm10.163-10.649c-.338-.103-3.073-.937-6.187-.431 1.299 3.569 1.828 6.478 1.929 7.081 2.233-1.508 3.826-3.895 4.258-6.65zm-6.597 7.612c-.151-.903-.73-4.041-2.124-7.678-.011.003-.022.007-.033.01-5.601 1.954-7.619 5.846-7.795 6.206 1.685 1.316 3.808 2.1 6.106 2.1 1.43 0 2.786-.316 4.006-.893l-.16.255zm-8.365-1.804c.238-.404 2.816-4.700 7.947-6.294.128-.04.257-.076.386-.112-.245-.619-.502-1.284-.772-1.937-4.722 1.413-9.316 1.354-9.730 1.345-.005.113-.008.226-.008.34 0 2.414.923 4.615 2.438 6.272v-.01l-.261.396zm-.956-8.208c.429.011 4.341.058 8.866-1.163-1.587-2.824-3.302-5.198-3.552-5.543-2.725 1.291-4.801 3.781-5.314 6.706zm6.865-7.689c.27.364 2.007 2.720 3.576 5.598 3.412-1.279 4.858-3.219 5.037-3.489-1.697-1.506-3.938-2.422-6.396-2.422-.745 0-1.466.103-2.161.293l-.056.02zm7.092 4.115c-.207.295-1.853 2.433-5.434 3.888.088.181.172.364.253.549.092.210.183.421.268.634 3.246-.408 6.471.246 6.775.312-.024-2.301-.852-4.412-2.199-6.080l.337-.303z"/>
        </svg>`
      }
    ]
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={(e) => handleLinkClick(e, '#home')}>
              <span className="logo-text">Portfolio</span>
              <span className="logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Crafting beautiful digital experiences that make a difference.
            </p>
            <div className="footer-social">
              {footerLinks.social.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="footer-social-link"
                  dangerouslySetInnerHTML={{ __html: social.icon }}
                />
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-group">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-group">
              <h4>Newsletter</h4>
              <p>Subscribe to get the latest updates and news.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  required 
                />
                <button type="submit" aria-label="Subscribe">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
