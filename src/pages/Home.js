import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  FileText, 
  Brain, 
  Globe, 
  Award,
  ArrowRight,
  Play,
  Download,
  Star,
  TrendingUp,
  Heart,
  Shield
} from 'lucide-react';

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
    { number: "500+", label: "Research Papers", icon: FileText },
    { number: "150+", label: "Surgical Procedures", icon: Award },
    { number: "50+", label: "Contributing Colleges", icon: GraduationCap },
    { number: "10K+", label: "Active Learners", icon: Users }
  ];

  const upcomingFeatures = [
    "Virtual Reality Surgical Training",
    "Real-time OPD Case Integration",
    "AI-Powered Diagnosis Assistant",
    "International Collaboration Portal"
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
            <p className="hero-subtitle">
              Revolutionizing Ayurvedic surgical education by integrating classical Shalya Tantra wisdom 
              with modern surgical science and AI-powered learning
            </p>
            <div className="hero-buttons">
              <Link to="/sushruta-samhita" className="btn btn-primary btn-large">
                <BookOpen size={20} />
                Explore Sushruta Samhita
              </Link>
              <Link to="/textbooks" className="btn btn-secondary btn-large">
                <Download size={20} />
                Access Textbooks
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
          <div className="grid grid-3">
            {features.map((feature, index) => (
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
      </section>

      {/* Founder Message Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="founder-message">
            <div className="grid grid-2">
              <div className="founder-info">
                <h2>Message from the Founder</h2>
                <blockquote>
                  "The future of Ayurvedic surgery lies in preserving our ancient wisdom while embracing 
                  modern technology. Through this platform, we aim to create a bridge between the timeless 
                  teachings of Maharishi Sushruta and contemporary surgical practice, ensuring that future 
                  generations of Vaidyas are equipped with both traditional knowledge and modern tools."
                </blockquote>
                <div className="founder-details">
                  <h4>Dr. Sameep Singh</h4>
                  <p>BAMS, PG Scholar (MS Shalya Tantra)<br />
                  Quadra Institute of Ayurveda & Hospital, Roorkee</p>
                </div>
              </div>
              <div className="founder-achievements">
                <h3>Project Leadership</h3>
                <div className="achievement-list">
                  <div className="achievement-item">
                    <Award size={20} />
                    <span>Vision & Leadership</span>
                  </div>
                  <div className="achievement-item">
                    <BookOpen size={20} />
                    <span>Core Content Development</span>
                  </div>
                  <div className="achievement-item">
                    <Brain size={20} />
                    <span>AI Integration Planning</span>
                  </div>
                  <div className="achievement-item">
                    <Users size={20} />
                    <span>Team Coordination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Latest Updates</h2>
            <p>Stay informed about the latest developments in Vedic Surgery</p>
          </div>
          <div className="grid grid-3">
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
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Phase 2 & 3 Features</h2>
            <p>Exciting developments on the horizon</p>
          </div>
          <div className="coming-soon-features">
            <div className="grid grid-2">
              <div className="coming-soon-list">
                <h3>Phase 2 Development</h3>
                <ul>
                  {upcomingFeatures.map((feature, index) => (
                    <li key={index}>
                      <Star size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="timeline-preview">
                <h3>Development Timeline</h3>
                <div className="timeline-item">
                  <div className="timeline-date">Q1 2024</div>
                  <div className="timeline-content">
                    <h5>Phase 1 Complete</h5>
                    <p>Full website launch with all core features</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">Q2 2024</div>
                  <div className="timeline-content">
                    <h5>AI Integration</h5>
                    <p>Launch of AI-powered learning modules</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">Q3 2024</div>
                  <div className="timeline-content">
                    <h5>VR/AR Simulations</h5>
                    <p>Virtual surgical training environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
      </section>
    </div>
  );
};

export default Home; 