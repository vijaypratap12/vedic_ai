import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, BookOpen, Users, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Vedic Surgery</h4>
            <p>Bridging classical Shalya Tantra wisdom with modern surgical science through AI-powered learning.</p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>vedicsurgery@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 839 797 0074</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Roorkee, Uttarakhand, India</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Education</h4>
            <ul>
              <li><Link to="/sushruta-samhita">Sushruta Samhita</Link></li>
              <li><Link to="/textbooks">UG/PG Textbooks</Link></li>
              <li><Link to="/syllabus-tracker">Syllabus Tracker</Link></li>
              {/* <li><Link to="/simulations">Surgical Simulations</Link></li> */}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/research">Research Repository</Link></li>
              <li><Link to="/jurisprudence">Legal Framework</Link></li>
              <li><Link to="/biography">Biography Series</Link></li>
              <li><Link to="/blog">Articles & Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              {/* <li><Link to="/forum">Discussion Forum</Link></li>
              <li><Link to="/news">Surgery News</Link></li> */}
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Founded By</h4>
            <p><strong>Dr. Sameep Singh</strong><br />
            BAMS, PG Scholar (MS Shalya Tantra)<br />
            Quadra Institute of Ayurveda & Hospital</p>
            
            <p><strong>Dr. Saurabh Kumar</strong><br />
            BAMS, MS (Shalya Tantra)<br />
            Chief Clinical Advisor</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Vedic Surgery Project. All rights reserved.</p>
              <p>Preserving Ayurvedic surgical wisdom for future generations.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 