import React from 'react';
import '../styles/SkillTag.css';

/**
 * Reusable SkillTag Component
 * @param {string} label - Text to display
 * @param {string} variant - 'default' | 'primary'
 * @param {string} size - 'md' | 'sm'
 * @param {React.ReactNode} icon - Optional icon
 */
const SkillTag = ({ label, variant = 'default', size = 'md', icon = null }) => {
  return (
    <span className={`skill-tag skill-tag-${variant} skill-tag-${size}`}>
      {icon && <span className="skill-tag-icon">{icon}</span>}
      {label}
    </span>
  );
};

export default SkillTag;
