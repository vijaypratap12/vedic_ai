import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle, 
  Users,
  BookOpen,
  Award,
  Heart,
  Globe,
  Clock,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    contactType: 'general'
  });
  
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'contribution', label: 'Content Contribution' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'research', label: 'Research Submission' },
    { value: 'feedback', label: 'Feedback & Suggestions' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: '',
        contactType: 'general'
      });
    }, 3000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', newsletterEmail);
    setNewsletterEmail('');
    alert('Successfully subscribed to newsletter!');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Contact Us</h1>
            <p>
              Have questions, suggestions, or want to contribute to the Vedic Surgery project? 
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="contact-info-section">
            <div className="grid grid-3">
              <div className="contact-info-card card text-center">
                <div className="card-icon">
                  <Mail size={32} />
                </div>
                <h3>Email Us</h3>
                <p>General inquiries and support</p>
                <div className="contact-details">
                  <a href="mailto:info@vedicsurgery.org">info@vedicsurgery.org</a>
                  <a href="mailto:support@vedicsurgery.org">support@vedicsurgery.org</a>
                </div>
              </div>

              <div className="contact-info-card card text-center">
                <div className="card-icon">
                  <Phone size={32} />
                </div>
                <h3>Call Us</h3>
                <p>Speak directly with our team</p>
                <div className="contact-details">
                  <a href="tel:+91XXXXXXXXX">+91 XXX XXX XXXX</a>
                  <small>Mon-Fri, 9 AM - 6 PM IST</small>
                </div>
              </div>

              <div className="contact-info-card card text-center">
                <div className="card-icon">
                  <MapPin size={32} />
                </div>
                <h3>Visit Us</h3>
                <p>Our headquarters location</p>
                <div className="contact-details">
                  <address>
                    Quadra Institute of Ayurveda & Hospital<br />
                    Roorkee, Uttarakhand<br />
                    India
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Actions */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-2">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              {formSubmitted ? (
                <div className="success-message">
                  <CheckCircle size={48} color="var(--success-color)" />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you within 24-48 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Contact Type</label>
                    <select 
                      name="contactType"
                      className="form-control"
                      value={formData.contactType}
                      onChange={handleInputChange}
                      required
                    >
                      {contactTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input 
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Organization/Institution</label>
                    <input 
                      type="text"
                      name="organization"
                      className="form-control"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Your college, hospital, or organization"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input 
                      type="text"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea 
                      name="message"
                      className="form-control textarea"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please provide details about your inquiry, suggestions, or how you'd like to contribute..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Quick Actions */}
            <div className="quick-actions-section">
              <h3>Quick Actions</h3>
              <p>Looking for something specific? Choose from our quick action options:</p>

              <div className="quick-actions-grid">
                <div className="quick-action-card card">
                  <div className="action-icon">
                    <Users size={24} />
                  </div>
                  <h4>Join Our Team</h4>
                  <p>Interested in contributing to the project as a developer, content creator, or advisor?</p>
                  <button className="btn btn-outline">
                    View Opportunities
                  </button>
                </div>

                <div className="quick-action-card card">
                  <div className="action-icon">
                    <BookOpen size={24} />
                  </div>
                  <h4>Submit Research</h4>
                  <p>Share your research papers, thesis, or case studies with our community.</p>
                  <button className="btn btn-outline">
                    Submit Now
                  </button>
                </div>

                <div className="quick-action-card card">
                  <div className="action-icon">
                    <Award size={24} />
                  </div>
                  <h4>Institutional Partnership</h4>
                  <p>Partner with us to integrate Vedic Surgery into your curriculum.</p>
                  <button className="btn btn-outline">
                    Partner With Us
                  </button>
                </div>

                <div className="quick-action-card card">
                  <div className="action-icon">
                    <Heart size={24} />
                  </div>
                  <h4>Support Our Mission</h4>
                  <p>Help fund the development of this revolutionary educational platform.</p>
                  <button className="btn btn-outline">
                    Support Us
                  </button>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="response-info card">
                <div className="info-header">
                  <Clock size={20} />
                  <h4>Response Times</h4>
                </div>
                <ul>
                  <li>General inquiries: 24-48 hours</li>
                  <li>Technical support: 12-24 hours</li>
                  <li>Research submissions: 3-5 business days</li>
                  <li>Partnership requests: 1-2 weeks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section">
        <div className="container">
          <div className="newsletter-section">
            <div className="newsletter-content text-center">
              <h2>Stay Updated</h2>
              <p>
                Subscribe to our newsletter to receive updates on new research, 
                platform features, and developments in Ayurvedic surgical education.
              </p>
              
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <div className="newsletter-input-group">
                  <input 
                    type="email"
                    className="newsletter-input"
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </div>
                <p className="newsletter-note">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header text-center">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about the Vedic Surgery project</p>
          </div>

          <div className="faq-grid grid grid-2">
            <div className="faq-item card">
              <h4>How can I contribute to the project?</h4>
              <p>
                We welcome contributions in many forms: content creation, technical development, 
                research submission, funding, and institutional partnerships. Contact us to discuss 
                how your skills and interests align with our mission.
              </p>
            </div>

            <div className="faq-item card">
              <h4>Is the platform free to use?</h4>
              <p>
                Yes, our core educational content including textbooks, Sushruta Samhita explorer, 
                and research repository are freely accessible. Some advanced features may require 
                registration or subscription in the future.
              </p>
            </div>

            <div className="faq-item card">
              <h4>How do I submit my research?</h4>
              <p>
                You can submit research papers, theses, or case studies through our research 
                repository submission portal. All submissions go through a peer review process 
                before publication.
              </p>
            </div>

            <div className="faq-item card">
              <h4>Can institutions partner with you?</h4>
              <p>
                Absolutely! We're actively seeking partnerships with Ayurvedic colleges, hospitals, 
                and research institutions to expand our content and reach. Contact us to explore 
                partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links & Final CTA */}
      <section className="section">
        <div className="container">
          <div className="final-cta text-center">
            <h2>Connect With Us</h2>
            <p>Follow our journey and stay connected through various channels</p>
            
            <div className="social-links">
              <button className="btn btn-outline">
                <Globe size={20} />
                Website
              </button>
              <button className="btn btn-outline">
                <MessageCircle size={20} />
                Forum
              </button>
              <button className="btn btn-outline">
                <Mail size={20} />
                Newsletter
              </button>
            </div>

            <div className="contact-summary">
              <p>
                <strong>Primary Contact:</strong> Dr. Sameep Singh<br />
                <strong>Email:</strong> info@vedicsurgery.org<br />
                <strong>Project Status:</strong> Phase 1 Development
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 