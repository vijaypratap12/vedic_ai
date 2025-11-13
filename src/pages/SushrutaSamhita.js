import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  Volume2, 
  Languages,
  Star,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import Reader from '../components/Reader';
import apiService from '../services/api';

const SushrutaSamhita = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [readerOpen, setReaderOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 3;
  
  // Chapter section state
  const [selectedBookForChapters, setSelectedBookForChapters] = useState(null);
  const [bookWithChapters, setBookWithChapters] = useState(null);
  const [chaptersLoading, setChaptersLoading] = useState(false);
  const [chaptersError, setChaptersError] = useState(null);
  const [currentChapterPage, setCurrentChapterPage] = useState(1);
  const chaptersPerPage = 2; // Show 2 chapters at a time

  // Fetch books from API on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      setCurrentPage(1); // Reset to first page
      setSearchTerm(''); // Clear search term
      const data = await apiService.getActiveBooks();
      setBooks(data);
    } catch (err) {
      console.error('Error fetching books:', err);
      setError(err.message || 'Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  const openReader = (bookId, chapterNumber = 1) => {
    // Store the book ID for the Reader component
    setSelectedBook({ id: bookId });
    setReaderOpen(true);
  };

  const fetchBookWithChapters = async (bookId, scrollToSection = false) => {
    try {
      setChaptersLoading(true);
      setChaptersError(null);
      const data = await apiService.getBookWithChapters(bookId);
      setBookWithChapters(data);
      setSelectedBookForChapters(bookId);
      setCurrentChapterPage(1); // Reset to first page when changing books
      
      // Scroll to chapters section if requested
      if (scrollToSection) {
        setTimeout(() => {
          const chaptersSection = document.getElementById('chapters-section');
          if (chaptersSection) {
            chaptersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    } catch (err) {
      console.error('Error fetching book chapters:', err);
      setChaptersError(err.message || 'Failed to fetch chapters');
    } finally {
      setChaptersLoading(false);
    }
  };

  const goToNextChapterPage = () => {
    if (bookWithChapters && currentChapterPage < Math.ceil(bookWithChapters.chapters.length / chaptersPerPage)) {
      setCurrentChapterPage(prev => prev + 1);
      // Scroll to chapters section
      const chaptersSection = document.getElementById('chapters-section');
      if (chaptersSection) {
        chaptersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const goToPreviousChapterPage = () => {
    if (currentChapterPage > 1) {
      setCurrentChapterPage(prev => prev - 1);
      // Scroll to chapters section
      const chaptersSection = document.getElementById('chapters-section');
      if (chaptersSection) {
        chaptersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Fetch chapters for the first book on initial load
  useEffect(() => {
    if (books.length > 0 && !selectedBookForChapters) {
      fetchBookWithChapters(books[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchBooks();
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setCurrentPage(1); // Reset to first page on new search
      const data = await apiService.searchBooks(searchTerm);
      setBooks(data);
    } catch (err) {
      setError(err.message || 'Search failed');
      console.error('Error searching books:', err);
    } finally {
      setLoading(false);
    }
  };

  // Pagination calculations
  const totalPages = Math.ceil(books.length / booksPerPage);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

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


  return (
    <div className="sushruta-samhita-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>
              <span className="sanskrit">सुश्रुत संहिता</span>
              <br />Sushruta Samhita Explorer
            </h1>
            <p>
              Explore the timeless wisdom of Maharishi Sushruta through our interactive 
              digital archive with modern commentary and illustrations.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Navigation */}
      <section className="section">
        <div className="container">
          <div className="search-navigation">
            <div className="search-box" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Search books, topics, or authors..."
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
              <p>Loading books...</p>
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

      {/* Featured Content - Display books from database */}
      {!loading && !error && books.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="content-header">
              <h2>Available Books</h2>
              <p>Explore ancient wisdom from our digital library</p>
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
                  <p style={{ flex: '1' }}>
                    {book.description || 'Ancient Vedic text with timeless wisdom'}
                  </p>
                  <div className="chapter-reference">
                    <small>
                      {book.category && `Category: ${book.category}`}
                      {book.publicationYear && ` • Year: ${book.publicationYear}`}
                    </small>
                  </div>
                  <div className="card-actions" style={{ marginTop: '1rem' }}>
                    <button 
                      className="btn btn-primary btn-small"
                      onClick={() => openReader(book.id)}
                    >
                      <BookOpen size={16} />
                      Read Book
                    </button>
                    <button 
                      className="btn btn-outline btn-small"
                      onClick={() => fetchBookWithChapters(book.id, true)}
                    >
                      <BookOpen size={16} />
                      View Chapters
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
                Showing {indexOfFirstBook + 1}-{Math.min(indexOfLastBook, books.length)} of {books.length} books
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>
          </div>
        </section>
      )}
      
      {/* No books found */}
      {!loading && !error && books.length === 0 && (
        <section className="section section-alt">
          <div className="container">
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p style={{ fontSize: '1.2rem', color: '#666' }}>
                No books found. {searchTerm && 'Try a different search term or '}
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

      {/* Book Chapters Navigation */}
      <section className="section" id="chapters-section">
        <div className="container">
          <div className="content-header">
            <h2>Book Chapters</h2>
            <p>Navigate through all chapters of the selected book</p>
          </div>

          {/* Book Selector */}
          {books.length > 0 && (
            <div style={{ marginBottom: '30px', textAlign: 'center' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '10px',
                color: 'var(--text-secondary)',
                fontSize: '0.95rem'
              }}>
                Select a book to view chapters:
              </label>
              <select
                value={selectedBookForChapters || ''}
                onChange={(e) => fetchBookWithChapters(parseInt(e.target.value))}
                style={{
                  padding: '12px 20px',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  border: '2px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  minWidth: '300px',
                  transition: 'all 0.3s ease'
                }}
              >
                {books.map((book) => (
                  <option key={book.id} value={book.id}>
                    {book.title} - {book.author}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Loading State */}
          {chaptersLoading && (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p>Loading chapters...</p>
            </div>
          )}

          {/* Error State */}
          {chaptersError && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#e74c3c' }}>
              <p>⚠️ {chaptersError}</p>
              <button 
                className="btn btn-outline btn-small" 
                onClick={() => selectedBookForChapters && fetchBookWithChapters(selectedBookForChapters)}
              >
                Retry
              </button>
            </div>
          )}

          {/* Chapters Grid */}
          {!chaptersLoading && !chaptersError && bookWithChapters && (
            <>
              <div style={{
                marginBottom: '30px',
                padding: '20px',
                background: 'var(--bg-card)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <h3 style={{ marginBottom: '10px' }}>{bookWithChapters.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '5px' }}>
                  by {bookWithChapters.author}
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {bookWithChapters.description}
                </p>
                <div style={{ 
                  marginTop: '15px', 
                  display: 'flex', 
                  gap: '15px',
                  flexWrap: 'wrap',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)'
                }}>
                  <span>📚 {bookWithChapters.totalChapters} Chapters</span>
                  {bookWithChapters.category && <span>🏷️ {bookWithChapters.category}</span>}
                  {bookWithChapters.language && <span>🌐 {bookWithChapters.language}</span>}
                  {bookWithChapters.publicationYear && <span>📅 {bookWithChapters.publicationYear}</span>}
                </div>
              </div>

              {bookWithChapters.chapters && bookWithChapters.chapters.length > 0 ? (
                <>
                  {/* Chapter Pagination Info */}
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    padding: '15px',
                    background: 'var(--bg-card)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)'
                  }}>
                    <p style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      margin: 0
                    }}>
                      Showing chapters {((currentChapterPage - 1) * chaptersPerPage) + 1}-{Math.min(currentChapterPage * chaptersPerPage, bookWithChapters.chapters.length)} of {bookWithChapters.chapters.length}
                    </p>
                  </div>

                  <div className="sthana-grid">
                    {bookWithChapters.chapters
                      .slice((currentChapterPage - 1) * chaptersPerPage, currentChapterPage * chaptersPerPage)
                      .map((chapter) => (
                      <div key={chapter.id} className="sthana-card card">
                        <div className="sthana-header">
                          <div className="sthana-info">
                            <div style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '10px',
                              marginBottom: '10px'
                            }}>
                              <span style={{
                                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                                color: 'white',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '0.85rem',
                                fontWeight: 'bold'
                              }}>
                                Chapter {chapter.chapterNumber}
                              </span>
                              {chapter.readingTimeMinutes && (
                                <span style={{
                                  color: 'var(--text-secondary)',
                                  fontSize: '0.85rem'
                                }}>
                                  ⏱️ {chapter.readingTimeMinutes} min read
                                </span>
                              )}
                            </div>
                            <h3>
                              <span className="sanskrit">{chapter.chapterTitle}</span>
                            </h3>
                            {chapter.chapterSubtitle && (
                              <p className="sthana-description" style={{ 
                                fontStyle: 'italic',
                                color: 'var(--text-secondary)',
                                marginTop: '5px'
                              }}>
                                {chapter.chapterSubtitle}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        {chapter.summary && (
                          <div className="sthana-topics">
                            <p style={{ 
                              color: 'var(--text-secondary)',
                              fontSize: '0.95rem',
                              lineHeight: '1.6'
                            }}>
                              {chapter.summary}
                            </p>
                          </div>
                        )}

                        <div className="sthana-actions">
                          <button 
                            className="btn btn-primary"
                            onClick={() => openReader(bookWithChapters.id, chapter.chapterNumber)}
                          >
                            <BookOpen size={16} />
                            Read Chapter
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chapter Navigation - Similar to Reader */}
                  {bookWithChapters.chapters.length > chaptersPerPage && (
                    <div style={{ 
                      marginTop: '40px',
                      padding: '20px',
                      background: 'var(--bg-card)',
                      borderRadius: '12px',
                      border: '1px solid var(--border-color)'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '20px',
                        flexWrap: 'wrap'
                      }}>
                        {/* Previous Button */}
                        <button
                          onClick={goToPreviousChapterPage}
                          disabled={currentChapterPage === 1}
                          className="btn btn-outline"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            opacity: currentChapterPage === 1 ? 0.5 : 1,
                            cursor: currentChapterPage === 1 ? 'not-allowed' : 'pointer',
                            minWidth: '150px'
                          }}
                        >
                          <ChevronLeft size={20} />
                          Previous
                        </button>

                        {/* Page Info */}
                        <div style={{
                          textAlign: 'center',
                          flex: '1',
                          minWidth: '200px'
                        }}>
                          <p style={{ 
                            color: 'var(--text-primary)',
                            fontSize: '1rem',
                            fontWeight: '500',
                            margin: '0 0 5px 0'
                          }}>
                            Page {currentChapterPage} of {Math.ceil(bookWithChapters.chapters.length / chaptersPerPage)}
                          </p>
                          <p style={{ 
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                            margin: 0
                          }}>
                            {chaptersPerPage} chapters per page
                          </p>
                        </div>

                        {/* Next Button */}
                        <button
                          onClick={goToNextChapterPage}
                          disabled={currentChapterPage >= Math.ceil(bookWithChapters.chapters.length / chaptersPerPage)}
                          className="btn btn-primary"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            opacity: currentChapterPage >= Math.ceil(bookWithChapters.chapters.length / chaptersPerPage) ? 0.5 : 1,
                            cursor: currentChapterPage >= Math.ceil(bookWithChapters.chapters.length / chaptersPerPage) ? 'not-allowed' : 'pointer',
                            minWidth: '150px'
                          }}
                        >
                          Next
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '40px',
                  background: 'var(--bg-card)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)'
                }}>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    No chapters available for this book yet.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

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
              <h4>Trilingual Compare</h4>
              <p>Compare Sanskrit, Hindi, and English translations side by side</p>
              <button className="btn btn-outline btn-small">Try Now</button>
            </div>
            
            <div className="tool-card card">
              <div className="card-icon">
                <Volume2 size={24} />
              </div>
              <h4>Audio Recitation</h4>
              <p>Listen to proper Sanskrit pronunciation with audio playback</p>
              <button className="btn btn-outline btn-small">Listen</button>
            </div>
            
            <div className="tool-card card">
              <div className="card-icon">
                <Search size={24} />
              </div>
              <h4>Smart Search</h4>
              <p>Find specific verses, procedures, or concepts instantly</p>
              <button className="btn btn-outline btn-small">Search</button>
            </div>
            
            <div className="tool-card card">
              <div className="card-icon">
                <Star size={24} />
              </div>
              <h4>Personal Notes</h4>
              <p>Add your own annotations and bookmarks to verses</p>
              <button className="btn btn-outline btn-small">Get Started</button>
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

export default SushrutaSamhita; 