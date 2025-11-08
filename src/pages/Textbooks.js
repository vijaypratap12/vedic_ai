import React, { useState } from 'react';
import { 
  Download, 
  Search, 
  GraduationCap,
  FileText,
  CheckCircle,
  Clock,
  Star,
  Eye,
  Users,
  Award,
  Languages
} from 'lucide-react';

const Textbooks = () => {
  const [selectedLevel, setSelectedLevel] = useState('ug');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const textbookCategories = {
    ug: {
      title: 'BAMS Undergraduate Program',
      description: 'NCISM-aligned textbooks for BAMS students',
      books: [
        {
          id: 'ug-shalya-1',
          title: 'Fundamentals of Shalya Tantra',
          subtitle: 'Introduction to Ayurvedic Surgery',
          author: 'Dr. Sameep Singh & Dr. Saurabh Kumar',
          year: '1st Year',
          chapters: 12,
          pages: 280,
          language: ['English', 'Hindi'],
          downloadCount: 1250,
          rating: 4.8,
          topics: ['Basic Principles', 'History', 'Instruments', 'Anatomy'],
          status: 'completed'
        },
        {
          id: 'ug-shalya-2',
          title: 'Practical Shalya Tantra',
          subtitle: 'Clinical Applications & Procedures',
          author: 'Dr. Sameep Singh & Dr. Saurabh Kumar',
          year: '2nd Year',
          chapters: 15,
          pages: 350,
          language: ['English', 'Hindi'],
          downloadCount: 980,
          rating: 4.7,
          topics: ['Wound Management', 'Basic Procedures', 'Diagnosis'],
          status: 'completed'
        },
        {
          id: 'ug-shalya-3',
          title: 'Advanced Shalya Tantra',
          subtitle: 'Specialized Techniques & Modern Integration',
          author: 'Dr. Sameep Singh & Dr. Saurabh Kumar',
          year: '3rd Year',
          chapters: 18,
          pages: 420,
          language: ['English', 'Hindi'],
          downloadCount: 756,
          rating: 4.9,
          topics: ['Advanced Procedures', 'Modern Integration', 'Research'],
          status: 'in-progress'
        }
      ]
    },
    pg: {
      title: 'MS Shalya Tantra Postgraduate Program',
      description: 'Comprehensive resources for MS Shalya Tantra scholars',
      books: [
        {
          id: 'pg-shalya-1',
          title: 'Classical Shalya Tantra',
          subtitle: 'In-depth Study of Traditional Texts',
          author: 'Dr. Saurabh Kumar & Team',
          year: '1st Year PG',
          chapters: 25,
          pages: 650,
          language: ['English', 'Sanskrit', 'Hindi'],
          downloadCount: 445,
          rating: 4.9,
          topics: ['Classical Texts', 'Research Methodology', 'Advanced Theory'],
          status: 'completed'
        },
        {
          id: 'pg-shalya-2',
          title: 'Modern Surgical Integration',
          subtitle: 'Bridging Ancient Wisdom with Contemporary Practice',
          author: 'Dr. Sameep Singh & Advisory Panel',
          year: '2nd Year PG',
          chapters: 20,
          pages: 580,
          language: ['English', 'Hindi'],
          downloadCount: 312,
          rating: 4.8,
          topics: ['Modern Techniques', 'Clinical Research', 'Evidence-based Practice'],
          status: 'completed'
        },
        {
          id: 'pg-shalya-3',
          title: 'Thesis & Research Guide',
          subtitle: 'Complete Guide for PG Research',
          author: 'Dr. Sameep Singh & Research Team',
          year: 'Final Year PG',
          chapters: 15,
          pages: 320,
          language: ['English'],
          downloadCount: 278,
          rating: 4.7,
          topics: ['Research Design', 'Data Analysis', 'Publication'],
          status: 'in-progress'
        }
      ]
    }
  };

  const syllabusMapping = [
    {
      semester: 'UG - 1st Year',
      subjects: ['Introduction to Shalya Tantra', 'Basic Anatomy', 'Fundamental Principles'],
      completion: 100
    },
    {
      semester: 'UG - 2nd Year', 
      subjects: ['Practical Procedures', 'Wound Management', 'Clinical Diagnosis'],
      completion: 100
    },
    {
      semester: 'UG - 3rd Year',
      subjects: ['Advanced Techniques', 'Modern Integration', 'Research Methods'],
      completion: 75
    },
    {
      semester: 'PG - 1st Year',
      subjects: ['Classical Literature', 'Research Methodology', 'Advanced Theory'],
      completion: 100
    },
    {
      semester: 'PG - 2nd Year',
      subjects: ['Clinical Practice', 'Modern Integration', 'Case Studies'],
      completion: 85
    },
    {
      semester: 'PG - Final Year',
      subjects: ['Thesis Work', 'Research Project', 'Publication'],
      completion: 60
    }
  ];

  const currentBooks = textbookCategories[selectedLevel].books;

  return (
    <div className="textbooks-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>UG/PG Shalya Tantra Textbooks</h1>
            <p>
              Comprehensive NCISM-aligned educational content authored by leading Ayurvedic surgeons, 
              available in multiple languages with interactive features.
            </p>
            <div className="level-switcher">
              <button 
                className={`btn ${selectedLevel === 'ug' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedLevel('ug')}
              >
                <GraduationCap size={20} />
                BAMS (UG)
              </button>
              <button 
                className={`btn ${selectedLevel === 'pg' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedLevel('pg')}
              >
                <Award size={20} />
                MS Shalya Tantra (PG)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section">
        <div className="container">
          <div className="search-filter-section">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search textbooks, topics, or authors..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-options">
              <select 
                className="form-control"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="all">All Subjects</option>
                <option value="theory">Theoretical</option>
                <option value="practical">Practical</option>
                <option value="research">Research</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Current Level Overview */}
      <section className="section section-alt">
        <div className="container">
          <div className="level-overview">
            <div className="overview-header">
              <h2>{textbookCategories[selectedLevel].title}</h2>
              <p>{textbookCategories[selectedLevel].description}</p>
            </div>
            <div className="overview-stats">
              <div className="stat-grid">
                <div className="stat-item">
                  <span className="stat-number">{currentBooks.length}</span>
                  <span className="stat-label">Textbooks</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">
                    {currentBooks.reduce((sum, book) => sum + book.chapters, 0)}
                  </span>
                  <span className="stat-label">Total Chapters</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">
                    {currentBooks.reduce((sum, book) => sum + book.downloadCount, 0).toLocaleString()}
                  </span>
                  <span className="stat-label">Downloads</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">
                    {(currentBooks.reduce((sum, book) => sum + book.rating, 0) / currentBooks.length).toFixed(1)}
                  </span>
                  <span className="stat-label">Avg Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Textbooks Grid */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Available Textbooks</h2>
            <p>Download and access comprehensive study materials</p>
          </div>
          
          <div className="textbooks-grid">
            {currentBooks.map((book) => (
              <div key={book.id} className="textbook-card card">
                <div className="book-header">
                  <div className="book-status">
                    {book.status === 'completed' ? (
                      <span className="badge badge-success">
                        <CheckCircle size={14} />
                        Complete
                      </span>
                    ) : (
                      <span className="badge badge-warning">
                        <Clock size={14} />
                        In Progress
                      </span>
                    )}
                  </div>
                  <div className="book-rating">
                    <Star size={16} fill="currentColor" />
                    <span>{book.rating}</span>
                  </div>
                </div>

                <div className="book-content">
                  <h3>{book.title}</h3>
                  <p className="book-subtitle">{book.subtitle}</p>
                  <p className="book-author">by {book.author}</p>
                  
                  <div className="book-details">
                    <div className="detail-item">
                      <span className="detail-label">Year:</span>
                      <span>{book.year}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Chapters:</span>
                      <span>{book.chapters}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Pages:</span>
                      <span>{book.pages}</span>
                    </div>
                  </div>

                  <div className="book-languages">
                    <span className="detail-label">Languages:</span>
                    <div className="language-tags">
                      {book.language.map((lang, index) => (
                        <span key={index} className="language-tag">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="book-topics">
                    <span className="detail-label">Topics:</span>
                    <div className="topic-tags">
                      {book.topics.map((topic, index) => (
                        <span key={index} className="topic-tag">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="book-stats">
                    <div className="stat">
                      <Download size={16} />
                      <span>{book.downloadCount.toLocaleString()} downloads</span>
                    </div>
                  </div>
                </div>

                <div className="book-actions">
                  <button className="btn btn-primary">
                    <Eye size={16} />
                    Read Online
                  </button>
                  <button className="btn btn-outline">
                    <Download size={16} />
                    Download PDF
                  </button>
                  <button className="btn btn-outline">
                    <Languages size={16} />
                    Audio Version
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NCISM Syllabus Mapping */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>NCISM Syllabus Alignment</h2>
            <p>Track your progress against the official curriculum</p>
          </div>
          
          <div className="syllabus-mapping">
            <div className="mapping-grid">
              {syllabusMapping.map((semester, index) => (
                <div key={index} className="semester-card card">
                  <div className="semester-header">
                    <h4>{semester.semester}</h4>
                    <div className="completion-badge">
                      <span className={`badge ${
                        semester.completion === 100 ? 'badge-success' :
                        semester.completion >= 75 ? 'badge-warning' : 'badge-info'
                      }`}>
                        {semester.completion}% Complete
                      </span>
                    </div>
                  </div>
                  
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${semester.completion}%` }}
                    ></div>
                  </div>
                  
                  <div className="semester-subjects">
                    <h5>Key Subjects:</h5>
                    <ul>
                      {semester.subjects.map((subject, subIndex) => (
                        <li key={subIndex}>
                          <CheckCircle size={14} />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Additional Learning Resources</h2>
            <p>Supplementary materials to enhance your learning experience</p>
          </div>
          
          <div className="grid grid-3">
            <div className="resource-card card">
              <div className="card-icon">
                <FileText size={24} />
              </div>
              <h4>Study Guides</h4>
              <p>Chapter-wise summary and key points for quick revision</p>
              <button className="btn btn-outline">Access Guides</button>
            </div>
            
            <div className="resource-card card">
              <div className="card-icon">
                <Users size={24} />
              </div>
              <h4>Discussion Groups</h4>
              <p>Join study groups and discuss concepts with fellow students</p>
              <button className="btn btn-outline">Join Groups</button>
            </div>
            
            <div className="resource-card card">
              <div className="card-icon">
                <Award size={24} />
              </div>
              <h4>Assessment Tests</h4>
              <p>Practice tests and quizzes to evaluate your understanding</p>
              <button className="btn btn-outline">Take Tests</button>
            </div>
          </div>
        </div>
      </section>

      {/* Author Information */}
      <section className="section section-alt">
        <div className="container">
          <div className="author-section">
            <div className="content-header">
              <h2>About the Authors</h2>
              <p>Learn about the experts behind these comprehensive textbooks</p>
            </div>
            
            <div className="grid grid-2">
              <div className="author-card card">
                <h4>Dr. Sameep Singh</h4>
                <p className="author-title">BAMS, PG Scholar (MS Shalya Tantra)</p>
                <p className="author-institution">Quadra Institute of Ayurveda & Hospital, Roorkee</p>
                <p>Lead author and project founder with expertise in classical Ayurvedic surgery and modern integration.</p>
                <div className="author-specialties">
                  <span className="specialty-tag">Classical Surgery</span>
                  <span className="specialty-tag">Modern Integration</span>
                  <span className="specialty-tag">AI in Medicine</span>
                </div>
              </div>
              
              <div className="author-card card">
                <h4>Dr. Saurabh Kumar</h4>
                <p className="author-title">BAMS, MS (Shalya Tantra)</p>
                <p className="author-institution">Chief Clinical Advisor</p>
                <p>Experienced practitioner and educator with extensive clinical experience in Ayurvedic surgical procedures.</p>
                <div className="author-specialties">
                  <span className="specialty-tag">Clinical Practice</span>
                  <span className="specialty-tag">Surgical Techniques</span>
                  <span className="specialty-tag">Medical Education</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Textbooks; 