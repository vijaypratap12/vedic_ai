import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  FileText, 
  Calendar, 
  MapPin, 
  User, 
  Eye,
  Upload,
  BookOpen,
  Award,
  TrendingUp,
  Database,
  Star
} from 'lucide-react';

const Research = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedInstitution, setSelectedInstitution] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  const researchCategories = [
    'all', 'thesis', 'research-paper', 'case-study', 'review-article', 'clinical-trial'
  ];

  const years = ['all', '2024', '2023', '2022', '2021', '2020', '2019', '2018'];

  const institutions = [
    'all',
    'AIIMS Delhi',
    'BHU Varanasi', 
    'Gujarat Ayurved University',
    'IPGT&RA Jamnagar',
    'National Institute of Ayurveda',
    'Rajiv Gandhi University',
    'SDM College Udupi',
    'Tilak Ayurved Mahavidyalaya'
  ];

  const researchPapers = [
    {
      id: 1,
      title: "Efficacy of Kshara Sutra Therapy in Management of Fistula-in-Ano: A Clinical Study",
      authors: ["Dr. Rajesh Kumar", "Dr. Priya Sharma"],
      institution: "IPGT&RA Jamnagar",
      year: 2024,
      category: "clinical-trial",
      pages: 45,
      downloadCount: 234,
      views: 1567,
      abstract: "A comprehensive clinical study evaluating the effectiveness of Kshara Sutra therapy in treating anal fistula compared to conventional surgical methods.",
      keywords: ["Kshara Sutra", "Fistula", "Anal Surgery", "Clinical Trial"],
      status: "published",
      rating: 4.7
    },
    {
      id: 2,
      title: "Agnikarma in Pain Management: Ancient Technique for Modern Practice",
      authors: ["Dr. Sameep Singh", "Dr. Anil Gupta"],
      institution: "Quadra Institute of Ayurveda",
      year: 2024,
      category: "research-paper",
      pages: 32,
      downloadCount: 187,
      views: 923,
      abstract: "Exploration of Agnikarma (therapeutic cauterization) as an effective pain management technique in contemporary medical practice.",
      keywords: ["Agnikarma", "Pain Management", "Cauterization", "Traditional Medicine"],
      status: "published",
      rating: 4.8
    },
    {
      id: 3,
      title: "Modern Integration of Sushruta's Surgical Principles in Contemporary Operating Theaters",
      authors: ["Dr. Saurabh Kumar", "Dr. Meera Joshi"],
      institution: "BHU Varanasi",
      year: 2023,
      category: "review-article",
      pages: 28,
      downloadCount: 456,
      views: 2134,
      abstract: "A comprehensive review of how ancient surgical principles from Sushruta Samhita can be integrated into modern surgical practice.",
      keywords: ["Sushruta", "Modern Surgery", "Integration", "Surgical Principles"],
      status: "published",
      rating: 4.9
    },
    {
      id: 4,
      title: "Wound Healing Properties of Traditional Ayurvedic Formulations: Laboratory Analysis",
      authors: ["Dr. Kavita Patel", "Dr. Rohit Mehta"],
      institution: "Gujarat Ayurved University",
      year: 2023,
      category: "research-paper",
      pages: 38,
      downloadCount: 312,
      views: 1445,
      abstract: "Scientific analysis of wound healing properties in traditional Ayurvedic formulations used in surgical practice.",
      keywords: ["Wound Healing", "Ayurvedic Formulations", "Laboratory Study", "Traditional Medicine"],
      status: "published",
      rating: 4.6
    }
  ];

  const featuredTheses = [
    {
      title: "AI-Assisted Diagnosis in Ayurvedic Surgery",
      author: "Dr. Priya Sharma",
      institution: "AIIMS Delhi",
      year: "2024",
      category: "PhD Thesis"
    },
    {
      title: "Comparative Study of Ancient vs Modern Surgical Instruments",
      author: "Dr. Amit Verma",
      institution: "BHU Varanasi",
      year: "2023",
      category: "MS Thesis"
    },
    {
      title: "Evidence-Based Practice in Kshara Karma",
      author: "Dr. Sunita Rao",
      institution: "SDM College Udupi",
      year: "2023",
      category: "MS Thesis"
    }
  ];

  const filteredPapers = researchPapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         paper.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || paper.year.toString() === selectedYear;
    const matchesInstitution = selectedInstitution === 'all' || paper.institution === selectedInstitution;
    
    return matchesSearch && matchesCategory && matchesYear && matchesInstitution;
  });

  return (
    <div className="research-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Research & Thesis Repository</h1>
            <p>
              Comprehensive database of Ayurvedic surgery research, theses, and academic publications 
              from leading institutions across India and internationally.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Research Papers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Theses</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Institutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section">
        <div className="container">
          <div className="search-filter-section">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search by title, author, keywords, or topic..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-grid">
              <div className="filter-group">
                <label className="form-label">Category</label>
                <select 
                  className="form-control"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="thesis">Thesis</option>
                  <option value="research-paper">Research Paper</option>
                  <option value="case-study">Case Study</option>
                  <option value="review-article">Review Article</option>
                  <option value="clinical-trial">Clinical Trial</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label className="form-label">Year</label>
                <select 
                  className="form-control"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="filter-group">
                <label className="form-label">Institution</label>
                <select 
                  className="form-control"
                  value={selectedInstitution}
                  onChange={(e) => setSelectedInstitution(e.target.value)}
                >
                  {institutions.map(institution => (
                    <option key={institution} value={institution}>
                      {institution === 'all' ? 'All Institutions' : institution}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="filter-actions">
                <button className="btn btn-primary">
                  <Filter size={16} />
                  Apply Filters
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setShowSubmissionForm(true)}
                >
                  <Upload size={16} />
                  Submit Research
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Featured Research</h2>
            <p>Highlighted studies and breakthrough research in Ayurvedic surgery</p>
          </div>
          
          <div className="grid grid-3">
            {featuredTheses.map((thesis, index) => (
              <div key={index} className="featured-research-card card">
                <div className="research-badge">
                  <Award size={16} />
                  <span>Featured</span>
                </div>
                <h4>{thesis.title}</h4>
                <div className="research-meta">
                  <div className="meta-item">
                    <User size={14} />
                    <span>{thesis.author}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={14} />
                    <span>{thesis.institution}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>{thesis.year}</span>
                  </div>
                </div>
                <div className="research-category">
                  <span className="badge badge-info">{thesis.category}</span>
                </div>
                <button className="btn btn-outline btn-small">
                  <Eye size={16} />
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Results */}
      <section className="section">
        <div className="container">
          <div className="results-header">
            <h2>Research Papers ({filteredPapers.length} results)</h2>
            <div className="sort-options">
              <select className="form-control">
                <option>Sort by Relevance</option>
                <option>Sort by Date (Newest)</option>
                <option>Sort by Date (Oldest)</option>
                <option>Sort by Downloads</option>
                <option>Sort by Rating</option>
              </select>
            </div>
          </div>
          
          <div className="research-results">
            {filteredPapers.map((paper) => (
              <div key={paper.id} className="research-paper-card card">
                <div className="paper-header">
                  <div className="paper-meta">
                    <span className={`badge badge-${
                      paper.category === 'clinical-trial' ? 'success' :
                      paper.category === 'research-paper' ? 'primary' :
                      paper.category === 'review-article' ? 'info' : 'warning'
                    }`}>
                      {paper.category.replace('-', ' ')}
                    </span>
                    <div className="paper-rating">
                      <Star size={14} fill="currentColor" />
                      <span>{paper.rating}</span>
                    </div>
                  </div>
                  <div className="paper-stats">
                    <div className="stat">
                      <Eye size={14} />
                      <span>{paper.views} views</span>
                    </div>
                    <div className="stat">
                      <Download size={14} />
                      <span>{paper.downloadCount} downloads</span>
                    </div>
                  </div>
                </div>
                
                <div className="paper-content">
                  <h3>{paper.title}</h3>
                  <div className="paper-authors">
                    By {paper.authors.join(', ')}
                  </div>
                  <div className="paper-details">
                    <div className="detail">
                      <MapPin size={14} />
                      <span>{paper.institution}</span>
                    </div>
                    <div className="detail">
                      <Calendar size={14} />
                      <span>{paper.year}</span>
                    </div>
                    <div className="detail">
                      <FileText size={14} />
                      <span>{paper.pages} pages</span>
                    </div>
                  </div>
                  
                  <p className="paper-abstract">{paper.abstract}</p>
                  
                  <div className="paper-keywords">
                    <strong>Keywords:</strong>
                    <div className="keyword-tags">
                      {paper.keywords.map((keyword, index) => (
                        <span key={index} className="keyword-tag">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="paper-actions">
                  <button className="btn btn-primary">
                    <Eye size={16} />
                    View Full Paper
                  </button>
                  <button className="btn btn-outline">
                    <Download size={16} />
                    Download PDF
                  </button>
                  <button className="btn btn-outline">
                    <BookOpen size={16} />
                    Cite
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="pagination">
            <button className="btn btn-outline">Previous</button>
            <button className="btn btn-primary">1</button>
            <button className="btn btn-outline">2</button>
            <button className="btn btn-outline">3</button>
            <button className="btn btn-outline">Next</button>
          </div>
        </div>
      </section>

      {/* Research Statistics */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Repository Statistics</h2>
            <p>Insights into research trends and institutional contributions</p>
          </div>
          
          <div className="stats-dashboard">
            <div className="grid grid-4">
              <div className="dashboard-stat card">
                <div className="stat-icon">
                  <Database size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Total Papers</span>
                  <span className="stat-trend">+12% this year</span>
                </div>
              </div>
              
              <div className="dashboard-stat card">
                <div className="stat-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Total Downloads</span>
                  <span className="stat-trend">+25% this month</span>
                </div>
              </div>
              
              <div className="dashboard-stat card">
                <div className="stat-icon">
                  <MapPin size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Institutions</span>
                  <span className="stat-trend">+8 new colleges</span>
                </div>
              </div>
              
              <div className="dashboard-stat card">
                <div className="stat-icon">
                  <User size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Authors</span>
                  <span className="stat-trend">Active contributors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Portal */}
      {showSubmissionForm && (
        <div className="submission-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Submit Your Research</h3>
              <button 
                className="modal-close"
                onClick={() => setShowSubmissionForm(false)}
              >
                ×
              </button>
            </div>
            <form className="submission-form">
              <div className="form-group">
                <label className="form-label">Research Title</label>
                <input type="text" className="form-control" placeholder="Enter research title" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Authors</label>
                <input type="text" className="form-control" placeholder="Author names (comma separated)" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Institution</label>
                <input type="text" className="form-control" placeholder="Institution name" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-control">
                  <option>Select category</option>
                  <option value="thesis">Thesis</option>
                  <option value="research-paper">Research Paper</option>
                  <option value="case-study">Case Study</option>
                  <option value="review-article">Review Article</option>
                  <option value="clinical-trial">Clinical Trial</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Abstract</label>
                <textarea className="form-control textarea" placeholder="Enter abstract"></textarea>
              </div>
              
              <div className="form-group">
                <label className="form-label">Keywords</label>
                <input type="text" className="form-control" placeholder="Keywords (comma separated)" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Upload PDF</label>
                <input type="file" className="form-control" accept=".pdf" />
              </div>
              
              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowSubmissionForm(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Research
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Research; 