import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Award, 
  Scissors,
  Eye,
  Heart,
  Brain,
  Activity,
  Stethoscope,
  Users,
  Star,
  ArrowRight,
  Search,
  Download
} from 'lucide-react';

const ShalyaTantra = () => {
  const [selectedBranch, setSelectedBranch] = useState('all');

  const branches = [
    {
      id: 'general',
      name: 'General Surgery',
      icon: Scissors,
      description: 'Core surgical procedures including wound management, abscess drainage, and general operative techniques',
      procedures: ['Wound Management', 'Abscess Drainage', 'Fistula Treatment', 'Tumor Excision'],
      color: '#8B4513'
    },
    {
      id: 'ophthalmology',
      name: 'Netra Tantra (Ophthalmology)',
      icon: Eye,
      description: 'Eye diseases and surgical interventions including cataract surgery and pterygium removal',
      procedures: ['Cataract Surgery', 'Pterygium Removal', 'Eyelid Disorders', 'Conjunctival Surgery'],
      color: '#2E7D32'
    },
    {
      id: 'ent',
      name: 'Shalakya Tantra (ENT)',
      icon: Activity,
      description: 'Ear, nose, throat, and head-neck surgical procedures',
      procedures: ['Rhinoplasty', 'Tonsillectomy', 'Nasal Polyp Removal', 'Ear Surgery'],
      color: '#1565C0'
    },
    {
      id: 'orthopedics',
      name: 'Asthi & Sandhi Chikitsa',
      icon: Heart,
      description: 'Bone and joint disorders, fracture management, and orthopedic interventions',
      procedures: ['Fracture Management', 'Dislocation Treatment', 'Joint Disorders', 'Bone Healing'],
      color: '#C62828'
    },
    {
      id: 'proctology',
      name: 'Anorectal Surgery',
      icon: Stethoscope,
      description: 'Kshara Sutra therapy and management of anorectal disorders',
      procedures: ['Fistula-in-Ano', 'Hemorrhoids', 'Fissure Treatment', 'Pilonidal Sinus'],
      color: '#6A1B9A'
    },
    {
      id: 'plastic',
      name: 'Plastic & Reconstructive',
      icon: Brain,
      description: 'Cosmetic and reconstructive surgical procedures',
      procedures: ['Rhinoplasty', 'Ear Lobe Repair', 'Lip Reconstruction', 'Scar Management'],
      color: '#D84315'
    }
  ];

  const eightProcedures = [
    {
      name: 'Chedana (Excision)',
      sanskrit: 'छेदन',
      description: 'Cutting or excision of diseased tissue, tumors, or abnormal growths',
      applications: 'Tumor removal, abscess drainage, tissue excision'
    },
    {
      name: 'Bhedana (Incision)',
      sanskrit: 'भेदन',
      description: 'Making incisions to access deeper structures or drain collections',
      applications: 'Abscess incision, surgical access, drainage procedures'
    },
    {
      name: 'Lekhana (Scraping)',
      sanskrit: 'लेखन',
      description: 'Scraping or curettage of unhealthy tissue or bone',
      applications: 'Wound debridement, bone scraping, tissue cleaning'
    },
    {
      name: 'Vedhana (Puncturing)',
      sanskrit: 'वेधन',
      description: 'Puncturing or piercing for drainage or therapeutic purposes',
      applications: 'Fluid aspiration, therapeutic puncture, drainage'
    },
    {
      name: 'Eshana (Probing)',
      sanskrit: 'एषण',
      description: 'Probing to explore wounds, sinuses, or fistulous tracts',
      applications: 'Fistula probing, wound exploration, tract assessment'
    },
    {
      name: 'Aharya (Extraction)',
      sanskrit: 'आहार्य',
      description: 'Extraction or removal of foreign bodies, stones, or embedded objects',
      applications: 'Foreign body removal, stone extraction, embedded object removal'
    },
    {
      name: 'Visravana (Drainage)',
      sanskrit: 'विस्रावण',
      description: 'Facilitating drainage of pus, blood, or other fluids',
      applications: 'Abscess drainage, fluid evacuation, pus removal'
    },
    {
      name: 'Sivana (Suturing)',
      sanskrit: 'सीवन',
      description: 'Suturing or stitching of wounds for healing',
      applications: 'Wound closure, tissue approximation, surgical repair'
    }
  ];

  const modernRelevance = [
    {
      title: 'Kshara Sutra Therapy',
      description: 'Ancient technique for fistula-in-ano treatment, now recognized globally as a minimally invasive alternative to surgery',
      impact: 'Used in over 50 countries with 85-95% success rate'
    },
    {
      title: 'Agnikarma (Therapeutic Cautery)',
      description: 'Controlled thermal therapy for pain management and tissue healing',
      impact: 'Modern applications in chronic pain and sports injuries'
    },
    {
      title: 'Jalaukavacharana (Leech Therapy)',
      description: 'Bloodletting therapy using medicinal leeches for various conditions',
      impact: 'FDA-approved for microsurgery and venous congestion'
    },
    {
      title: 'Raktamokshana (Bloodletting)',
      description: 'Controlled blood removal for specific therapeutic purposes',
      impact: 'Used in polycythemia and certain dermatological conditions'
    }
  ];

  const educationPath = [
    {
      level: 'Undergraduate (BAMS)',
      duration: '5.5 years (4.5 years + 1 year internship)',
      focus: 'Foundation in Shalya Tantra principles, basic surgical skills, and clinical exposure',
      subjects: ['Shalya Tantra theory', 'Surgical anatomy', 'Pre & post-operative care', 'Basic procedures']
    },
    {
      level: 'Postgraduate (MS Shalya Tantra)',
      duration: '3 years',
      focus: 'Advanced surgical training, research, and specialization in specific areas',
      subjects: ['Advanced surgical techniques', 'Research methodology', 'Specialized procedures', 'Teaching skills']
    },
    {
      level: 'Fellowship & Super-specialization',
      duration: '1-2 years',
      focus: 'Expertise in specific surgical domains like Kshara Sutra, Plastic Surgery, etc.',
      subjects: ['Specialized techniques', 'Advanced procedures', 'Clinical research', 'Innovation']
    }
  ];

  const filteredBranches = selectedBranch === 'all' 
    ? branches 
    : branches.filter(b => b.id === selectedBranch);

  return (
    <div className="shalya-tantra-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content text-center">
            <h1>
              <span className="sanskrit">शल्य तन्त्र</span>
              <br />
              Shalya Tantra
            </h1>
            <p className="hero-subtitle">
              The Ancient Science of Surgery | Ayurvedic Surgical Excellence | Bridging Tradition and Innovation
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">300+</span>
                <span className="stat-label">Surgical Procedures</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">120+</span>
                <span className="stat-label">Surgical Instruments</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2500+</span>
                <span className="stat-label">Years of Legacy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="content-card">
            <h2>What is Shalya Tantra?</h2>
            <div className="intro-content">
              <p className="lead">
                <strong>Shalya Tantra</strong> is one of the eight major branches of Ayurveda, dedicated to the 
                science and art of surgery. The term "Shalya" refers to foreign bodies or surgical interventions, 
                while "Tantra" means a systematic science or technique.
              </p>
              <p>
                This ancient surgical discipline, primarily documented in the <strong>Sushruta Samhita</strong>, 
                encompasses a comprehensive understanding of surgical anatomy, operative techniques, pre and 
                post-operative care, and the management of various surgical conditions. Shalya Tantra represents 
                one of the most advanced surgical systems of the ancient world.
              </p>
              <p>
                Modern Shalya Tantra integrates classical Ayurvedic surgical wisdom with contemporary medical 
                science, creating a unique approach that combines time-tested techniques with modern technology 
                and evidence-based practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Fundamental Procedures */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Ashtavidha Shastra Karma</h2>
            <p>The Eight Fundamental Surgical Procedures</p>
          </div>
          <div className="procedures-grid">
            {eightProcedures.map((procedure, index) => (
              <div key={index} className="procedure-card card">
                <div className="procedure-number">{index + 1}</div>
                <h3>{procedure.name}</h3>
                <p className="sanskrit-text">{procedure.sanskrit}</p>
                <p className="procedure-description">{procedure.description}</p>
                <div className="procedure-applications">
                  <Star size={16} />
                  <span>{procedure.applications}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches of Shalya Tantra */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Branches of Shalya Tantra</h2>
            <p>Specialized surgical domains in Ayurvedic practice</p>
          </div>
          
          <div className="branch-filters">
            <button 
              className={`filter-btn ${selectedBranch === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('all')}
            >
              All Branches
            </button>
            {branches.map(branch => (
              <button
                key={branch.id}
                className={`filter-btn ${selectedBranch === branch.id ? 'active' : ''}`}
                onClick={() => setSelectedBranch(branch.id)}
              >
                {branch.name}
              </button>
            ))}
          </div>

          <div className="branches-grid">
            {filteredBranches.map((branch, index) => (
              <div key={index} className="branch-card card" style={{ borderTopColor: branch.color }}>
                <div className="branch-icon" style={{ color: branch.color }}>
                  <branch.icon size={32} />
                </div>
                <h3>{branch.name}</h3>
                <p className="branch-description">{branch.description}</p>
                <div className="branch-procedures">
                  <h4>Key Procedures:</h4>
                  <ul>
                    {branch.procedures.map((proc, idx) => (
                      <li key={idx}>
                        <ArrowRight size={16} />
                        <span>{proc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Relevance */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Modern Clinical Applications</h2>
            <p>Ancient techniques validated by contemporary research</p>
          </div>
          <div className="relevance-grid">
            {modernRelevance.map((item, index) => (
              <div key={index} className="relevance-card card">
                <Award size={24} className="relevance-icon" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="impact-badge">
                  <Star size={16} />
                  <span>{item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Path */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Educational Pathway in Shalya Tantra</h2>
            <p>Journey to becoming an Ayurvedic surgeon</p>
          </div>
          <div className="education-timeline">
            {educationPath.map((level, index) => (
              <div key={index} className="education-card card">
                <div className="education-level">
                  <h3>{level.level}</h3>
                  <span className="duration">{level.duration}</span>
                </div>
                <p className="education-focus">{level.focus}</p>
                <div className="education-subjects">
                  <h4>Core Areas:</h4>
                  <div className="subjects-list">
                    {level.subjects.map((subject, idx) => (
                      <span key={idx} className="subject-tag">{subject}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Learning Resources</h2>
            <p>Comprehensive materials for students and practitioners</p>
          </div>
          <div className="resources-grid">
            <Link to="/sushruta-samhita" className="resource-card card">
              <BookOpen size={32} />
              <h3>Sushruta Samhita</h3>
              <p>Complete text with translations and commentary</p>
              <span className="resource-link">
                Explore Now <ArrowRight size={16} />
              </span>
            </Link>
            <Link to="/textbooks" className="resource-card card">
              <Download size={32} />
              <h3>Textbooks & Guides</h3>
              <p>UG/PG study materials and reference books</p>
              <span className="resource-link">
                Access Materials <ArrowRight size={16} />
              </span>
            </Link>
            <Link to="/research" className="resource-card card">
              <Search size={32} />
              <h3>Research Papers</h3>
              <p>Latest studies and clinical research</p>
              <span className="resource-link">
                Browse Research <ArrowRight size={16} />
              </span>
            </Link>
            <Link to="/syllabus-tracker" className="resource-card card">
              <Activity size={32} />
              <h3>Syllabus Tracker</h3>
              <p>Track your academic progress</p>
              <span className="resource-link">
                Start Tracking <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="cta-section text-center">
            <h2>Begin Your Journey in Shalya Tantra</h2>
            <p>
              Explore the rich heritage of Ayurvedic surgery and discover how ancient wisdom 
              meets modern medical practice.
            </p>
            <div className="cta-buttons">
              <Link to="/textbooks" className="btn btn-primary btn-large">
                <BookOpen size={20} />
                Start Learning
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                <Users size={20} />
                Connect with Experts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShalyaTantra;

