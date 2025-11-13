import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  FileText, 
  Brain, 
  Globe, 
  Award,
  ArrowRight,
  Heart,
  Shield,
  Mail,
  Activity,
  Zap,
  Clock
} from 'lucide-react';
import { founderPhoto } from '../assets/images';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Sushruta Samhita Explorer",
      description: "Interactive trilingual exploration of the classical surgical text with modern commentary and illustrations.",
      link: "/sushruta-samhita"
    },
    {
      icon: GraduationCap,
      title: "UG/PG Textbooks",
      description: "NCISM-aligned educational content with downloadable resources for BAMS students and postgraduates.",
      link: "/textbooks"
    },
    {
      icon: FileText,
      title: "Research Repository",
      description: "Comprehensive database of Ayurvedic surgery research, theses, and academic publications.",
      link: "/research"
    },
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Intelligent learning modules with personalized paths and adaptive assessments.",
      link: "/simulations"
    },
    {
      icon: Shield,
      title: "Legal Framework",
      description: "Complete guide to surgical jurisprudence and NCISM compliance for Ayurvedic surgeons.",
      link: "/jurisprudence"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with fellow practitioners, share cases, and discuss surgical techniques.",
      link: "/forum"
    }
  ];

  const statistics = [
    { number: "831+", label: "Research Papers", icon: FileText },
    { number: "1100+", label: "Thesis Repositories", icon: Award },
    { number: "50+", label: "AI Powered Textbooks", icon: GraduationCap },
    { number: "50+", label: "Biographical Articles", icon: Users }
  ];

  const upcomingFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Intelligent diagnosis assistant and personalized learning paths",
      phase: "Phase 2",
      status: "In Development"
    },
    {
      icon: Globe,
      title: "VR/AR Simulations",
      description: "Immersive virtual surgical training environment",
      phase: "Phase 2",
      status: "Planning"
    },
    {
      icon: Activity,
      title: "Real-time OPD Integration",
      description: "Live case studies and clinical integration",
      phase: "Phase 3",
      status: "Planned"
    },
    {
      icon: Users,
      title: "Global Collaboration",
      description: "International network of Ayurvedic practitioners",
      phase: "Phase 3",
      status: "Planned"
    },
    {
      icon: Globe,
      title: "International Ayurveda Surgery Directory",
      description: "Comprehensive global directory of Ayurvedic surgeons and institutions",
      phase: "Phase 3",
      status: "Planning"
    },
    {
      icon: Users,
      title: "Mentor-Mentee Network",
      description: "Connect experienced practitioners with aspiring Ayurvedic surgeons",
      phase: "Phase 3",
      status: "Planning"
    },
    {
      icon: FileText,
      title: "International Journal of Ayurvedic Surgical Research",
      description: "Peer-reviewed publication platform for Shalya Tantra research",
      phase: "Phase 3",
      status: "Planning"
    },
    {
      icon: Award,
      title: "International Shalya Chikitsak Association",
      description: "Global professional body for Ayurvedic surgical practitioners",
      phase: "Phase 3",
      status: "Planning"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center fade-in-up">
            <h1>
              <span className="sanskrit">वैदिक</span> Surgery
            </h1>
            <div className="hero-subtitle-container">
              <div className="hero-subtitle-lines-1-2">
                <p>
                  Revolutionizing Ayurvedic surgical education<br/>
                  by integrating classical Shalya Tantra wisdom with modern surgical science
                </p>
              </div>
              <div className="hero-subtitle-line3">
                <Typewriter
                  options={{
                    strings: ['<strong>AI-Powered Learning</strong>'],
                    autoStart: true,
                    delay: 100,
                    deleteSpeed: Infinity,
                    cursor: '|',
                    loop: false,
                    startDelay: 1500,
                  }}
                />
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/acharya-sushruta" className="btn btn-primary btn-large">
                <Users size={20} />
                Know Acharya Sushruta
              </Link>
              <Link to="/shalya-tantra" className="btn btn-secondary btn-large">
                <BookOpen size={20} />
                Explore Shalya Tantra
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="vision-mission-card card fade-in-up">
              <div className="card-icon">
                <Globe size={24} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To revolutionize Ayurvedic surgical education by integrating classical Shalya Tantra wisdom 
                with modern surgical science and AI-powered learning, creating a globally recognized and 
                clinically effective platform for future Vaidyas.
              </p>
            </div>
            <div className="mission-card card fade-in-up">
              <div className="card-icon">
                <Heart size={24} />
              </div>
              <h3>Our Mission</h3>
              <ul>
                <li>Preserve and digitize classical Shalya Tantra teachings</li>
                <li>Develop AI-assisted educational ecosystems</li>
                <li>Bridge Ayurveda with contemporary surgery</li>
                <li>Establish India's first AI-integrated surgical platform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Platform Impact</h2>
            <p>Transforming Ayurvedic surgical education across India and beyond</p>
          </div>
          <div className="stats-grid">
            {statistics.map((stat, index) => (
              <div key={index} className="stat-item card">
                <div className="stat-icon">
                  <stat.icon size={32} color="var(--primary-color)" />
                </div>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Platform Features</h2>
            <p>Comprehensive tools and resources for modern Ayurvedic surgical education</p>
          </div>
          <div className="features-scroll-container">
            <div className="features-scroll-track">
              {features.concat(features).map((feature, index) => (
                <div key={index} className="feature-card card fade-in-up">
                  <div className="card-icon">
                    <feature.icon size={24} />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                  <Link to={feature.link} className="btn btn-outline">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Latest Updates</h2>
            <p>Stay informed about the latest developments in Vedic Surgery</p>
          </div>
          <div className="updates-scroll-container">
            <div className="updates-scroll-track">
              <div className="update-card card">
                <div className="update-badge badge badge-primary">New</div>
                <h4>Sushruta Samhita Digital Archive</h4>
                <p>Complete digitization of Sushruta Samhita with Sanskrit, Hindi, and English translations now available.</p>
                <Link to="/sushruta-samhita" className="btn btn-outline btn-small">
                  Explore Now
                </Link>
              </div>
              <div className="update-card card">
                <div className="update-badge badge badge-success">Updated</div>
                <h4>NCISM Syllabus Integration</h4>
                <p>All textbook content now fully aligned with the latest NCISM curriculum for UG and PG programs.</p>
                <Link to="/textbooks" className="btn btn-outline btn-small">
                  View Textbooks
                </Link>
              </div>
              <div className="update-card card">
                <div className="update-badge badge badge-info">Featured</div>
                <h4>Research Repository Launch</h4>
                <p>Access to 500+ research papers and theses from Ayurvedic colleges across India.</p>
                <Link to="/research" className="btn btn-outline btn-small">
                  Browse Research
                </Link>
              </div>
              <div className="update-card card">
                <div className="update-badge badge badge-warning">Coming Soon</div>
                <h4>AI-Powered Learning Modules</h4>
                <p>Interactive AI-assisted learning paths with personalized assessments and adaptive content delivery.</p>
                <Link to="/contact" className="btn btn-outline btn-small">
                  Get Notified
                </Link>
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="update-card card">
                <div className="update-badge badge badge-primary">New</div>
                <h4>Sushruta Samhita Digital Archive</h4>
                <p>Complete digitization of Sushruta Samhita with Sanskrit, Hindi, and English translations now available.</p>
                <Link to="/sushruta-samhita" className="btn btn-outline btn-small">
                  Explore Now
                </Link>
              </div>
              <div className="update-card card">
                <div className="update-badge badge badge-success">Updated</div>
                <h4>NCISM Syllabus Integration</h4>
                <p>All textbook content now fully aligned with the latest NCISM curriculum for UG and PG programs.</p>
                <Link to="/textbooks" className="btn btn-outline btn-small">
                  View Textbooks
                </Link>
              </div>
              <div className="update-card card">
                <div className="update-badge badge badge-info">Featured</div>
                <h4>Research Repository Launch</h4>
                <p>Access to 500+ research papers and theses from Ayurvedic colleges across India.</p>
                <Link to="/research" className="btn btn-outline btn-small">
                  Browse Research
                </Link>
              </div>
              <div className="update-card card">
                <div className="update-badge badge badge-warning">Coming Soon</div>
                <h4>AI-Powered Learning Modules</h4>
                <p>Interactive AI-assisted learning paths with personalized assessments and adaptive content delivery.</p>
                <Link to="/contact" className="btn btn-outline btn-small">
                  Get Notified
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="section founder-section">
        <div className="container">
          <div className="content-header text-center">
            <h2>Meet the Founder</h2>
            <p>Pioneering the integration of ancient Ayurvedic wisdom with modern surgical science</p>
          </div>
          <div className="founder-container">
            <div className="founder-image-wrapper">
              <div className="founder-image-frame">
                <img src={founderPhoto} alt="Dr. Sameep Singh - Founder" className="founder-image" />
                <div className="founder-badge">
                  <Award size={24} />
                  <span>Founder & Visionary</span>
                </div>
              </div>
            </div>
            <div className="founder-content">
              <div className="founder-header">
                <h3>Dr. Sameep Singh</h3>
                <p className="founder-credentials">
                  BAMS, PG Scholar (MS Shalya Tantra)<br />
                  Quadra Institute of Ayurveda & Hospital, Roorkee
                </p>
              </div>
              <blockquote className="founder-quote">
                <div className="quote-mark">"</div>
                <p>
                  The future of Ayurvedic surgery lies in preserving our ancient wisdom while embracing 
                  modern technology. Through this platform, we aim to create a bridge between the timeless 
                  teachings of Maharishi Sushruta and contemporary surgical practice, ensuring that future 
                  generations of Vaidyas are equipped with both traditional knowledge and modern tools.
                </p>
              </blockquote>
              <div className="founder-social">
                <a href="mailto:vedicsurgery@gmail.com" className="social-link">
                  <Mail size={20} />
                  <span>Get in Touch</span>
                </a>
                {/* <button className="social-link" onClick={() => window.alert('LinkedIn profile coming soon!')}>
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section section-alt roadmap-section">
        <div className="container">
          <div className="content-header text-center">
            <div className="section-badge">
              <Zap size={20} />
              <span>Coming Soon</span>
            </div>
            <h2>Future Innovations</h2>
            <p>Pioneering the next generation of Ayurvedic surgical education</p>
          </div>
          
          <div className="roadmap-scroll-container">
            <div className="roadmap-scroll-track">
              {upcomingFeatures.concat(upcomingFeatures).map((feature, index) => (
                <div key={index} className="roadmap-card card">
                  <div className="roadmap-card-header">
                    <div className="roadmap-icon">
                      <feature.icon size={28} />
                    </div>
                    <div className="roadmap-status">
                      <Clock size={14} />
                      <span>{feature.status}</span>
                    </div>
                  </div>
                  <div className="roadmap-card-content">
                    <div className="roadmap-phase">{feature.phase}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                  <div className="roadmap-card-footer">
                    <div className="progress-bar">
                      <div className={`progress-fill ${feature.status.toLowerCase().replace(' ', '-')}`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="roadmap-timeline">
            <div className="timeline-header">
              <h3>Development Roadmap</h3>
              <p>Our journey towards revolutionizing Ayurvedic surgical education</p>
            </div>
            <div className="timeline-track">
              <div className="timeline-milestone completed">
                <div className="milestone-marker">
                  <Award size={20} />
                </div>
                <div className="milestone-content">
                  <span className="milestone-date">Q4 2025</span>
                  <h4>Phase 1 Complete</h4>
                  <p>Platform launch with core features and content</p>
                </div>
              </div>
              <div className="timeline-milestone active">
                <div className="milestone-marker">
                  <Brain size={20} />
                </div>
                <div className="milestone-content">
                  <span className="milestone-date">Q1-Q2 2026</span>
                  <h4>Phase 2 Development</h4>
                  <p>AI integration and VR/AR simulations</p>
                </div>
              </div>
              <div className="timeline-milestone upcoming">
                <div className="milestone-marker">
                  <Globe size={20} />
                </div>
                <div className="milestone-content">
                  <span className="milestone-date">Q3-Q4 2026</span>
                  <h4>Phase 3 Expansion</h4>
                  <p>Global collaboration and advanced features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section
      <section className="section">
        <div className="container">
          <div className="cta-section text-center">
            <h2>Join the Vedic Surgery Community</h2>
            <p>
              Be part of the revolution in Ayurvedic surgical education. Whether you're a student, 
              practitioner, researcher, or educator, there's a place for you in our community.
            </p>
            <div className="cta-buttons">
              <Link to="/forum" className="btn btn-primary btn-large">
                <Users size={20} />
                Join Discussion Forum
              </Link>
              <Link to="/team" className="btn btn-secondary btn-large">
                <Heart size={20} />
                Become a Contributor
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home; 