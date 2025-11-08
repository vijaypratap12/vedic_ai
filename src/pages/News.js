import React, { useState } from 'react';
import { 
  Newspaper, 
  Calendar, 
  TrendingUp, 
  Globe, 
  AlertCircle,
  Award,
  Users,
  BookOpen,
  Search,
  ExternalLink,
  Share,
  Heart,
  Eye,
  Clock,
  Tag
} from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const newsArticles = [
    {
      id: 1,
      title: "WHO Recognizes Traditional Surgical Practices in Global Health Framework",
      category: "international-news",
      summary: "World Health Organization officially acknowledges Ayurvedic surgical procedures as part of traditional medicine integration initiative.",
      content: "In a landmark decision, the World Health Organization has officially recognized traditional surgical practices, including Ayurvedic procedures like Kshara Sutra therapy, as valuable components of global healthcare systems...",
      author: "Dr. Sarah Johnson",
      publication: "Global Health Today",
      publishDate: "2024-01-16",
      readTime: "5 min read",
      tags: ["WHO", "International Recognition", "Policy", "Global Health"],
      image: "/images/news/who-recognition.jpg",
      isBreaking: true,
      isFeatured: true,
      views: 3240,
      likes: 189,
      shares: 67,
      source: "external"
    },
    {
      id: 2,
      title: "NCISM Announces Major Curriculum Updates for Shalya Tantra",
      category: "policy-updates",
      summary: "National Commission for Indian System of Medicine introduces comprehensive reforms to surgical education curriculum.",
      content: "The National Commission for Indian System of Medicine (NCISM) has announced significant updates to the Shalya Tantra curriculum, emphasizing practical training and modern integration...",
      author: "Dr. Rajesh Kotecha",
      publication: "AYUSH Times",
      publishDate: "2024-01-14", 
      readTime: "7 min read",
      tags: ["NCISM", "Curriculum", "Education", "Policy"],
      image: "/images/news/ncism-updates.jpg",
      isBreaking: false,
      isFeatured: true,
      views: 2156,
      likes: 143,
      shares: 45,
      source: "official"
    },
    {
      id: 3,
      title: "Breakthrough Study: AI Diagnostic Tool Achieves 95% Accuracy in Ayurvedic Surgery",
      category: "research-breakthrough",
      summary: "Revolutionary artificial intelligence system demonstrates exceptional accuracy in diagnosing conditions treatable by Ayurvedic surgery.",
      content: "Researchers at AIIMS Delhi have developed an AI-powered diagnostic tool specifically for Ayurvedic surgical conditions, achieving 95% accuracy in preliminary trials...",
      author: "Dr. Priya Sharma",
      publication: "Journal of Integrative Medicine",
      publishDate: "2024-01-12",
      readTime: "8 min read", 
      tags: ["AI", "Research", "Diagnosis", "Innovation"],
      image: "/images/news/ai-breakthrough.jpg",
      isBreaking: false,
      isFeatured: true,
      views: 1987,
      likes: 234,
      shares: 78,
      source: "research"
    },
    {
      id: 4,
      title: "International Conference on Integrative Surgery to be Held in Mumbai",
      category: "conferences",
      summary: "Leading practitioners from around the world will gather to discuss the future of integrative surgical practices.",
      content: "The International Conference on Integrative Surgery will bring together experts from traditional and modern surgical disciplines...",
      author: "Conference Committee",
      publication: "Medical Conference News",
      publishDate: "2024-01-10",
      readTime: "4 min read",
      tags: ["Conference", "Mumbai", "International", "Surgery"],
      image: "/images/news/mumbai-conference.jpg",
      isBreaking: false,
      isFeatured: false,
      views: 1234,
      likes: 89,
      shares: 23,
      source: "event"
    },
    {
      id: 5,
      title: "Dr. Sameep Singh Receives Young Innovator Award for Vedic Surgery Project",
      category: "awards-recognition",
      summary: "Founder of Vedic Surgery project honored for contributions to medical education and technology integration.",
      content: "Dr. Sameep Singh, founder of the Vedic Surgery project, has been awarded the Young Innovator Award by the National Academy of Medical Sciences...",
      author: "Medical Awards Committee", 
      publication: "Healthcare Innovation Journal",
      publishDate: "2024-01-08",
      readTime: "3 min read",
      tags: ["Awards", "Innovation", "Recognition", "Leadership"],
      image: "/images/news/award-ceremony.jpg",
      isBreaking: false,
      isFeatured: false,
      views: 876,
      likes: 156,
      shares: 34,
      source: "internal"
    },
    {
      id: 6,
      title: "New VR Training Module for Kshara Sutra Therapy Launched",
      category: "technology-innovation",
      summary: "Cutting-edge virtual reality system enables immersive training for traditional surgical procedures.",
      content: "A new virtual reality training module specifically designed for Kshara Sutra therapy has been launched, offering students immersive learning experiences...",
      author: "Tech Innovation Team",
      publication: "EdTech Medical",
      publishDate: "2024-01-06",
      readTime: "6 min read",
      tags: ["VR", "Training", "Technology", "Kshara Sutra"],
      image: "/images/news/vr-training.jpg",
      isBreaking: false,
      isFeatured: false,
      views: 1567,
      likes: 198,
      shares: 56,
      source: "technology"
    }
  ];

  const upcomingEvents = [
    {
      title: "International Ayurvedic Surgery Symposium",
      date: "2024-03-15",
      location: "Delhi, India",
      type: "conference",
      registration: "Open"
    },
    {
      title: "NCISM Policy Review Meeting",
      date: "2024-02-28",
      location: "Mumbai, India", 
      type: "meeting",
      registration: "Invitation Only"
    },
    {
      title: "Kshara Sutra Workshop for Practitioners",
      date: "2024-02-20",
      location: "Online",
      type: "workshop",
      registration: "Open"
    },
    {
      title: "Research Publication Deadline - JIAM",
      date: "2024-02-15",
      location: "Online Submission",
      type: "deadline",
      registration: "N/A"
    }
  ];

  const trendingTopics = [
    { topic: "AI in Traditional Medicine", articles: 12, trend: "+25%" },
    { topic: "NCISM Policy Updates", articles: 8, trend: "+15%" },
    { topic: "International Recognition", articles: 6, trend: "+30%" },
    { topic: "Virtual Training", articles: 9, trend: "+20%" }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsArticles.filter(article => article.isFeatured);
  const breakingNews = newsArticles.filter(article => article.isBreaking);

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>
              <Newspaper size={48} className="hero-icon" />
              Surgery NewsPoint
            </h1>
            <p>
              Stay informed about the latest developments in Ayurvedic surgery, 
              research breakthroughs, policy updates, and global recognition efforts.
            </p>
            <div className="news-stats">
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">News Articles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Global Sources</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Daily</span>
                <span className="stat-label">Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News */}
      {breakingNews.length > 0 && (
        <section className="breaking-news">
          <div className="container">
            <div className="breaking-banner">
              <div className="breaking-indicator">
                <AlertCircle size={20} />
                <span>BREAKING NEWS</span>
              </div>
              <div className="breaking-content">
                <div className="breaking-news-scroll">
                  {breakingNews.map((news, index) => (
                    <span key={news.id}>
                      {news.title}
                      {index < breakingNews.length - 1 && ' • '}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured News */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Featured Stories</h2>
            <p>Top stories shaping the future of Ayurvedic surgery</p>
          </div>
          
          <div className="featured-news-grid">
            {featuredNews.slice(0, 3).map((article) => (
              <article key={article.id} className="featured-news-card card">
                <div className="news-image">
                  <div className="image-placeholder">
                    <Newspaper size={48} />
                  </div>
                  <div className="news-meta">
                    <span className="category-badge badge badge-primary">
                      {article.category.replace('-', ' ')}
                    </span>
                    {article.isBreaking && (
                      <span className="breaking-badge badge badge-error">
                        Breaking
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="news-content">
                  <h3>{article.title}</h3>
                  <p className="news-summary">{article.summary}</p>
                  
                  <div className="news-details">
                    <div className="author-info">
                      <span className="author">By {article.author}</span>
                      <span className="publication">{article.publication}</span>
                    </div>
                    <div className="news-timing">
                      <span className="publish-date">
                        <Calendar size={14} />
                        {new Date(article.publishDate).toLocaleDateString()}
                      </span>
                      <span className="read-time">
                        <Clock size={14} />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <div className="news-tags">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="news-tag">
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="news-footer">
                  <div className="news-stats">
                    <span className="stat">
                      <Eye size={14} />
                      {article.views}
                    </span>
                    <span className="stat">
                      <Heart size={14} />
                      {article.likes}
                    </span>
                    <span className="stat">
                      <Share size={14} />
                      {article.shares}
                    </span>
                  </div>
                  
                  <div className="news-actions">
                    <button className="btn btn-primary">Read Full Article</button>
                    {article.source === 'external' && (
                      <button className="btn btn-outline">
                        <ExternalLink size={16} />
                        Source
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section section-alt">
        <div className="container">
          <div className="news-controls">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search news articles, topics, or authors..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="category-filter">
              <select 
                className="form-control"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="research-breakthrough">Research Breakthrough</option>
                <option value="policy-updates">Policy Updates</option>
                <option value="conferences">Conferences</option>
                <option value="awards-recognition">Awards & Recognition</option>
                <option value="international-news">International News</option>
                <option value="technology-innovation">Technology Innovation</option>
                <option value="education-updates">Education Updates</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main News Grid */}
      <section className="section">
        <div className="container">
          <div className="news-layout">
            {/* News Articles */}
            <div className="news-main">
              <div className="news-header">
                <h2>Latest News ({filteredNews.length} articles)</h2>
                <div className="sort-options">
                  <select className="form-control">
                    <option>Sort by Date</option>
                    <option>Sort by Popularity</option>
                    <option>Sort by Views</option>
                    <option>Sort by Category</option>
                  </select>
                </div>
              </div>
              
              <div className="news-list">
                {filteredNews.map((article) => (
                  <article key={article.id} className="news-item card">
                    <div className="news-item-header">
                      <div className="news-meta">
                        <span className="category-badge badge badge-outline">
                          {article.category.replace('-', ' ')}
                        </span>
                        <span className="source-badge badge badge-info">
                          {article.source}
                        </span>
                      </div>
                      <div className="news-date">
                        <Calendar size={14} />
                        <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="news-item-body">
                      <h3>{article.title}</h3>
                      <p className="news-summary">{article.summary}</p>
                      
                      <div className="news-item-details">
                        <div className="author-publication">
                          <span className="author">By {article.author}</span>
                          <span className="publication">{article.publication}</span>
                        </div>
                        <span className="read-time">
                          <Clock size={14} />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <div className="news-tags">
                        {article.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="news-item-footer">
                      <div className="news-stats">
                        <span className="stat">
                          <Eye size={14} />
                          {article.views}
                        </span>
                        <span className="stat">
                          <Heart size={14} />
                          {article.likes}
                        </span>
                        <span className="stat">
                          <Share size={14} />
                          {article.shares}
                        </span>
                      </div>
                      
                      <div className="news-actions">
                        <button className="btn btn-primary">Read More</button>
                        <button className="btn btn-outline">
                          <Share size={16} />
                          Share
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="news-sidebar">
              {/* Trending Topics */}
              <div className="sidebar-widget card">
                <h4>Trending Topics</h4>
                <div className="trending-topics">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="trending-item">
                      <div className="topic-info">
                        <span className="topic-name">{topic.topic}</span>
                        <span className="topic-count">{topic.articles} articles</span>
                      </div>
                      <span className="trend-indicator">
                        <TrendingUp size={14} />
                        {topic.trend}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Upcoming Events */}
              <div className="sidebar-widget card">
                <h4>Upcoming Events</h4>
                <div className="events-list">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="event-item">
                      <div className="event-date">
                        <Calendar size={16} />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="event-details">
                        <h5>{event.title}</h5>
                        <p className="event-location">{event.location}</p>
                        <span className={`event-type badge ${
                          event.type === 'conference' ? 'badge-primary' :
                          event.type === 'workshop' ? 'badge-success' :
                          event.type === 'deadline' ? 'badge-error' : 'badge-info'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter Subscription */}
              <div className="sidebar-widget card">
                <h4>Daily News Digest</h4>
                <p>Get the latest Ayurvedic surgery news delivered to your inbox daily.</p>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your email address"
                  />
                  <button type="submit" className="btn btn-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Recognition Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="recognition-section">
            <div className="content-header">
              <h2>Global Recognition & Partnerships</h2>
              <p>International acknowledgment of Ayurvedic surgical excellence</p>
            </div>
            
            <div className="recognition-grid grid grid-4">
              <div className="recognition-item card">
                <div className="recognition-icon">
                  <Globe size={32} />
                </div>
                <h4>WHO Partnership</h4>
                <p>Official collaboration with World Health Organization for traditional medicine integration</p>
              </div>
              
              <div className="recognition-item card">
                <div className="recognition-icon">
                  <Award size={32} />
                </div>
                <h4>UNESCO Recognition</h4>
                <p>Ayurvedic surgery included in Intangible Cultural Heritage of Humanity</p>
              </div>
              
              <div className="recognition-item card">
                <div className="recognition-icon">
                  <Users size={32} />
                </div>
                <h4>International Collaborations</h4>
                <p>Active partnerships with 25+ countries for knowledge exchange and training</p>
              </div>
              
              <div className="recognition-item card">
                <div className="recognition-icon">
                  <BookOpen size={32} />
                </div>
                <h4>Research Publications</h4>
                <p>200+ peer-reviewed publications in international medical journals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submit News */}
      <section className="section">
        <div className="container">
          <div className="submit-news text-center">
            <h2>Have News to Share?</h2>
            <p>
              Help us keep the community informed about developments in Ayurvedic surgery. 
              Submit your news, research announcements, or event information.
            </p>
            <div className="submit-options">
              <button className="btn btn-primary btn-large">
                <Newspaper size={20} />
                Submit News Article
              </button>
              <button className="btn btn-secondary btn-large">
                <Calendar size={20} />
                Submit Event
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News; 