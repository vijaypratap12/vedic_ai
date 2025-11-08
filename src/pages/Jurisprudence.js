import React, { useState } from 'react';
import { 
  Shield, 
  FileText, 
  Download, 
  Search, 
  BookOpen, 
  Scale,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Calendar,
  Award,
  Users,
  Gavel,
  ScrollText
} from 'lucide-react';

const Jurisprudence = () => {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const states = [
    'all', 'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 
    'Gujarat', 'Haryana', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
    'Maharashtra', 'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu', 
    'Telangana', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const ncismGuidelines = [
    {
      title: "NCISM Surgical Practice Guidelines 2024",
      category: "Core Guidelines",
      updated: "2024-01-15",
      type: "Official Document",
      pages: 45,
      description: "Comprehensive guidelines for Ayurvedic surgical practice as per NCISM regulations.",
      downloadUrl: "#",
      status: "Current"
    },
    {
      title: "Scope of Practice for BAMS Graduates",
      category: "Practice Scope",
      updated: "2023-11-20",
      type: "Regulation",
      pages: 12,
      description: "Defined scope of surgical procedures permissible for BAMS graduates.",
      downloadUrl: "#",
      status: "Current"
    },
    {
      title: "MS Shalya Tantra Practice Standards",
      category: "Postgraduate Practice",
      updated: "2023-10-10",
      type: "Standards",
      pages: 28,
      description: "Practice standards and surgical permissions for MS Shalya Tantra specialists.",
      downloadUrl: "#",
      status: "Current"
    }
  ];

  const stateRegulations = [
    {
      state: "Karnataka",
      title: "Karnataka Ayurvedic Surgery Regulations",
      lastUpdated: "2023-12-01",
      keyPoints: [
        "Registration with State Board mandatory",
        "Specific procedures listed for BAMS graduates",
        "Hospital affiliation requirements",
        "Continuing education mandates"
      ],
      downloadUrl: "#"
    },
    {
      state: "Maharashtra",
      title: "Maharashtra Ayurvedic Practice Act",
      lastUpdated: "2023-09-15",
      keyPoints: [
        "State license required for practice",
        "Surgical procedure categorization",
        "Patient consent protocols",
        "Emergency care provisions"
      ],
      downloadUrl: "#"
    },
    {
      state: "Gujarat", 
      title: "Gujarat Ayurvedic Surgery Guidelines",
      lastUpdated: "2023-08-20",
      keyPoints: [
        "Board examination for surgical practice",
        "Hospital infrastructure requirements",
        "Referral system protocols",
        "Quality assurance measures"
      ],
      downloadUrl: "#"
    }
  ];

  const ethicalFramework = [
    {
      title: "Patient Consent in Ayurvedic Surgery",
      description: "Guidelines for obtaining informed consent from patients for Ayurvedic surgical procedures.",
      sections: ["Pre-operative counseling", "Risk disclosure", "Alternative treatments", "Documentation"]
    },
    {
      title: "Surgical Competency Standards",
      description: "Standards for ensuring surgeon competency and patient safety in Ayurvedic surgical practice.",
      sections: ["Training requirements", "Skill assessment", "Continuing education", "Peer review"]
    },
    {
      title: "Integration with Modern Medicine",
      description: "Ethical considerations for integrating Ayurvedic surgery with modern medical practice.",
      sections: ["Collaborative care", "Referral protocols", "Emergency management", "Documentation standards"]
    }
  ];

  const courtRulings = [
    {
      case: "Supreme Court Ruling on Ayurvedic Surgery",
      date: "2023-03-15",
      summary: "Landmark judgment clarifying the scope of surgical practice for Ayurvedic practitioners.",
      impact: "High",
      relevantStates: "All India"
    },
    {
      case: "Karnataka High Court - BAMS Practice Rights",
      date: "2022-11-10",
      summary: "Court ruling on the surgical practice rights of BAMS graduates in Karnataka.",
      impact: "Medium",
      relevantStates: "Karnataka"
    },
    {
      case: "Delhi High Court - Hospital Privileges",
      date: "2022-08-22",
      summary: "Judgment on hospital privileges for Ayurvedic surgeons in Delhi.",
      impact: "Medium",
      relevantStates: "Delhi"
    }
  ];

  return (
    <div className="jurisprudence-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>
              <Shield size={48} className="hero-icon" />
              Surgical Jurisprudence & Policy Desk
            </h1>
            <p>
              Complete legal framework, NCISM guidelines, and state-wise regulations 
              for Ayurvedic surgical practice in India.
            </p>
            <div className="hero-badges">
              <span className="badge badge-primary">NCISM Aligned</span>
              <span className="badge badge-success">Updated 2024</span>
              <span className="badge badge-info">All States Covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="section">
        <div className="container">
          <div className="quick-nav">
            <h2>Quick Access</h2>
            <div className="grid grid-4">
              <div className="quick-nav-card card">
                <div className="card-icon">
                  <FileText size={24} />
                </div>
                <h4>NCISM Guidelines</h4>
                <p>Official central guidelines</p>
                <button className="btn btn-outline">View Guidelines</button>
              </div>
              
              <div className="quick-nav-card card">
                <div className="card-icon">
                  <MapPin size={24} />
                </div>
                <h4>State Regulations</h4>
                <p>State-specific requirements</p>
                <button className="btn btn-outline">Browse States</button>
              </div>
              
              <div className="quick-nav-card card">
                <div className="card-icon">
                  <Scale size={24} />
                </div>
                <h4>Court Rulings</h4>
                <p>Legal precedents</p>
                <button className="btn btn-outline">View Rulings</button>
              </div>
              
              <div className="quick-nav-card card">
                <div className="card-icon">
                  <ScrollText size={24} />
                </div>
                <h4>Forms & Templates</h4>
                <p>Downloadable documents</p>
                <button className="btn btn-outline">Download Forms</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section section-alt">
        <div className="container">
          <div className="search-filter-section">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search regulations, guidelines, or legal documents..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-controls">
              <select 
                className="form-control"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="ncism-guidelines">NCISM Guidelines</option>
                <option value="state-regulations">State Regulations</option>
                <option value="surgical-permissions">Surgical Permissions</option>
                <option value="ethical-framework">Ethical Framework</option>
                <option value="court-rulings">Court Rulings</option>
                <option value="consent-forms">Consent Forms</option>
              </select>
              
              <select 
                className="form-control"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="all">All States</option>
                {states.slice(1).map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* NCISM Guidelines */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>NCISM Guidelines & Standards</h2>
            <p>Official central government guidelines for Ayurvedic surgical practice</p>
          </div>
          
          <div className="guidelines-grid">
            {ncismGuidelines.map((guideline, index) => (
              <div key={index} className="guideline-card card">
                <div className="guideline-header">
                  <div className="guideline-info">
                    <h3>{guideline.title}</h3>
                    <div className="guideline-meta">
                      <span className="category-badge badge badge-primary">
                        {guideline.category}
                      </span>
                      <span className="status-badge badge badge-success">
                        {guideline.status}
                      </span>
                    </div>
                  </div>
                  <div className="guideline-actions">
                    <button className="btn btn-outline btn-small">
                      <Download size={14} />
                      Download
                    </button>
                  </div>
                </div>
                
                <p className="guideline-description">{guideline.description}</p>
                
                <div className="guideline-details">
                  <div className="detail-item">
                    <Calendar size={14} />
                    <span>Updated: {guideline.updated}</span>
                  </div>
                  <div className="detail-item">
                    <FileText size={14} />
                    <span>{guideline.pages} pages</span>
                  </div>
                  <div className="detail-item">
                    <Award size={14} />
                    <span>{guideline.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State-wise Regulations */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>State-wise Regulations</h2>
            <p>Specific requirements and regulations by state</p>
          </div>
          
          <div className="state-regulations">
            {stateRegulations.map((regulation, index) => (
              <div key={index} className="state-regulation-card card">
                <div className="regulation-header">
                  <div className="state-info">
                    <h3>
                      <MapPin size={20} />
                      {regulation.state}
                    </h3>
                    <h4>{regulation.title}</h4>
                    <p className="last-updated">Last Updated: {regulation.lastUpdated}</p>
                  </div>
                  <button className="btn btn-primary">
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
                
                <div className="key-points">
                  <h5>Key Points:</h5>
                  <ul>
                    {regulation.keyPoints.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        <CheckCircle size={14} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Framework */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Ethical Framework</h2>
            <p>Guidelines for ethical practice in Ayurvedic surgery</p>
          </div>
          
          <div className="ethical-framework grid grid-3">
            {ethicalFramework.map((framework, index) => (
              <div key={index} className="framework-card card">
                <div className="framework-header">
                  <div className="framework-icon">
                    <Scale size={24} />
                  </div>
                  <h3>{framework.title}</h3>
                </div>
                
                <p>{framework.description}</p>
                
                <div className="framework-sections">
                  <h5>Key Sections:</h5>
                  <ul>
                    {framework.sections.map((section, sectionIndex) => (
                      <li key={sectionIndex}>{section}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="btn btn-outline">
                  <BookOpen size={16} />
                  Read Full Document
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Court Rulings */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Important Court Rulings</h2>
            <p>Legal precedents affecting Ayurvedic surgical practice</p>
          </div>
          
          <div className="court-rulings">
            {courtRulings.map((ruling, index) => (
              <div key={index} className="ruling-card card">
                <div className="ruling-header">
                  <div className="ruling-info">
                    <h3>
                      <Gavel size={20} />
                      {ruling.case}
                    </h3>
                    <div className="ruling-meta">
                      <span className="ruling-date">
                        <Calendar size={14} />
                        {ruling.date}
                      </span>
                      <span className={`impact-badge badge ${
                        ruling.impact === 'High' ? 'badge-success' :
                        ruling.impact === 'Medium' ? 'badge-warning' : 'badge-info'
                      }`}>
                        {ruling.impact} Impact
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="ruling-summary">{ruling.summary}</p>
                
                <div className="ruling-details">
                  <div className="detail-item">
                    <MapPin size={14} />
                    <span>Applicable: {ruling.relevantStates}</span>
                  </div>
                </div>
                
                <button className="btn btn-outline">
                  <FileText size={16} />
                  Read Full Judgment
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Downloadable Resources</h2>
            <p>Forms, templates, and documents for legal compliance</p>
          </div>
          
          <div className="downloadable-resources grid grid-4">
            <div className="resource-card card">
              <div className="resource-icon">
                <ScrollText size={32} />
              </div>
              <h4>Patient Consent Forms</h4>
              <p>Standard consent forms for various procedures</p>
              <div className="resource-meta">
                <span>15 Forms Available</span>
                <span>Multi-language</span>
              </div>
              <button className="btn btn-primary">
                <Download size={16} />
                Download Package
              </button>
            </div>
            
            <div className="resource-card card">
              <div className="resource-icon">
                <FileText size={32} />
              </div>
              <h4>Operation Theatre Protocols</h4>
              <p>Standard operating procedures and checklists</p>
              <div className="resource-meta">
                <span>8 Protocols</span>
                <span>NCISM Compliant</span>
              </div>
              <button className="btn btn-primary">
                <Download size={16} />
                Download Package
              </button>
            </div>
            
            <div className="resource-card card">
              <div className="resource-icon">
                <Award size={32} />
              </div>
              <h4>Registration Forms</h4>
              <p>State board registration and licensing forms</p>
              <div className="resource-meta">
                <span>State-wise Forms</span>
                <span>Fillable PDFs</span>
              </div>
              <button className="btn btn-primary">
                <Download size={16} />
                Download Package
              </button>
            </div>
            
            <div className="resource-card card">
              <div className="resource-icon">
                <Users size={32} />
              </div>
              <h4>Practice Guidelines</h4>
              <p>Comprehensive practice management guides</p>
              <div className="resource-meta">
                <span>Complete Guide</span>
                <span>Best Practices</span>
              </div>
              <button className="btn btn-primary">
                <Download size={16} />
                Download Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Updates */}
      <section className="section section-alt">
        <div className="container">
          <div className="legal-updates">
            <div className="content-header">
              <h2>Recent Legal Updates</h2>
              <p>Stay informed about the latest changes in regulations and guidelines</p>
            </div>
            
            <div className="updates-timeline">
              <div className="timeline-item">
                <div className="timeline-date">Jan 2024</div>
                <div className="timeline-content">
                  <h4>NCISM Updates Surgical Guidelines</h4>
                  <p>New comprehensive guidelines released for Ayurvedic surgical practice</p>
                  <span className="badge badge-primary">Major Update</span>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Dec 2023</div>
                <div className="timeline-content">
                  <h4>Karnataka Regulation Amendment</h4>
                  <p>State board updates registration requirements for BAMS graduates</p>
                  <span className="badge badge-info">State Update</span>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">Nov 2023</div>
                <div className="timeline-content">
                  <h4>Supreme Court Clarification</h4>
                  <p>Important ruling on scope of practice for Ayurvedic surgeons</p>
                  <span className="badge badge-success">Court Ruling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Legal Assistance */}
      <section className="section">
        <div className="container">
          <div className="legal-assistance text-center">
            <h2>Need Legal Assistance?</h2>
            <p>
              For specific legal questions or assistance with compliance, 
              our expert panel can provide guidance.
            </p>
            <div className="assistance-options">
              <button className="btn btn-primary btn-large">
                <Users size={20} />
                Contact Legal Expert
              </button>
              <button className="btn btn-secondary btn-large">
                <AlertTriangle size={20} />
                Report Issue
              </button>
            </div>
            <p className="disclaimer">
              <small>
                <em>
                  Disclaimer: Information provided is for educational purposes only. 
                  Always consult with qualified legal professionals for specific legal advice.
                </em>
              </small>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jurisprudence; 