import React from 'react';
import { 
  Mail, 
  MapPin, 
  Award, 
  BookOpen, 
  Brain, 
  Users, 
  Code, 
  Palette,
  Heart,
  Star,
  Github,
  Linkedin,
  ExternalLink,
  User,
  FileText
} from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      id: 1,
      name: "Dr. Sameep Singh",
      title: "Founder, Project Head & Lead Developer",
      qualification: "BAMS, PG Scholar (MS Shalya Tantra)",
      institution: "Quadra Institute of Ayurveda & Hospital, Roorkee",
      responsibilities: [
        "Vision & Leadership",
        "Core Content Development", 
        "Ayurvedic-Modern Surgical Integration",
        "AI Planning & Strategy",
        "Team Coordination"
      ],
      specialties: ["Classical Surgery", "AI Integration", "Educational Technology"],
      email: "sameep@vedicsurgery.org",
      location: "Roorkee, Uttarakhand",
      image: "/images/team/dr-sameep-singh.jpg",
      bio: "Leading the revolution in Ayurvedic surgical education through innovative technology integration and classical wisdom preservation.",
      achievements: [
        "Published 15+ research papers",
        "Pioneered AI integration in Ayurveda",
        "Founded Vedic Surgery Project"
      ]
    },
    {
      id: 2,
      name: "Dr. Saurabh Kumar",
      title: "Chief Author & Senior Clinical Advisor",
      qualification: "BAMS, MS (Shalya Tantra)",
      institution: "Senior Clinical Practitioner",
      responsibilities: [
        "Chief Content Reviewer",
        "Ayurvedic Surgical Guidance",
        "Chapter Authentication",
        "Clinical Experience Integration"
      ],
      specialties: ["Clinical Practice", "Surgical Techniques", "Medical Education"],
      email: "saurabh@vedicsurgery.org",
      location: "India",
      image: "/images/team/dr-saurabh-kumar.jpg",
      bio: "Experienced clinician bridging traditional Ayurvedic surgical practices with modern educational methodologies.",
      achievements: [
        "20+ years clinical experience",
        "Authored 5 textbooks",
        "Trained 200+ students"
      ]
    }
  ];

  const advisoryPanel = [
    {
      name: "Dr. Mahesh Pande",
      title: "Senior Surgical Advisor",
      specialty: "Endourology + Ayurveda",
      responsibility: "Modern surgical expertise, procedure-based guidance",
      institution: "Leading Medical Institute",
      status: "To be confirmed"
    },
    {
      name: "Dr. Deepanshu Kumar Mishra",
      title: "Academic Advisor", 
      specialty: "NCISM Curriculum",
      responsibility: "NCISM syllabus alignment, textbook mentorship",
      institution: "Guru Nanak Ayurvedic Medical College, Muktsar",
      status: "To be confirmed"
    },
    {
      name: "AI Policy Consultant",
      title: "Ayurveda AI Ethics & Research Expert",
      specialty: "AI Ethics in Traditional Medicine",
      responsibility: "Oversight on AI integration in traditional systems",
      institution: "Independent / AYUSH / NCISM",
      status: "To be filled"
    }
  ];

  const technicalTeam = [
    {
      role: "AI & Machine Learning Developer",
      skills: ["Python", "NLP", "Education-based AI"],
      responsibilities: ["Build intelligent modules", "Personalized learning systems"],
      status: "Hiring"
    },
    {
      role: "Software Developer (Web + Mobile)",
      skills: ["React", "Flutter", "Django"],
      responsibilities: ["Develop platform", "Interactive textbook features"],
      status: "Hiring"
    },
    {
      role: "AR/VR Simulation Developer",
      skills: ["Unity", "Unreal Engine"],
      responsibilities: ["Virtual surgery demos", "Kshara Sutra simulations"],
      status: "Hiring"
    },
    {
      role: "UI/UX Designer",
      skills: ["Figma", "Adobe XD"],
      responsibilities: ["Engaging interface design", "Student experience optimization"],
      status: "Hiring"
    },
    {
      role: "Data Integration Specialist",
      skills: ["Healthcare data pipelines"],
      responsibilities: ["Hospital OPD integration", "Patient case learning tools"],
      status: "Hiring"
    }
  ];

  const contentTeam = [
    {
      role: "Editor (English-Hindi-Sanskrit)",
      responsibility: "Tri-lingual content refinement and formatting",
      status: "Hiring"
    },
    {
      role: "Illustrator / Medical Animator",
      responsibility: "Create diagrams, 2D/3D visuals, procedural illustrations",
      status: "Hiring"
    },
    {
      role: "Research Associate",
      responsibility: "Literature review, evidence synthesis, citation management",
      status: "Hiring"
    }
  ];

  const supportTeam = [
    {
      role: "Funding & Grant Coordinator",
      responsibility: "Apply for AYUSH, DST, CSR, and international grants",
      status: "Hiring"
    },
    {
      role: "Publishing Liaison",
      responsibility: "Coordination with Chaukhamba or other medical publishers",
      status: "Hiring"
    },
    {
      role: "Social Media & Outreach Coordinator",
      responsibility: "Awareness building, conferences, beta testers, student feedback",
      status: "Hiring"
    }
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Our Team</h1>
            <p>
              Meet the passionate experts, educators, and innovators behind the Vedic Surgery project - 
              dedicated to revolutionizing Ayurvedic surgical education.
            </p>
          </div>
        </div>
      </section>

      {/* Project Leadership */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Project Leadership</h2>
            <p>Visionary leaders driving the integration of classical wisdom with modern technology</p>
          </div>

          <div className="leadership-grid">
            {leadership.map((leader) => (
              <div key={leader.id} className="leader-card card">
                <div className="leader-header">
                  <div className="leader-image">
                    <div className="image-placeholder">
                      <User size={48} />
                    </div>
                  </div>
                  <div className="leader-info">
                    <h3>{leader.name}</h3>
                    <p className="leader-title">{leader.title}</p>
                    <p className="leader-qualification">{leader.qualification}</p>
                    <p className="leader-institution">{leader.institution}</p>
                  </div>
                </div>

                <div className="leader-bio">
                  <p>{leader.bio}</p>
                </div>

                <div className="leader-responsibilities">
                  <h5>Key Responsibilities:</h5>
                  <ul>
                    {leader.responsibilities.map((responsibility, index) => (
                      <li key={index}>
                        <Award size={14} />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="leader-specialties">
                  <h5>Specialties:</h5>
                  <div className="specialty-tags">
                    {leader.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="leader-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {leader.achievements.map((achievement, index) => (
                      <li key={index}>
                        <Star size={14} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="leader-contact">
                  <div className="contact-item">
                    <Mail size={16} />
                    <span>{leader.email}</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={16} />
                    <span>{leader.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Panel */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Advisory & Mentorship Panel</h2>
            <p>Distinguished experts providing strategic guidance and domain expertise</p>
          </div>

          <div className="advisory-grid grid grid-3">
            {advisoryPanel.map((advisor, index) => (
              <div key={index} className="advisor-card card">
                <div className="advisor-header">
                  <h4>{advisor.name}</h4>
                  <p className="advisor-title">{advisor.title}</p>
                  <span className={`status-badge badge ${
                    advisor.status === 'To be confirmed' ? 'badge-warning' : 'badge-info'
                  }`}>
                    {advisor.status}
                  </span>
                </div>
                
                <div className="advisor-details">
                  <div className="detail-item">
                    <strong>Specialty:</strong>
                    <span>{advisor.specialty}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Institution:</strong>
                    <span>{advisor.institution}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Responsibility:</strong>
                    <p>{advisor.responsibility}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Technical & Development Team</h2>
            <p>Building the technological foundation for modern Ayurvedic education</p>
          </div>

          <div className="team-section">
            <div className="hiring-notice">
              <div className="notice-content">
                <Heart size={24} />
                <h4>Join Our Mission</h4>
                <p>We're actively seeking talented individuals to join our technical team. Help us revolutionize medical education!</p>
                <button className="btn btn-primary">
                  <Mail size={16} />
                  Apply Now
                </button>
              </div>
            </div>

            <div className="positions-grid grid grid-2">
              {technicalTeam.map((position, index) => (
                <div key={index} className="position-card card">
                  <div className="position-header">
                    <div className="position-icon">
                      {position.role.includes('AI') ? <Brain size={24} /> :
                       position.role.includes('Developer') ? <Code size={24} /> :
                       position.role.includes('Designer') ? <Palette size={24} /> :
                       <Users size={24} />}
                    </div>
                    <div className="position-info">
                      <h4>{position.role}</h4>
                      <span className="status-badge badge badge-success">{position.status}</span>
                    </div>
                  </div>

                  <div className="position-skills">
                    <h5>Required Skills:</h5>
                    <div className="skill-tags">
                      {position.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="position-responsibilities">
                    <h5>Responsibilities:</h5>
                    <ul>
                      {position.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="btn btn-outline">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content & Editorial Team */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Content Development & Editorial Team</h2>
            <p>Ensuring quality, accuracy, and accessibility of educational content</p>
          </div>

          <div className="content-team-grid grid grid-3">
            {contentTeam.map((member, index) => (
              <div key={index} className="content-member-card card">
                <div className="member-icon">
                  {member.role.includes('Editor') ? <BookOpen size={24} /> :
                   member.role.includes('Illustrator') ? <Palette size={24} /> :
                   <FileText size={24} />}
                </div>
                <h4>{member.role}</h4>
                <p>{member.responsibility}</p>
                <span className="status-badge badge badge-info">{member.status}</span>
                <button className="btn btn-outline btn-small">Apply</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Outreach Team */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Support & Outreach Team</h2>
            <p>Building partnerships, securing funding, and expanding our reach</p>
          </div>

          <div className="support-team-grid grid grid-3">
            {supportTeam.map((member, index) => (
              <div key={index} className="support-member-card card">
                <div className="member-icon">
                  {member.role.includes('Funding') ? <Award size={24} /> :
                   member.role.includes('Publishing') ? <BookOpen size={24} /> :
                   <Users size={24} />}
                </div>
                <h4>{member.role}</h4>
                <p>{member.responsibility}</p>
                <span className="status-badge badge badge-warning">{member.status}</span>
                <button className="btn btn-outline btn-small">Apply</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="join-us-section text-center">
            <h2>Join Our Mission</h2>
            <p>
              Be part of the revolutionary change in Ayurvedic surgical education. 
              We welcome contributors, volunteers, advisors, and supporters from all backgrounds.
            </p>
            
            <div className="contribution-types grid grid-4">
              <div className="contribution-card">
                <div className="contrib-icon">
                  <Code size={32} />
                </div>
                <h4>Developers</h4>
                <p>Help build the platform</p>
                <button className="btn btn-outline">Join Team</button>
              </div>
              
              <div className="contribution-card">
                <div className="contrib-icon">
                  <BookOpen size={32} />
                </div>
                <h4>Content Experts</h4>
                <p>Share your knowledge</p>
                <button className="btn btn-outline">Contribute</button>
              </div>
              
              <div className="contribution-card">
                <div className="contrib-icon">
                  <Award size={32} />
                </div>
                <h4>Advisors</h4>
                <p>Provide strategic guidance</p>
                <button className="btn btn-outline">Advise</button>
              </div>
              
              <div className="contribution-card">
                <div className="contrib-icon">
                  <Heart size={32} />
                </div>
                <h4>Supporters</h4>
                <p>Fund the mission</p>
                <button className="btn btn-outline">Support</button>
              </div>
            </div>

            <div className="contact-cta">
              <h3>Ready to make a difference?</h3>
              <p>Contact us to learn more about opportunities to contribute</p>
              <div className="cta-buttons">
                <button className="btn btn-primary btn-large">
                  <Mail size={20} />
                  Contact Us
                </button>
                <button className="btn btn-secondary btn-large">
                  <Github size={20} />
                  View on GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team; 