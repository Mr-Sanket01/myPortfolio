import React from 'react';
import '../styles/SectionTitle.css';

/**
 * Reusable SectionTitle Component
 * @param {string} eyebrow - Small uppercase pill/badge text (e.g. "EXPLORE MY WORK")
 * @param {string} title - Main section heading
 * @param {string} subtitle - Optional explanatory paragraph
 * @param {boolean} alignLeft - Align text to left instead of center
 */
const SectionTitle = ({ eyebrow, title, subtitle, alignLeft = false }) => {
  return (
    <div className={`section-header ${alignLeft ? 'section-header-left' : ''}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-description">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
