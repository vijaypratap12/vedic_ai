import React, { useState, useEffect } from 'react';
import { 
  Search, 
  FileText, 
  Calendar, 
  MapPin, 
  User, 
  Eye,
  BookOpen,
  Award,
  Star,
  Users
} from 'lucide-react';
import Reader from '../components/Reader';
import apiService from '../services/api';
import '../styles/research.css';

const Research = () => {
  // State for Research Papers
  const [researchPapers, setResearchPapers] = useState([]);
  const [featuredPapers, setFeaturedPapers] = useState([]);
  const [filteredPapers, setFilteredPapers] = useState([]);
  
  // State for Thesis
  const [thesisList, setThesisList] = useState([]);
  const [featuredThesis, setFeaturedThesis] = useState([]);
  const [filteredThesis, setFilteredThesis] = useState([]);
  
  // Common state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('research'); // 'research' or 'thesis'
  
  // Filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedInstitution, setSelectedInstitution] = useState('all');
  
  // Reader state
  const [readerOpen, setReaderOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const years = ['all', '2024', '2023', '2022', '2021', '2020', '2019', '2018'];

  const institutions = [
    'all',
    'AIIMS Delhi',
    'BHU Varanasi', 
    'Gujarat Ayurved University',
    'IPGT&RA Jamnagar',
    'National Institute of Ayurveda',
    'Quadra Institute of Ayurveda',
    'Rajiv Gandhi University',
    'SDM College Udupi',
    'Tilak Ayurved Mahavidyalaya'
  ];

  const researchCategories = [
    'all',
    'clinical-trial',
    'research-paper',
    'case-study',
    'review-article'
  ];

  const thesisCategories = [
    'all',
    'PhD Thesis',
    'MS Thesis',
    'MD Thesis',
    'Post-Doctoral'
  ];

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Filter data when filters change
  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedCategory, selectedYear, selectedInstitution, activeTab, researchPapers, thesisList]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch research papers
      const [allPapers, featPapers] = await Promise.all([
        apiService.getAllResearchPapers(),
        apiService.getFeaturedResearchPapers(3)
      ]);
      setResearchPapers(allPapers);
      setFeaturedPapers(featPapers);

      // Fetch thesis
      const [allThesis, featThesis] = await Promise.all([
        apiService.getAllThesis(),
        apiService.getFeaturedThesis(3)
      ]);
      setThesisList(allThesis);
      setFeaturedThesis(featThesis);

      setLoading(false);
    } catch (err) {
      console.error('Error fetching research data:', err);
      setError('Failed to load research data. Please try again later.');
      setLoading(false);
    }
  };

  const applyFilters = () => {
    const dataSource = activeTab === 'research' ? researchPapers : thesisList;
    
    const filtered = dataSource.filter(item => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (activeTab === 'research' 
          ? item.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()))
          : item.author.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || item.year.toString() === selectedYear;
      const matchesInstitution = selectedInstitution === 'all' || item.institution === selectedInstitution;
      
      return matchesSearch && matchesCategory && matchesYear && matchesInstitution;
    });

    if (activeTab === 'research') {
      setFilteredPapers(filtered);
    } else {
      setFilteredThesis(filtered);
    }
  };

  const openReader = async (item) => {
    try {
      // Fetch full details including contentHtml
      let fullDetails;
      if (activeTab === 'research') {
        fullDetails = await apiService.getResearchPaperById(item.id);
      } else {
        fullDetails = await apiService.getThesisById(item.id);
      }
      
      setSelectedItem(fullDetails);
      setReaderOpen(true);
    } catch (error) {
      console.error('Error fetching full details:', error);
      setError('Failed to load full details. Please try again.');
    }
  };


  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedYear('all');
    setSelectedInstitution('all');
  };

  if (loading) {
    return (
      <div className="research-page">
        <div className="container">
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading research data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="research-page">
        <div className="container">
          <div className="error-state">
            <p>{error}</p>
            <button className="btn btn-primary" onClick={fetchData}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentData = activeTab === 'research' ? filteredPapers : filteredThesis;
  const currentFeatured = activeTab === 'research' ? featuredPapers : featuredThesis;
  const currentCategories = activeTab === 'research' ? researchCategories : thesisCategories;

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
            
            {/* Tab Switcher */}
            <div className="tab-switcher">
              <button 
                className={`tab-btn ${activeTab === 'research' ? 'active' : ''}`}
                onClick={() => { setActiveTab('research'); resetFilters(); }}
              >
                <FileText size={20} />
                <span>Research Articles</span>
                <span className="badge">{researchPapers.length}</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'thesis' ? 'active' : ''}`}
                onClick={() => { setActiveTab('thesis'); resetFilters(); }}
              >
                <BookOpen size={20} />
                <span>Thesis Repository</span>
                <span className="badge">{thesisList.length}</span>
              </button>
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
                placeholder={`Search ${activeTab === 'research' ? 'research papers' : 'thesis'} by title, author, keywords...`}
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
                  {currentCategories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat.replace('-', ' ')}
                    </option>
                  ))}
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
                <button className="btn btn-outline" onClick={resetFilters}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      {currentFeatured.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="content-header">
              <h2>Featured {activeTab === 'research' ? 'Research' : 'Thesis'}</h2>
              <p>Highlighted studies and breakthrough research in Ayurvedic surgery</p>
            </div>
            
            <div className="grid grid-3">
              {currentFeatured.map((item) => (
                <div key={item.id} className="featured-research-card card">
                  <div className="research-badge">
                    <Award size={16} />
                    <span>Featured</span>
                  </div>
                  <h4>{item.title}</h4>
                  <div className="research-meta">
                    <div className="meta-item">
                      {activeTab === 'research' ? <Users size={14} /> : <User size={14} />}
                      <span>
                        {activeTab === 'research' 
                          ? item.authors.join(', ') 
                          : item.author}
                      </span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={14} />
                      <span>{item.institution}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{item.year}</span>
                    </div>
                  </div>
                  <div className="research-category">
                    <span className="badge badge-info">{item.category}</span>
                    <div className="rating">
                      <Star size={14} fill="currentColor" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <button 
                    className="btn btn-outline btn-small"
                    onClick={() => openReader(item)}
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      <section className="section">
        <div className="container">
          <div className="results-header">
            <h2>
              {activeTab === 'research' ? 'Research Papers' : 'Thesis Repository'} 
              ({currentData.length} results)
            </h2>
          </div>
          
          {currentData.length === 0 ? (
            <div className="empty-state">
              <FileText size={48} />
              <h3>No results found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button className="btn btn-primary" onClick={resetFilters}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="research-results">
              {currentData.map((item) => (
                <div key={item.id} className="research-paper-card card">
                  <div className="paper-header">
                    <div className="paper-meta">
                      <span className={`badge badge-${
                        item.category === 'clinical-trial' || item.category === 'PhD Thesis' ? 'success' :
                        item.category === 'research-paper' || item.category === 'MS Thesis' ? 'primary' :
                        item.category === 'review-article' || item.category === 'MD Thesis' ? 'info' : 'warning'
                      }`}>
                        {item.category.replace('-', ' ')}
                      </span>
                      <div className="paper-rating">
                        <Star size={14} fill="currentColor" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                    <div className="paper-stats">
                      <div className="stat">
                        <Eye size={14} />
                        <span>{item.viewCount} views</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="paper-content">
                    <h3>{item.title}</h3>
                    <div className="paper-authors">
                      By {activeTab === 'research' 
                        ? item.authors.join(', ') 
                        : `${item.author}${item.guideNames.length > 0 ? ` (Guide: ${item.guideNames.join(', ')})` : ''}`}
                    </div>
                    <div className="paper-details">
                      <div className="detail">
                        <MapPin size={14} />
                        <span>{item.institution}</span>
                      </div>
                      <div className="detail">
                        <Calendar size={14} />
                        <span>{item.year}</span>
                      </div>
                      <div className="detail">
                        <FileText size={14} />
                        <span>{item.pages} pages</span>
                      </div>
                      {activeTab === 'thesis' && item.grade && (
                        <div className="detail">
                          <Award size={14} />
                          <span>Grade: {item.grade}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="paper-abstract">{item.abstract}</p>
                    
                    <div className="paper-keywords">
                      <strong>Keywords:</strong>
                      <div className="keyword-tags">
                        {item.keywords.map((keyword, index) => (
                          <span key={index} className="keyword-tag">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="paper-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => openReader(item)}
                    >
                      <Eye size={16} />
                      View Full {activeTab === 'research' ? 'Paper' : 'Thesis'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Reader Component */}
      <Reader
        isOpen={readerOpen}
        onClose={() => setReaderOpen(false)}
        title={selectedItem?.title || ''}
        author={activeTab === 'research' 
          ? selectedItem?.authors?.join(', ') || '' 
          : selectedItem?.author || ''}
        content={selectedItem?.contentHtml || null}
      />
    </div>
  );
};

export default Research;
