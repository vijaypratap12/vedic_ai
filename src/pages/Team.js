import React from 'react';
import { 
  Mail, 
  MapPin, 
  Award, 
  BookOpen, 
  Brain, 
  Users, 
  Star,
  User
} from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      id: 1,
      name: "Dr. Sameep Singh",
      title: "Founder, Project Head",
      qualification: "BAMS, PG Scholar (MS Shalya Tantra)",
      institution: "Quadra Institute of Ayurveda & Hospital, Roorkee",
      responsibilities: [
        "Vision & Leadership",
        "Core Content Development", 
        "Ayurvedic-Modern Surgical Integration",
        "AI Planning & Strategy",
        "Team Coordination"
      ],
      specialties: ["Classical Surgery "],
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
      specialties: ["Clinical Practice, ", "Surgical Techniques, ", "Medical Education"],
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
      id: 1,
      name: "Vijay Pratap Singh",
      title: "Lead Developer",
      achievements: ["C# Corner MVP", "Gen AI Leader"],
      skills: ["Full Stack Development, ", "AI/ML, ", "Cloud Architecture, ", "Product Engineering"],
      responsibilities: [
        "Platform Architecture & Development",
        "AI Integration & Implementation",
        "Technical Strategy & Innovation",
        "Team Leadership & Mentorship"
      ],
      email: "vijaypratap12121999@gmail.com",
      location: "Noida, Uttar Pradesh, India",
      bio: "Experienced product engineer driving the technical vision and implementation of the Vedic Surgery platform with expertise in AI and modern web technologies.",
      status: "Active"
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
            {/* Lead Developer Card */}
            {technicalTeam.filter(member => member.id).map((member) => (
              <div key={member.id} className="leader-card card" style={{marginBottom: '3rem'}}>
                <div className="leader-header">
                  <div className="leader-image">
                    <div className="image-placeholder">
                      <User size={48} />
                    </div>
                  </div>
                  <div className="leader-info">
                    <h3>{member.name}</h3>
                    <p className="leader-title">{member.title}</p>
                    <p className="leader-qualification">{member.designation}</p>
                    <div className="achievement-badges">
                      {member.achievements.map((achievement, index) => (
                        <span key={index} className="badge badge-primary" style={{marginRight: '0.5rem'}}>
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="leader-bio">
                  <p>{member.bio}</p>
                </div>

                <div className="leader-responsibilities">
                  <h5>Key Responsibilities:</h5>
                  <ul>
                    {member.responsibilities.map((responsibility, index) => (
                      <li key={index}>
                        <Award size={14} />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="leader-specialties">
                  <h5>Technical Expertise:</h5>
                  <div className="specialty-tags">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="specialty-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="leader-contact">
                  <div className="contact-item">
                    <Mail size={16} />
                    <span>{member.email}</span>
                  </div>
                  <div className="contact-item">
                    <MapPin size={16} />
                    <span>{member.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team; 