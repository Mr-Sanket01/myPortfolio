import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import '../styles/Footer.css';

/**
 * Footer Component
 * Clean and minimal footer with quick navigation links, copyright,
 * and a smooth back-to-top button.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">{personalInfo.name}</span>
            <span className="footer-tagline">
              Aspiring Software Engineer | Full-Stack & DSA
            </span>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#hero" className="footer-nav-link">Home</a>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="footer-nav-link">
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
