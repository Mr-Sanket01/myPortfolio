import React from 'react';
import SectionTitle from './SectionTitle';
import { personalInfo } from '../data/portfolioData';
import '../styles/About.css';

/**
 * About Me Section Component
 * Provides personal narrative, educational context, and focus areas.
 */
const About = () => {
  return (
    <section id="about" className="section section-alt" aria-label="About Me">
      <div className="container">
        <SectionTitle
          eyebrow="GET TO KNOW ME"
          title="About Me"
          subtitle="A snapshot of my background, academic journey, and engineering goals."
        />

        <div className="about-container">
          {/* Main Story & Learning Pillars */}
          <div className="about-text">
            <p className="about-paragraph about-paragraph-lead">
              {personalInfo.about}
            </p>

            <div className="about-pillars">
              <div className="about-pillar-card">
                <div className="about-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="about-pillar-title">Full-Stack Development</h3>
                <p className="about-pillar-desc">
                  Building responsive client interfaces and robust backend APIs with the MERN stack.
                </p>
              </div>

              <div className="about-pillar-card">
                <div className="about-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="about-pillar-title">DSA & Problem Solving</h3>
                <p className="about-pillar-desc">
                  Practicing data structures and algorithms in Java to write optimal, clean solutions.
                </p>
              </div>

              <div className="about-pillar-card">
                <div className="about-pillar-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="about-pillar-title">Hands-on Applications</h3>
                <p className="about-pillar-desc">
                  Transforming concepts into real software projects that solve actual user needs.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info Card */}
          <aside className="about-card" aria-label="Quick Facts">
            <h3 className="about-card-title">Quick Highlights</h3>
            <div className="about-specs">
              {personalInfo.highlights.map((item, index) => (
                <div key={index} className="about-spec-item">
                  <span className="about-spec-label">{item.label}</span>
                  <span className="about-spec-value">
                    {item.label.includes('CGPA') ? (
                      <span className="about-spec-badge">{item.value}</span>
                    ) : (
                      item.value
                    )}
                  </span>
                </div>
              ))}
              <div className="about-spec-item">
                <span className="about-spec-label">College</span>
                <span className="about-spec-value">{personalInfo.college}</span>
              </div>
              <div className="about-spec-item">
                <span className="about-spec-label">Location</span>
                <span className="about-spec-value">{personalInfo.location}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
