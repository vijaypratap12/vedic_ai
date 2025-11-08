import React, { useState, useEffect } from 'react';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  BookOpen, 
  Sun, 
  Moon, 
  Eye,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  MessageCircle,
  Settings,
  Maximize2,
  Minimize2
} from 'lucide-react';

const Reader = ({ isOpen, onClose, content, title, author }) => {
  const [fontSize, setFontSize] = useState(18);
  const [theme, setTheme] = useState('light');
  const [currentPage, setCurrentPage] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const [showSettings, setShowSettings] = useState(false);

  // Theme configurations
  const themes = {
    light: {
      name: 'Light',
      bg: '#ffffff',
      text: '#1a1a1a',
      secondary: '#666666',
      accent: '#8b4513'
    },
    sepia: {
      name: 'Sepia',
      bg: '#f4ecd8',
      text: '#5c4a3a',
      secondary: '#8b7355',
      accent: '#8b4513'
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
    },
    green: {
      name: 'Green Eye',
      bg: '#e8f5e9',
      text: '#1b5e20',
      secondary: '#388e3c',
      accent: '#2e7d32'
    }
  };

  const currentTheme = themes[theme];

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
    if (bookmarks.includes(currentPage)) {
      setBookmarks(bookmarks.filter(page => page !== currentPage));
    } else {
      setBookmarks([...bookmarks, currentPage]);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentPage(prev => Math.max(1, prev - 1));
      if (e.key === 'ArrowRight') setCurrentPage(prev => prev + 1);
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
  }, [isOpen, onClose]);

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
              <h3 style={{ color: currentTheme.text }}>{title}</h3>
              {author && <p style={{ color: currentTheme.secondary }}>{author}</p>}
            </div>
          </div>
          
          <div className="reader-controls">
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
                  {themeKey === 'sepia' && <Eye size={16} />}
                  {themeKey === 'night' && <Moon size={16} />}
                  {themeKey === 'green' && <Eye size={16} />}
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

            {/* Additional Controls */}
            <button 
              className={`control-btn ${bookmarks.includes(currentPage) ? 'active' : ''}`}
              onClick={toggleBookmark}
              style={{ color: bookmarks.includes(currentPage) ? currentTheme.accent : currentTheme.text }}
              title="Bookmark this page"
            >
              <Bookmark size={18} fill={bookmarks.includes(currentPage) ? 'currentColor' : 'none'} />
            </button>

            <button 
              className="control-btn"
              onClick={() => setShowSettings(!showSettings)}
              style={{ color: currentTheme.text }}
              title="Settings"
            >
              <Settings size={18} />
            </button>

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
          {/* Content */}
          <div 
            className="reader-content"
            style={{ fontSize: `${fontSize}px` }}
            onMouseUp={handleTextSelection}
          >
            <div className="reader-page">
              {content ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                <div className="sample-content">
                  <h2 style={{ color: currentTheme.accent }}>Chapter 1: Introduction to Shalya Tantra</h2>
                  
                  <p>
                    Shalya Tantra, the ancient science of surgery in Ayurveda, represents one of the eight 
                    branches of Ayurvedic medicine. The term "Shalya" refers to a foreign body or any pathological 
                    condition requiring surgical intervention, while "Tantra" means a systematic approach or science.
                  </p>

                  <h3 style={{ color: currentTheme.accent }}>Historical Context</h3>
                  <p>
                    The foundation of Shalya Tantra was laid by Maharishi Sushruta, often referred to as the 
                    "Father of Surgery." His magnum opus, the Sushruta Samhita, compiled around 600 BCE, contains 
                    detailed descriptions of over 300 surgical procedures and 121 surgical instruments.
                  </p>

                  <blockquote style={{ 
                    borderLeftColor: currentTheme.accent,
                    backgroundColor: currentTheme.secondary + '10',
                    color: currentTheme.text
                  }}>
                    "योगः कर्मसु कौशलम्" (Yogaḥ karmasu kauśalam)
                    <br />
                    <em style={{ color: currentTheme.secondary }}>
                      - Excellence in action is yoga. This principle guides the surgeon's hand.
                    </em>
                  </blockquote>

                  <h3 style={{ color: currentTheme.accent }}>Fundamental Principles</h3>
                  <p>
                    The practice of Shalya Tantra is built upon several fundamental principles:
                  </p>
                  <ul>
                    <li><strong>Yantra Karma</strong> - Use of instruments</li>
                    <li><strong>Shastra Karma</strong> - Sharp instrument procedures</li>
                    <li><strong>Agni Karma</strong> - Thermal cauterization</li>
                    <li><strong>Kshara Karma</strong> - Alkaline cauterization</li>
                    <li><strong>Jalauka Avacharana</strong> - Leech therapy</li>
                  </ul>

                  <h3 style={{ color: currentTheme.accent }}>Modern Relevance</h3>
                  <p>
                    Today, Shalya Tantra continues to evolve, integrating traditional wisdom with modern 
                    surgical techniques. Procedures like Kshara Sutra therapy for anorectal disorders have 
                    gained international recognition for their efficacy and minimal invasiveness.
                  </p>

                  <p>
                    The holistic approach of Ayurvedic surgery, which considers the patient's constitution 
                    (Prakriti), seasonal variations (Ritu), and post-operative care (Paschat Karma), offers 
                    valuable insights for contemporary surgical practice.
                  </p>
                </div>
              )}
            </div>
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
                  <button 
                    className="ai-action-btn"
                    style={{ 
                      backgroundColor: currentTheme.accent + '20',
                      color: currentTheme.accent
                    }}
                  >
                    Find in Sushruta Samhita
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
                    and contextual information. The AI will help you understand complex concepts, 
                    Sanskrit terms, and provide references to classical texts.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="reader-footer" style={{ borderTopColor: currentTheme.secondary + '40' }}>
          <div className="page-navigation">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              style={{ color: currentTheme.text }}
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            
            <div className="page-info" style={{ color: currentTheme.secondary }}>
              Page {currentPage} of 150
            </div>
            
            <button 
              onClick={() => setCurrentPage(prev => prev + 1)}
              style={{ color: currentTheme.text }}
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="reader-shortcuts" style={{ color: currentTheme.secondary }}>
            <span>Shortcuts: ← → Navigate | Ctrl + / - Zoom | Esc Close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reader;

