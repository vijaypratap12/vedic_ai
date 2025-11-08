import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Volume2, 
  Languages,
  Star
} from 'lucide-react';
import Reader from '../components/Reader';

const SushrutaSamhita = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [readerOpen, setReaderOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const openReader = (content) => {
    setSelectedContent(content);
    setReaderOpen(true);
  };

  const sthanas = [
    {
      id: 'sutra',
      name: 'Sutra Sthana',
      chapters: 46,
      description: 'General principles and fundamentals',
      topics: ['Principles of Surgery', 'Surgical Instruments', 'Basic Concepts']
    },
    {
      id: 'nidana',
      name: 'Nidana Sthana',
      chapters: 16,
      description: 'Diagnosis and pathology',
      topics: ['Disease Diagnosis', 'Pathological Conditions', 'Clinical Signs']
    },
    {
      id: 'sharira',
      name: 'Sharira Sthana',
      chapters: 10,
      description: 'Anatomy and embryology',
      topics: ['Human Anatomy', 'Embryology', 'Physiological Processes']
    },
    {
      id: 'chikitsa',
      name: 'Chikitsa Sthana',
      chapters: 40,
      description: 'Treatment and therapeutics',
      topics: ['Surgical Procedures', 'Medical Treatment', 'Post-operative Care']
    },
    {
      id: 'kalpa',
      name: 'Kalpa Sthana',
      chapters: 8,
      description: 'Toxicology',
      topics: ['Poison Management', 'Antidotes', 'Emergency Medicine']
    },
    {
      id: 'uttara',
      name: 'Uttara Tantra',
      chapters: 66,
      description: 'Specialized treatments',
      topics: ['ENT Surgery', 'Ophthalmology', 'Pediatrics']
    }
  ];

  const featuredContent = [
    {
      title: 'Yantra Shastra',
      subtitle: 'Surgical Instruments',
      description: 'Detailed classification and usage of 101 surgical instruments',
      chapter: 'Sutra Sthana - Chapter 8'
    },
    {
      title: 'Agnikarma Vidhi',
      subtitle: 'Cauterization Technique',
      description: 'Complete procedure for therapeutic cauterization',
      chapter: 'Sutra Sthana - Chapter 12'
    },
    {
      title: 'Kshara Sutra',
      subtitle: 'Medicated Thread Therapy',
      description: 'Ancient technique for fistula and hemorrhoid treatment',
      chapter: 'Chikitsa Sthana - Chapter 8'
    }
  ];

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
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search verses, topics, or procedures..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Featured Surgical Procedures</h2>
            <p>Explore the most important surgical techniques from Sushruta Samhita</p>
          </div>
          <div className="grid grid-3">
            {featuredContent.map((content, index) => (
              <div key={index} className="featured-card card">
                <div className="card-header">
                  <h4>{content.title}</h4>
                  <p className="subtitle">{content.subtitle}</p>
                </div>
                <p>{content.description}</p>
                <div className="chapter-reference">
                  <small>{content.chapter}</small>
                </div>
                <div className="card-actions">
                  <button 
                    className="btn btn-primary btn-small"
                    onClick={() => openReader({
                      title: content.title,
                      subtitle: content.subtitle,
                      chapter: content.chapter
                    })}
                  >
                    <BookOpen size={16} />
                    Read Chapter
                  </button>
                  <button className="btn btn-outline btn-small">
                    <Volume2 size={16} />
                    Audio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sthana Navigation */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Complete Sushruta Samhita</h2>
            <p>Navigate through all six sections (Sthanas) of the classical text</p>
          </div>
          
          <div className="sthana-grid">
            {sthanas.map((sthana) => (
              <div key={sthana.id} className="sthana-card card">
                <div className="sthana-header">
                  <div className="sthana-info">
                    <h3>
                      <span className="sanskrit">{sthana.name}</span>
                    </h3>
                    <p className="sthana-description">{sthana.description}</p>
                  </div>
                </div>
                
                <div className="sthana-topics">
                  <h5>Key Topics:</h5>
                  <div className="topic-tags">
                    {sthana.topics.map((topic, index) => (
                      <span key={index} className="topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sthana-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => openReader({
                      title: sthana.name,
                      subtitle: sthana.description
                    })}
                  >
                    <BookOpen size={16} />
                    Start Reading
                  </button>
                </div>
              </div>
            ))}
          </div>
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

      {/* Statistics */}
      <section className="section">
        <div className="container">
          <div className="sushruta-stats">
            <div className="grid grid-4">
              <div className="stat-item text-center">
                <span className="stat-number">186</span>
                <span className="stat-label">Total Chapters</span>
              </div>
              <div className="stat-item text-center">
                <span className="stat-number">101</span>
                <span className="stat-label">Surgical Instruments</span>
              </div>
              <div className="stat-item text-center">
                <span className="stat-number">300+</span>
                <span className="stat-label">Surgical Procedures</span>
              </div>
              <div className="stat-item text-center">
                <span className="stat-number">120+</span>
                <span className="stat-label">Anatomical Structures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reader Component */}
      <Reader
        isOpen={readerOpen}
        onClose={() => setReaderOpen(false)}
        title={selectedContent?.title || 'Sushruta Samhita'}
        author="Maharishi Sushruta"
        content={null}
      />
    </div>
  );
};

export default SushrutaSamhita; 