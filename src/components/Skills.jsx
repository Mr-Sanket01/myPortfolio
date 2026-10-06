import React from 'react';
import SectionTitle from './SectionTitle';
import SkillTag from './SkillTag';
import { skillCategories } from '../data/portfolioData';
import '../styles/Skills.css';

/**
 * Category-specific icons helper
 */
const getCategoryIcon = (category) => {
  switch (category) {
    case 'Languages':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      );
    case 'Frontend':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      );
    case 'Backend and Database':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      );
    case 'Tools':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      );
  }
};

/**
 * Skills Section Component
 * Displays technical competencies grouped by category with interactive tags.
 */
const Skills = () => {
  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="container">
        <SectionTitle
          eyebrow="TECHNICAL TOOLKIT"
          title="Skills & Technologies"
          subtitle="A categorized overview of the languages, frameworks, databases, and tools I use."
        />

        <div className="skills-grid">
          {skillCategories.map((group) => (
            <div key={group.category} className="skill-category-card">
              <div className="skill-category-header">
                <span className="skill-category-icon" aria-hidden="true">
                  {getCategoryIcon(group.category)}
                </span>
                <h3 className="skill-category-title">{group.category}</h3>
              </div>

              <p className="skill-category-desc">{group.description}</p>

              <div
                className="skill-tags-list"
                aria-label={`${group.category} skills`}
              >
                {group.skills.map((skill) => (
                  <SkillTag
                    key={skill}
                    label={skill}
                    variant={
                      skill === 'Java' || skill === 'React' || skill === 'Node.js'
                        ? 'primary'
                        : 'default'
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
