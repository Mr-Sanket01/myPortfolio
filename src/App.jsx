import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/styles.css';

/**
 * Main App Component
 * Assembles all portfolio sections in the required sequence:
 * 1. Hero
 * 2. About Me
 * 3. Skills
 * 4. Projects
 * 5. Education
 * 6. Certificates
 * 7. Contact
 * Followed by Footer.
 */
function App() {
  // Intersection Observer for subtle scroll fade-in animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target); // Trigger once
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="portfolio-app">
      {/* Accessible skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero />
        <div className="fade-in-section"><About /></div>
        <div className="fade-in-section"><Skills /></div>
        <div className="fade-in-section"><Projects /></div>
        <div className="fade-in-section"><Education /></div>
        <div className="fade-in-section"><Certificates /></div>
        <div className="fade-in-section"><Contact /></div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
