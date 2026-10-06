import React from 'react';
import SectionTitle from './SectionTitle';
import { educationList } from '../data/portfolioData';
import '../styles/Education.css';

/**
 * Education Section Component
 * Displays university, degree, graduation timeline, and academic performance.
 */
const Education = () => {
  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container">
        <SectionTitle
          eyebrow="ACADEMIC BACKGROUND"
          title="Education"
          subtitle="My academic qualifications and ongoing undergraduate studies in engineering."
        />

        <div className="education-timeline">
          {educationList.map((item, index) => (
            <article key={index} className="education-card">
              <div className="education-header">
                <div className="education-degree-info">
                  <div className="education-icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="education-degree">{item.degree}</h3>
                    <p className="education-institution">{item.institution}</p>
                  </div>
                </div>

                <div className="education-badge">
                  {item.score}
                </div>
              </div>

              <div className="education-meta">
                <span className="education-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{item.period}</span>
                </span>

                <span className="education-meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{item.status}</span>
                </span>
              </div>

              <p className="education-description">{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
