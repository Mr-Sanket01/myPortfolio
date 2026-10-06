import React from 'react';
import { personalInfo, contactDetails } from '../data/portfolioData';
import avatarSvg from '../assets/avatar.svg';
import '../styles/Hero.css';

/**
 * Hero Section Component
 * First impression section introducing Sanket, key value propositions,
 * download resume button, and primary calls to action.
 */
const Hero = () => {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="container hero-grid">
        {/* Left: Text & Call to Actions */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="hero-status-dot" aria-hidden="true"></span>
            <span>{personalInfo.status}</span>
          </div>

          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            {personalInfo.name.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="hero-name-accent">
              {personalInfo.name.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p className="hero-title">{personalInfo.title}</p>
          <p className="hero-tagline">{personalInfo.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Sanket_Jadhav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="Download Sanket Jadhav's Resume (PDF)"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="hero-socials-label">Connect:</span>
            <div className="hero-social-links">
              <a
                href={contactDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                href={`mailto:${contactDetails.email}`}
                className="hero-social-icon"
                aria-label="Send Email to Sanket"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Modern Avatar Graphic */}
        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <img
              src={avatarSvg}
              alt="Illustration representing Sanket Shrikrishna Jadhav, software developer"
              className="hero-avatar-image"
              width="320"
              height="320"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
