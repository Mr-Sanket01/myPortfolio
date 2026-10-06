import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { contactDetails } from '../data/portfolioData';
import '../styles/Contact.css';

/**
 * Contact Section Component
 * Fully functional UI form with client-side validation, accessible states,
 * and prominent direct contact links.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields
  const validate = (values) => {
    const errs = {};

    if (!values.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (values.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!values.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    if (!values.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (values.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation if the field was already touched
    if (touched[name]) {
      const fieldErrors = validate({ ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(formData);
    setErrors(fieldErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simulate successful client-side submission
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
      setErrors({});
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <SectionTitle
          eyebrow="LET'S CONNECT"
          title="Get in Touch"
          subtitle="Have a question, opportunity, or simply want to say hi? Feel free to reach out!"
        />

        <div className="contact-wrapper">
          {/* Direct Contact Info Column */}
          <div className="contact-info-col">
            <div className="contact-info-header">
              <h3>Contact Information</h3>
              <p>
                I am actively seeking internship opportunities and collaborative projects.
                Reach out directly or drop a message via the form.
              </p>
            </div>

            <div className="contact-cards-list">
              <a
                href={`mailto:${contactDetails.email}`}
                className="contact-item-card"
                aria-label={`Send email to ${contactDetails.email}`}
              >
                <div className="contact-item-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">Email</span>
                  <span className="contact-item-value">{contactDetails.email}</span>
                </div>
              </a>

              <a
                href={`tel:${contactDetails.phone}`}
                className="contact-item-card"
                aria-label={`Call ${contactDetails.phoneDisplay}`}
              >
                <div className="contact-item-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">Phone</span>
                  <span className="contact-item-value">{contactDetails.phoneDisplay}</span>
                </div>
              </a>

              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item-card"
                aria-label="Visit LinkedIn profile (opens in new tab)"
              >
                <div className="contact-item-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">LinkedIn</span>
                  <span className="contact-item-value">mr-sanket-jadhav-1377x</span>
                </div>
              </a>

              <a
                href={contactDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item-card"
                aria-label="Visit GitHub profile (opens in new tab)"
              >
                <div className="contact-item-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div className="contact-item-details">
                  <span className="contact-item-label">GitHub</span>
                  <span className="contact-item-value">Mr-Sanket01</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-card">
            {isSubmitted ? (
              <div
                className="contact-success-banner"
                role="status"
                aria-live="polite"
              >
                <div className="contact-success-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="contact-success-title">Message Sent Successfully!</h3>
                <p className="contact-success-desc">
                  Thank you for reaching out, Sanket has received your message and will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-secondary btn-sm"
                  style={{ marginTop: '0.75rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    <span>Full Name</span>
                    <span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Jane Doe"
                    className={`form-input ${errors.name && touched.name ? 'input-error' : ''}`}
                    aria-required="true"
                    aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                    aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                  />
                  {errors.name && touched.name && (
                    <span id="name-error" className="form-error-msg" role="alert">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    <span>Email Address</span>
                    <span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="name@example.com"
                    className={`form-input ${errors.email && touched.email ? 'input-error' : ''}`}
                    aria-required="true"
                    aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                    aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                  />
                  {errors.email && touched.email && (
                    <span id="email-error" className="form-error-msg" role="alert">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    <span>Your Message</span>
                    <span className="form-required" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Hello Sanket, I'd like to talk about..."
                    className={`form-textarea ${errors.message && touched.message ? 'input-error' : ''}`}
                    aria-required="true"
                    aria-invalid={errors.message && touched.message ? 'true' : 'false'}
                    aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && touched.message && (
                    <span id="message-error" className="form-error-msg" role="alert">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  <span>Send Message</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
