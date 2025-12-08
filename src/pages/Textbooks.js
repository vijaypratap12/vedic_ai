import React, { useState, useEffect } from 'react';
import { 
  Search, 
  GraduationCap,
  CheckCircle,
  Clock,
  Star,
  Eye,
  Award,
  Languages,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import Reader from '../components/Reader';
import apiService from '../services/api';

const Textbooks = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [readerOpen, setReaderOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  
  // API state
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      setCurrentPage(1);
      setSearchTerm('');
      const data = await apiService.getActiveBooks();
      setBooks(data);
    } catch (err) {
      console.error('Error fetching books:', err);
      setError(err.message || 'Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchBooks();
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setCurrentPage(1);
      const data = await apiService.searchBooks(searchTerm);
      setBooks(data);
    } catch (err) {
      setError(err.message || 'Search failed');
      console.error('Error searching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const openReader = (bookId, chapterNumber = 1) => {
    setSelectedBook({ id: bookId, chapterNumber: chapterNumber });
    setReaderOpen(true);
  };

  // Filter books based on selected filters
  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesCategory;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate statistics
  const totalChapters = books.reduce((sum, book) => sum + (book.totalChapters || 0), 0);
  const avgRating = books.length > 0 
    ? (books.reduce((sum, book) => sum + (book.rating || 4.5), 0) / books.length).toFixed(1) 
    : '0.0';

  return (
    <div className="textbooks-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Ayurvedic Textbooks Library</h1>
            <p>
              Comprehensive educational content authored by leading Ayurvedic scholars, 
              available in multiple languages with interactive features.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section">
        <div className="container">
          <div className="search-navigation">
            <div className="search-box" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Search textbooks, topics, or authors..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  style={{ paddingRight: searchTerm ? '40px' : '20px' }}
                />
                {searchTerm && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      fetchBooks();
                    }}
                    style={{
                      position: 'absolute',
                      right: '15px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px',
                      borderRadius: '50%',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)';
                      e.currentTarget.style.color = 'var(--primary-color)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                    title="Clear search"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              <button 
                className="btn btn-primary btn-small" 
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>

          {/* Loading and Error States */}
          {loading && (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <p>Loading textbooks...</p>
            </div>
          )}
          
          {error && (
            <div style={{ textAlign: 'center', padding: '20px', color: '#e74c3c' }}>
              <p>⚠️ {error}</p>
              <button className="btn btn-outline btn-small" onClick={fetchBooks}>
                Retry
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Overview - Single Line */}
      {!loading && !error && books.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              gap: '4rem',
              flexWrap: 'wrap',
              padding: '2rem 0'
            }}>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  {books.length}
                </span>
                <span className="stat-label" style={{ display: 'block', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                  Textbooks
                </span>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  {totalChapters}
                </span>
                <span className="stat-label" style={{ display: 'block', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                  Total Chapters
                </span>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  {avgRating}
                </span>
                <span className="stat-label" style={{ display: 'block', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                  Avg Rating
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Textbooks Grid */}
      {!loading && !error && filteredBooks.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="content-header">
              <h2>Available Textbooks</h2>
              <p>Explore comprehensive study materials from our digital library</p>
            </div>

            {/* Category Filter */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '10px',
              marginBottom: '30px',
              flexWrap: 'wrap'
            }}>
              <button 
                className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline'} btn-small`}
                onClick={() => {
                  setSelectedCategory('all');
                  setCurrentPage(1);
                }}
              >
                All Categories
              </button>
              <button 
                className={`btn ${selectedCategory === 'Ayurveda' ? 'btn-primary' : 'btn-outline'} btn-small`}
                onClick={() => {
                  setSelectedCategory('Ayurveda');
                  setCurrentPage(1);
                }}
              >
                Ayurveda
              </button>
              <button 
                className={`btn ${selectedCategory === 'Surgery' ? 'btn-primary' : 'btn-outline'} btn-small`}
                onClick={() => {
                  setSelectedCategory('Surgery');
                  setCurrentPage(1);
                }}
              >
                Surgery
              </button>
              <button 
                className={`btn ${selectedCategory === 'Medicine' ? 'btn-primary' : 'btn-outline'} btn-small`}
                onClick={() => {
                  setSelectedCategory('Medicine');
                  setCurrentPage(1);
                }}
              >
                Medicine
              </button>
            </div>
            
            <div className="grid grid-3" style={{ alignItems: 'stretch' }}>
              {currentBooks.map((book) => (
                <div 
                  key={book.id} 
                  className="featured-card card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <div className="card-header" style={{ minHeight: '80px' }}>
                    <h4>{book.title}</h4>
                    <p className="subtitle">by {book.author}</p>
                  </div>
                  
                  <p style={{ flex: '1', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {book.description || 'Comprehensive Ayurvedic textbook with detailed explanations'}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    gap: '15px',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    flexWrap: 'wrap'
                  }}>
                    {book.totalChapters > 0 && (
                      <span>📚 {book.totalChapters} Chapters</span>
                    )}
                    {book.category && (
                      <span>🏷️ {book.category}</span>
                    )}
                    {book.language && (
                      <span>🌐 {book.language}</span>
                    )}
                  </div>

                  <div className="chapter-reference">
                    <small>
                      {book.publicationYear && `Year: ${book.publicationYear}`}
                      {book.isbn && ` • ISBN: ${book.isbn}`}
                    </small>
                  </div>
                  
                  <div className="card-actions" style={{ marginTop: '1rem', display: 'flex', gap: '10px' }}>
                    <button 
                      className="btn btn-primary btn-small"
                      onClick={() => openReader(book.id)}
                      style={{ flex: 1 }}
                    >
                      <BookOpen size={16} />
                      Read Book
                    </button>
                    <button 
                      className="btn btn-outline btn-small"
                      onClick={() => alert('Audio version coming soon!')}
                      style={{ flex: 1 }}
                    >
                      <Languages size={16} />
                      Audio
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                gap: '20px',
                marginTop: '40px',
                flexWrap: 'wrap'
              }}>
                {/* Previous Button */}
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className="btn btn-outline btn-small"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: currentPage === 1 ? 0.5 : 1,
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>

                {/* Page Dots */}
                <div style={{ 
                  display: 'flex', 
                  gap: '10px', 
                  alignItems: 'center' 
                }}>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => goToPage(index + 1)}
                      style={{
                        width: currentPage === index + 1 ? '40px' : '12px',
                        height: '12px',
                        borderRadius: '6px',
                        border: 'none',
                        background: currentPage === index + 1 
                          ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
                          : 'var(--border-color)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: currentPage === index + 1 
                          ? '0 0 10px rgba(0, 212, 255, 0.5)'
                          : 'none'
                      }}
                      title={`Page ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="btn btn-outline btn-small"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: currentPage === totalPages ? 0.5 : 1,
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
                  }}
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              </div>
            )}

            {/* Books Count Info */}
            <div style={{ 
              textAlign: 'center', 
              marginTop: '20px',
              color: 'var(--text-secondary)',
              fontSize: '0.95rem'
            }}>
              <p>
                Showing {indexOfFirstBook + 1}-{Math.min(indexOfLastBook, filteredBooks.length)} of {filteredBooks.length} textbooks
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* No books found */}
      {!loading && !error && filteredBooks.length === 0 && (
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p style={{ fontSize: '1.2rem', color: '#666' }}>
                No textbooks found. {searchTerm && 'Try a different search term or '}
                <button 
                  className="btn btn-primary btn-small" 
                  onClick={fetchBooks}
                  style={{ marginLeft: '10px' }}
                >
                  View All Books
                </button>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Study Tools */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Study Tools & Resources</h2>
            <p>Enhanced learning experience with modern tools</p>
          </div>
          
          <div className="grid grid-4">
            <div className="tool-card card">
              <div className="card-icon">
                <Languages size={24} />
              </div>
              <h4>Multi-language Support</h4>
              <p>Read textbooks in Sanskrit, Hindi, and English translations</p>
              <button className="btn btn-outline btn-small">Explore</button>
            </div>
            
            <div className="tool-card card">
              <div className="card-icon">
                <GraduationCap size={24} />
              </div>
              <h4>Interactive Learning</h4>
              <p>Engage with quizzes and assessments for better retention</p>
              <button className="btn btn-outline btn-small">Start</button>
            </div>
            
            <div className="tool-card card">
              <div className="card-icon">
                <BookOpen size={24} />
              </div>
              <h4>Chapter Notes</h4>
              <p>Add your own annotations and bookmarks to chapters</p>
              <button className="btn btn-outline btn-small">Try Now</button>
            </div>
            
            <div className="tool-card card">
              <div className="card-icon">
                <Star size={24} />
              </div>
              <h4>Progress Tracking</h4>
              <p>Monitor your reading progress and learning milestones</p>
              <button className="btn btn-outline btn-small">View Stats</button>
            </div>
          </div>
        </div>
      </section>

      {/* Reader Component */}
      <Reader
        isOpen={readerOpen}
        onClose={() => {
          setReaderOpen(false);
          setSelectedBook(null);
        }}
        bookId={selectedBook?.id}
        initialChapter={selectedBook?.chapterNumber || 1}
      />
    </div>
  );
};

export default Textbooks;