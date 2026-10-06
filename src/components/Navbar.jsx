import React, { useState, useEffect } from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import '../styles/Navbar.css';

/**
 * Sticky Navbar Component
 * Features:
 * - Responsive navigation with mobile hamburger drawer
 * - Active link tracking on scroll
 * - Accessible keyboard navigation & focus states
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle sticky shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', ...navLinks.map((link) => link.href.replace('#', ''))];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Brand / Logo */}
        <a href="#hero" className="navbar-logo" onClick={closeMenu} aria-label="Go to top">
          <span className="navbar-logo-badge" aria-hidden="true">SJ</span>
          <span className="navbar-logo-text">{personalInfo.shortName}</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className={`navbar-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
        </button>

        {/* Navigation Links */}
        <nav
          id="navbar-menu"
          className={`navbar-nav ${isOpen ? 'is-open' : ''}`}
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`navbar-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.name}
              </a>
            );
          })}

          <div className="navbar-cta">
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              onClick={closeMenu}
            >
              Get in Touch
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
