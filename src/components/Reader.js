import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  BookOpen, 
  Sun, 
  Moon,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  MessageCircle,
  Maximize2,
  Minimize2,
  List
} from 'lucide-react';
import apiService from '../services/api';

const Reader = ({ 
  isOpen, 
  onClose, 
  bookId, 
  initialChapter = 1,
  // Simple content mode props (for research papers/thesis)
  title,
  author,
  content
}) => {
  const [fontSize, setFontSize] = useState(18);
  const [theme, setTheme] = useState('night');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [showChapterList, setShowChapterList] = useState(false);

  // Chapter-related state
  const [currentChapter, setCurrentChapter] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [bookInfo, setBookInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Determine mode: simple content (research/thesis) or book with chapters
  const isSimpleMode = !bookId && (title || content);

  // Theme configurations
  const themes = {
    light: {
      name: 'Light',
      bg: '#ffffff',
      text: '#000000',
      secondary: '#666666',
      accent: '#000000'
    },
    dark: {
      name: 'Dark',
      bg: '#1a1a1a',
      text: '#e0e0e0',
      secondary: '#a0a0a0',
      accent: '#d4a574'
    },
    night: {
      name: 'Night',
      bg: '#0d1117',
      text: '#c9d1d9',
      secondary: '#8b949e',
      accent: '#58a6ff'
    }
  };

  const currentTheme = themes[theme];

  const fetchBookWithChapters = useCallback(async () => {
    try {
      setLoading(true);
      const data = await apiService.getBookWithChapters(bookId);
      setBookInfo(data);
      setChapters(data.chapters || []);
      setError(null);
    } catch (err) {
      setError('Failed to load book chapters');
      console.error('Error fetching book with chapters:', err);
    } finally {
      setLoading(false);
    }
  }, [bookId]);

  const fetchChapter = useCallback(async (chapterNumber) => {
    try {
      setLoading(true);
      const data = await apiService.getChapter(bookId, chapterNumber);
      setCurrentChapter(data);
      setError(null);
    } catch (err) {
      setError('Failed to load chapter');
      console.error('Error fetching chapter:', err);
    } finally {
      setLoading(false);
    }
  }, [bookId]);

  // Fetch book with chapters on mount (only in book mode)
  useEffect(() => {
    if (isOpen && bookId && !isSimpleMode) {
      fetchBookWithChapters();
    }
  }, [isOpen, bookId, isSimpleMode, fetchBookWithChapters]);

  // Fetch specific chapter when chapter number changes (only in book mode)
  useEffect(() => {
    if (isOpen && bookId && initialChapter && !isSimpleMode) {
      fetchChapter(initialChapter);
    }
  }, [isOpen, bookId, initialChapter, isSimpleMode, fetchChapter]);

  // In simple mode, set loading to false immediately
  useEffect(() => {
    if (isOpen && isSimpleMode) {
      setLoading(false);
    }
  }, [isOpen, isSimpleMode]);

  const handleNextChapter = useCallback(async () => {
    if (!currentChapter || !currentChapter.hasNextChapter) return;
    
    try {
      setLoading(true);
      const data = await apiService.getNextChapter(bookId, currentChapter.chapterNumber);
      setCurrentChapter(data);
      setError(null);
    } catch (err) {
      setError('Failed to load next chapter');
      console.error('Error fetching next chapter:', err);
    } finally {
      setLoading(false);
    }
  }, [bookId, currentChapter]);

  const handlePreviousChapter = useCallback(async () => {
    if (!currentChapter || !currentChapter.hasPreviousChapter) return;
    
    try {
      setLoading(true);
      const data = await apiService.getPreviousChapter(bookId, currentChapter.chapterNumber);
      setCurrentChapter(data);
      setError(null);
    } catch (err) {
      setError('Failed to load previous chapter');
      console.error('Error fetching previous chapter:', err);
    } finally {
      setLoading(false);
    }
  }, [bookId, currentChapter]);

  const handleChapterSelect = (chapterNumber) => {
    fetchChapter(chapterNumber);
    setShowChapterList(false);
  };

  // Handle text selection for AI assistance
  const handleTextSelection = () => {
    const selection = window.getSelection();
    const text = selection.toString().trim();
    if (text) {
      setSelectedText(text);
      setShowAIAssistant(true);
    }
  };

  // Toggle bookmark
  const toggleBookmark = () => {
    if (!currentChapter) return;
    const chapterNum = currentChapter.chapterNumber;
    if (bookmarks.includes(chapterNum)) {
      setBookmarks(bookmarks.filter(num => num !== chapterNum));
    } else {
      setBookmarks([...bookmarks, chapterNum]);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePreviousChapter();
      if (e.key === 'ArrowRight') handleNextChapter();
      if (e.key === '+' && e.ctrlKey) {
        e.preventDefault();
        setFontSize(prev => Math.min(32, prev + 2));
      }
      if (e.key === '-' && e.ctrlKey) {
        e.preventDefault();
        setFontSize(prev => Math.max(12, prev - 2));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose, currentChapter, handleNextChapter, handlePreviousChapter]);

  if (!isOpen) return null;

  return (
    <div className={`reader-overlay ${isFullscreen ? 'fullscreen' : ''}`}>
      <div 
        className="reader-container"
        style={{ 
          backgroundColor: currentTheme.bg,
          color: currentTheme.text 
        }}
      >
        {/* Header */}
        <div className="reader-header" style={{ borderBottomColor: currentTheme.secondary + '40' }}>
          <div className="reader-title-section">
            <BookOpen size={20} style={{ color: currentTheme.accent }} />
            <div>
              <h3 style={{ color: currentTheme.text }}>
                {isSimpleMode 
                  ? title 
                  : (currentChapter ? currentChapter.bookTitle : bookInfo?.title || 'Loading...')}
              </h3>
              {isSimpleMode && author && (
                <p style={{ color: currentTheme.secondary }}>By {author}</p>
              )}
              {!isSimpleMode && currentChapter && (
                <p style={{ color: currentTheme.secondary }}>
                  Chapter {currentChapter.chapterNumber}: {currentChapter.chapterTitle}
                </p>
              )}
            </div>
          </div>
          
          <div className="reader-controls">
            {/* Chapter List Toggle - Only show in book mode */}
            {!isSimpleMode && (
              <button 
                className={`control-btn ${showChapterList ? 'active' : ''}`}
                onClick={() => setShowChapterList(!showChapterList)}
                style={{ color: currentTheme.text }}
                title="Chapter list"
              >
                <List size={18} />
              </button>
            )}

            {/* Theme Selector */}
            <div className="theme-selector">
              {Object.keys(themes).map((themeKey) => (
                <button
                  key={themeKey}
                  className={`theme-btn ${theme === themeKey ? 'active' : ''}`}
                  onClick={() => setTheme(themeKey)}
                  title={themes[themeKey].name}
                  style={{
                    backgroundColor: themes[themeKey].bg,
                    border: theme === themeKey ? `2px solid ${currentTheme.accent}` : '2px solid transparent'
                  }}
                >
                  {themeKey === 'light' && <Sun size={16} />}
                  {themeKey === 'dark' && <Moon size={16} />}
                  {themeKey === 'night' && <Moon size={16} />}
                </button>
              ))}
            </div>

            {/* Font Size Controls */}
            <div className="font-controls">
              <button 
                onClick={() => setFontSize(prev => Math.max(12, prev - 2))}
                style={{ color: currentTheme.text }}
                title="Decrease font size"
              >
                <ZoomOut size={18} />
              </button>
              <span style={{ color: currentTheme.secondary }}>{fontSize}px</span>
              <button 
                onClick={() => setFontSize(prev => Math.min(32, prev + 2))}
                style={{ color: currentTheme.text }}
                title="Increase font size"
              >
                <ZoomIn size={18} />
              </button>
            </div>

            {/* Additional Controls - Only show bookmark in book mode */}
            {!isSimpleMode && (
              <button 
                className={`control-btn ${currentChapter && bookmarks.includes(currentChapter.chapterNumber) ? 'active' : ''}`}
                onClick={toggleBookmark}
                style={{ color: currentChapter && bookmarks.includes(currentChapter.chapterNumber) ? currentTheme.accent : currentTheme.text }}
                title="Bookmark this chapter"
              >
                <Bookmark size={18} fill={currentChapter && bookmarks.includes(currentChapter.chapterNumber) ? 'currentColor' : 'none'} />
              </button>
            )}

            <button 
              className="control-btn"
              onClick={() => setIsFullscreen(!isFullscreen)}
              style={{ color: currentTheme.text }}
              title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>

            <button 
              className="control-btn close-btn"
              onClick={onClose}
              style={{ color: currentTheme.text }}
              title="Close reader"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="reader-main">
          {/* Chapter List Sidebar - Only in book mode */}
          {!isSimpleMode && showChapterList && (
            <div 
              className="chapter-list-panel"
              style={{ 
                backgroundColor: currentTheme.bg,
                borderRightColor: currentTheme.secondary + '40'
              }}
            >
              <div className="chapter-list-header">
                <h4 style={{ color: currentTheme.text }}>Chapters</h4>
                <button 
                  onClick={() => setShowChapterList(false)}
                  style={{ color: currentTheme.text }}
                >
                  <X size={18} />
                </button>
              </div>
              <div className="chapter-list-content">
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    className={`chapter-item ${currentChapter?.chapterNumber === chapter.chapterNumber ? 'active' : ''}`}
                    onClick={() => handleChapterSelect(chapter.chapterNumber)}
                    style={{
                      backgroundColor: currentChapter?.chapterNumber === chapter.chapterNumber 
                        ? currentTheme.accent + '20' 
                        : 'transparent',
                      color: currentChapter?.chapterNumber === chapter.chapterNumber 
                        ? currentTheme.accent 
                        : currentTheme.text,
                      borderLeftColor: bookmarks.includes(chapter.chapterNumber) 
                        ? currentTheme.accent 
                        : 'transparent'
                    }}
                  >
                    <div className="chapter-number">Ch. {chapter.chapterNumber}</div>
                    <div className="chapter-info">
                      <div className="chapter-title">{chapter.chapterTitle}</div>
                      {chapter.chapterSubtitle && (
                        <div className="chapter-subtitle" style={{ color: currentTheme.secondary }}>
                          {chapter.chapterSubtitle}
                        </div>
                      )}
                      {chapter.readingTimeMinutes && (
                        <div className="chapter-meta" style={{ color: currentTheme.secondary }}>
                          {chapter.readingTimeMinutes} min read
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div 
            className="reader-content"
            style={{ fontSize: `${fontSize}px` }}
            onMouseUp={handleTextSelection}
          >
            {loading ? (
              <div className="reader-loading" style={{ color: currentTheme.secondary }}>
                <p>Loading chapter...</p>
              </div>
            ) : error ? (
              <div className="reader-error" style={{ color: currentTheme.accent }}>
                <p>{error}</p>
                {!isSimpleMode && (
                  <button onClick={() => fetchChapter(initialChapter)}>Retry</button>
                )}
              </div>
            ) : isSimpleMode ? (
              /* Simple content mode - for research papers/thesis */
              content ? (
                <div className="reader-page">
                  <div 
                    className="chapter-content"
                    dangerouslySetInnerHTML={{ __html: content }}
                    style={{ color: currentTheme.text }}
                  />
                </div>
              ) : (
                <div className="reader-empty" style={{ color: currentTheme.secondary }}>
                  <p>No content available</p>
                </div>
              )
            ) : currentChapter ? (
              /* Book mode - with chapters */
              <div className="reader-page">
                <div className="chapter-header">
                  <h2 style={{ color: currentTheme.accent }}>
                    Chapter {currentChapter.chapterNumber}: {currentChapter.chapterTitle}
                  </h2>
                  {currentChapter.chapterSubtitle && (
                    <h3 style={{ color: currentTheme.secondary }}>
                      {currentChapter.chapterSubtitle}
                    </h3>
                  )}
                  {currentChapter.readingTimeMinutes && (
                    <p className="reading-time" style={{ color: currentTheme.secondary }}>
                      Estimated reading time: {currentChapter.readingTimeMinutes} minutes
                    </p>
                  )}
                </div>
                <div 
                  className="chapter-content"
                  dangerouslySetInnerHTML={{ __html: currentChapter.contentHtml }}
                  style={{ color: currentTheme.text }}
                />
              </div>
            ) : (
              <div className="reader-empty" style={{ color: currentTheme.secondary }}>
                <p>No chapter selected</p>
              </div>
            )}
          </div>

          {/* AI Assistant Sidebar */}
          {showAIAssistant && (
            <div 
              className="ai-assistant-panel"
              style={{ 
                backgroundColor: currentTheme.bg,
                borderLeftColor: currentTheme.secondary + '40'
              }}
            >
              <div className="ai-header">
                <div>
                  <MessageCircle size={20} style={{ color: currentTheme.accent }} />
                  <h4 style={{ color: currentTheme.text }}>AI Assistant</h4>
                </div>
                <button 
                  onClick={() => setShowAIAssistant(false)}
                  style={{ color: currentTheme.text }}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="ai-content">
                {selectedText && (
                  <div 
                    className="selected-text"
                    style={{ 
                      backgroundColor: currentTheme.secondary + '20',
                      color: currentTheme.text
                    }}
                  >
                    <p style={{ color: currentTheme.secondary }}>Selected text:</p>
                    <p>"{selectedText}"</p>
                  </div>
                )}

                <div className="ai-suggestions">
                  <button 
                    className="ai-action-btn"
                    style={{ 
                      backgroundColor: currentTheme.accent + '20',
                      color: currentTheme.accent
                    }}
                  >
                    Explain this concept
                  </button>
                  <button 
                    className="ai-action-btn"
                    style={{ 
                      backgroundColor: currentTheme.accent + '20',
                      color: currentTheme.accent
                    }}
                  >
                    Translate to Hindi
                  </button>
                  <button 
                    className="ai-action-btn"
                    style={{ 
                      backgroundColor: currentTheme.accent + '20',
                      color: currentTheme.accent
                    }}
                  >
                    Show related topics
                  </button>
                </div>

                <div 
                  className="ai-response"
                  style={{ 
                    backgroundColor: currentTheme.secondary + '10',
                    color: currentTheme.text
                  }}
                >
                  <p style={{ color: currentTheme.secondary, fontSize: '0.9em' }}>
                    <strong>AI Assistant (Coming Soon)</strong>
                  </p>
                  <p style={{ fontSize: '0.95em' }}>
                    Select any text while reading to get instant explanations, translations, 
                    and contextual information.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation - Only show in book mode */}
        {!isSimpleMode && (
          <div className="reader-footer" style={{ borderTopColor: currentTheme.secondary + '40' }}>
            <div className="page-navigation">
              <button 
                onClick={handlePreviousChapter}
                disabled={!currentChapter || !currentChapter.hasPreviousChapter || loading}
                style={{ 
                  color: currentTheme.text,
                  opacity: (!currentChapter || !currentChapter.hasPreviousChapter || loading) ? 0.5 : 1
                }}
              >
                <ChevronLeft size={20} />
                Previous Chapter
              </button>
              
              <div className="page-info" style={{ color: currentTheme.secondary }}>
                {currentChapter ? (
                  <>Chapter {currentChapter.chapterNumber} of {bookInfo?.totalChapters || chapters.length}</>
                ) : (
                  <>Loading...</>
                )}
              </div>
              
              <button 
                onClick={handleNextChapter}
                disabled={!currentChapter || !currentChapter.hasNextChapter || loading}
                style={{ 
                  color: currentTheme.text,
                  opacity: (!currentChapter || !currentChapter.hasNextChapter || loading) ? 0.5 : 1
                }}
              >
                Next Chapter
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="reader-shortcuts" style={{ color: currentTheme.secondary }}>
              <span>Shortcuts: ← → Navigate | Ctrl + / - Zoom | Esc Close</span>
            </div>
          </div>
        )}
        
        {/* Simple footer for simple mode */}
        {isSimpleMode && (
          <div className="reader-footer" style={{ borderTopColor: currentTheme.secondary + '40' }}>
            <div className="reader-shortcuts" style={{ color: currentTheme.secondary, textAlign: 'center' }}>
              <span>Shortcuts: Ctrl + / - Zoom | Esc Close</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reader;
