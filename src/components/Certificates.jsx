import React from 'react';
import SectionTitle from './SectionTitle';
import SkillTag from './SkillTag';
import { certificatesList } from '../data/portfolioData';
import '../styles/Certificates.css';

/**
 * Certificates Section Component
 * Displays verified training and certifications.
 */
const Certificates = () => {
  return (
    <section id="certificates" className="section section-alt" aria-label="Certificates">
      <div className="container">
        <SectionTitle
          eyebrow="CREDENTIALS & WORKSHOPS"
          title="Certificates"
          subtitle="Bootcamps and technical programs completed to expand my engineering skill set."
        />

        <div className="certificates-grid">
          {certificatesList.map((cert, index) => (
            <article key={index} className="certificate-card">
              <div className="certificate-top">
                <div className="certificate-icon-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <span className="certificate-year-badge">{cert.year}</span>
              </div>

              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-desc">{cert.description}</p>

              {cert.skillsLearned && (
                <div className="certificate-tags" aria-label="Topics covered">
                  {cert.skillsLearned.map((item, idx) => (
                    <SkillTag key={idx} label={item} size="sm" />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
