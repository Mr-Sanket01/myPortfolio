import React from 'react';
import SkillTag from './SkillTag';
import '../styles/ProjectCard.css';

/**
 * Reusable ProjectCard Component
 * Displays a project card with badge, title, description, tech stack,
 * and conditional action buttons (GitHub & Live Demo).
 */
const ProjectCard = ({ project }) => {
  const { title, badge, category, description, tech, githubUrl, liveDemoUrl } = project;

  return (
    <article className="project-card">
      <div className="project-card-header">
        {badge && <span className="project-badge">{badge}</span>}
        {category && <span className="project-category">{category}</span>}
      </div>

      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>

      {/* Tech stack tags */}
      <div className="project-tech-stack" aria-label={`Technologies used in ${title}`}>
        {tech.map((item, idx) => (
          <SkillTag key={idx} label={item} size="sm" />
        ))}
      </div>

      {/* Action buttons */}
      <div className="project-card-actions">
        {liveDemoUrl && (
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn-primary"
            aria-label={`View live demo for ${title} (opens in new tab)`}
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
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn-secondary"
            aria-label={`View GitHub repository for ${title} (opens in new tab)`}
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
            GitHub
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
