import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projects, contactDetails } from '../data/portfolioData';
import '../styles/Projects.css';

/**
 * Projects Section Component
 * Displays featured projects in responsive cards with tech tags and direct repository/demo links.
 */
const Projects = () => {
  return (
    <section id="projects" className="section section-alt" aria-label="Projects">
      <div className="container">
        <SectionTitle
          eyebrow="PORTFOLIO HIGHLIGHTS"
          title="Featured Projects"
          subtitle="A selection of full-stack, frontend, and interactive web applications I have built."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects-footer">
          <a
            href={contactDetails.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-note"
            aria-label="See more repositories on GitHub (opens in new tab)"
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
            <span>See more repositories on my GitHub profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
