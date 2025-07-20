import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share, 
  Search,
  Filter,
  BookOpen,
  TrendingUp,
  Star,
  Clock,
  Tag,
  ArrowRight
} from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    'all',
    'research-updates',
    'surgical-techniques',
    'case-studies',
    'modern-integration',
    'guest-posts',
    'news-updates',
    'educational-content'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Revolutionary AI Integration in Ayurvedic Surgery Education",
      excerpt: "Exploring how artificial intelligence is transforming the way we teach and learn traditional surgical techniques, making ancient wisdom accessible to modern students.",
      author: "Dr. Sameep Singh",
      authorRole: "Founder & Lead Developer",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "modern-integration",
      tags: ["AI", "Education", "Technology", "Innovation"],
      featured: true,
      views: 2340,
      likes: 89,
      comments: 24,
      image: "/images/blog/ai-integration.jpg"
    },
    {
      id: 2,
      title: "Clinical Evidence for Kshara Sutra Therapy: A Meta-Analysis",
      excerpt: "Comprehensive review of recent clinical studies demonstrating the efficacy of Kshara Sutra therapy in treating various anorectal conditions.",
      author: "Dr. Saurabh Kumar",
      authorRole: "Chief Clinical Advisor",
      publishDate: "2024-01-10",
      readTime: "12 min read",
      category: "research-updates",
      tags: ["Kshara Sutra", "Clinical Evidence", "Research", "Meta-Analysis"],
      featured: true,
      views: 1876,
      likes: 67,
      comments: 18,
      image: "/images/blog/kshara-sutra-evidence.jpg"
    },
    {
      id: 3,
      title: "Modern Operating Theater Setup for Ayurvedic Surgery",
      excerpt: "Guidelines for establishing and maintaining modern surgical facilities while preserving the essence of traditional Ayurvedic surgical practice.",
      author: "Dr. Priya Sharma",
      authorRole: "Guest Author - AIIMS Delhi",
      publishDate: "2024-01-05",
      readTime: "10 min read",
      category: "surgical-techniques",
      tags: ["Operating Theater", "Infrastructure", "Safety", "Standards"],
      featured: false,
      views: 1455,
      likes: 52,
      comments: 15,
      image: "/images/blog/modern-ot-setup.jpg"
    },
    {
      id: 4,
      title: "Case Study: Successful Treatment of Complex Fistula using Traditional Methods",
      excerpt: "Detailed case presentation showcasing the effectiveness of traditional Ayurvedic surgical methods in treating complex anorectal fistula.",
      author: "Dr. Rajesh Kumar",
      authorRole: "MS Shalya Tantra, BHU",
      publishDate: "2023-12-28",
      readTime: "15 min read",
      category: "case-studies",
      tags: ["Case Study", "Fistula", "Traditional Methods", "Clinical Success"],
      featured: false,
      views: 1234,
      likes: 45,
      comments: 12,
      image: "/images/blog/fistula-case-study.jpg"
    },
    {
      id: 5,
      title: "NCISM Curriculum Updates: What Students Need to Know",
      excerpt: "Overview of the latest changes to NCISM curriculum for Shalya Tantra and their implications for current and future students.",
      author: "Dr. Meera Joshi",
      authorRole: "Academic Coordinator",
      publishDate: "2023-12-20",
      readTime: "6 min read",
      category: "educational-content",
      tags: ["NCISM", "Curriculum", "Education", "Students"],
      featured: false,
      views: 2145,
      likes: 78,
      comments: 31,
      image: "/images/blog/ncism-updates.jpg"
    },
    {
      id: 6,
      title: "International Recognition of Ayurvedic Surgery: Recent Developments",
      excerpt: "Examining the growing global recognition of Ayurvedic surgical techniques and their integration into international medical practice.",
      author: "Dr. Amit Verma",
      authorRole: "International Relations",
      publishDate: "2023-12-15",
      readTime: "9 min read",
      category: "news-updates",
      tags: ["International", "Recognition", "Global Health", "Integration"],
      featured: false,
      views: 1876,
      likes: 63,
      comments: 19,
      image: "/images/blog/international-recognition.jpg"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 3);
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const popularTags = [
    'AI', 'Kshara Sutra', 'Modern Integration', 'Clinical Evidence', 
    'Education', 'Research', 'Case Studies', 'NCISM', 'Traditional Methods'
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Vedic Surgery Blog</h1>
            <p>
              Insights, research updates, and expert perspectives on Ayurvedic surgery, 
              modern integration, and educational innovation.
            </p>
            <div className="blog-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Articles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Expert Authors</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Monthly Readers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Featured Articles</h2>
            <p>Highlighted insights and breakthrough research in Ayurvedic surgery</p>
          </div>
          
          <div className="featured-articles">
            {featuredPosts.map((post) => (
              <div key={post.id} className="featured-article-card card">
                <div className="article-image">
                  <div className="image-placeholder">
                    <BookOpen size={48} />
                  </div>
                  <div className="featured-badge">
                    <Star size={16} />
                    Featured
                  </div>
                </div>
                
                <div className="article-content">
                  <div className="article-meta">
                    <span className="category-badge badge badge-primary">
                      {post.category.replace('-', ' ')}
                    </span>
                    <div className="article-stats">
                      <span className="stat">
                        <Eye size={14} />
                        {post.views}
                      </span>
                      <span className="stat">
                        <Heart size={14} />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                  
                  <h3>{post.title}</h3>
                  <p className="article-excerpt">{post.excerpt}</p>
                  
                  <div className="article-footer">
                    <div className="author-info">
                      <div className="author-avatar">
                        <User size={24} />
                      </div>
                      <div className="author-details">
                        <span className="author-name">{post.author}</span>
                        <span className="author-role">{post.authorRole}</span>
                      </div>
                    </div>
                    
                    <div className="article-actions">
                      <span className="read-time">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                      <button className="btn btn-primary">
                        Read More <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section section-alt">
        <div className="container">
          <div className="blog-controls">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
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
                <option value="research-updates">Research Updates</option>
                <option value="surgical-techniques">Surgical Techniques</option>
                <option value="case-studies">Case Studies</option>
                <option value="modern-integration">Modern Integration</option>
                <option value="guest-posts">Guest Posts</option>
                <option value="news-updates">News Updates</option>
                <option value="educational-content">Educational Content</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section">
        <div className="container">
          <div className="blog-layout">
            {/* Articles List */}
            <div className="articles-main">
              <div className="articles-header">
                <h2>Recent Articles ({filteredPosts.length})</h2>
                <div className="sort-options">
                  <select className="form-control">
                    <option>Sort by Date</option>
                    <option>Sort by Popularity</option>
                    <option>Sort by Views</option>
                    <option>Sort by Comments</option>
                  </select>
                </div>
              </div>
              
              <div className="articles-grid">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="article-card card">
                    <div className="article-header">
                      <div className="article-meta">
                        <span className="category-badge badge badge-outline">
                          {post.category.replace('-', ' ')}
                        </span>
                        <span className="publish-date">
                          <Calendar size={14} />
                          {post.publishDate}
                        </span>
                      </div>
                    </div>
                    
                    <div className="article-body">
                      <h3>{post.title}</h3>
                      <p className="article-excerpt">{post.excerpt}</p>
                      
                      <div className="article-tags">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="tag">
                            <Tag size={12} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="article-footer">
                      <div className="author-info">
                        <div className="author-avatar">
                          <User size={20} />
                        </div>
                        <div className="author-details">
                          <span className="author-name">{post.author}</span>
                          <span className="read-time">{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="article-stats">
                        <span className="stat">
                          <Eye size={14} />
                          {post.views}
                        </span>
                        <span className="stat">
                          <Heart size={14} />
                          {post.likes}
                        </span>
                        <span className="stat">
                          <MessageCircle size={14} />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                    
                    <div className="article-actions">
                      <button className="btn btn-primary">Read Full Article</button>
                      <button className="btn btn-outline">
                        <Share size={16} />
                        Share
                      </button>
                    </div>
                  </article>
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
            
            {/* Sidebar */}
            <div className="blog-sidebar">
              {/* Popular Tags */}
              <div className="sidebar-widget card">
                <h4>Popular Topics</h4>
                <div className="tag-cloud">
                  {popularTags.map((tag, index) => (
                    <button 
                      key={index} 
                      className="tag-button"
                      onClick={() => setSearchTerm(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Recent Posts */}
              <div className="sidebar-widget card">
                <h4>Recent Posts</h4>
                <div className="recent-posts">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="recent-post-item">
                      <h5>{post.title}</h5>
                      <div className="recent-post-meta">
                        <span className="author">{post.author}</span>
                        <span className="date">{post.publishDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="sidebar-widget card">
                <h4>Subscribe to Updates</h4>
                <p>Get the latest articles and research updates delivered to your inbox.</p>
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
              
              {/* Archive */}
              <div className="sidebar-widget card">
                <h4>Archive</h4>
                <div className="archive-list">
                  <div className="archive-item">
                    <span>January 2024</span>
                    <span className="count">5 posts</span>
                  </div>
                  <div className="archive-item">
                    <span>December 2023</span>
                    <span className="count">8 posts</span>
                  </div>
                  <div className="archive-item">
                    <span>November 2023</span>
                    <span className="count">6 posts</span>
                  </div>
                  <div className="archive-item">
                    <span>October 2023</span>
                    <span className="count">4 posts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Authors */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Featured Guest Authors</h2>
            <p>Expert voices from the Ayurvedic surgery community</p>
          </div>
          
          <div className="guest-authors grid grid-4">
            <div className="author-card card">
              <div className="author-avatar-large">
                <User size={48} />
              </div>
              <h4>Dr. Priya Sharma</h4>
              <p className="author-title">Senior Consultant, AIIMS Delhi</p>
              <p className="author-bio">Expert in modern integration of Ayurvedic surgical techniques</p>
              <div className="author-stats">
                <span>5 Articles</span>
                <span>2.3K Views</span>
              </div>
            </div>
            
            <div className="author-card card">
              <div className="author-avatar-large">
                <User size={48} />
              </div>
              <h4>Dr. Rajesh Kumar</h4>
              <p className="author-title">Professor, BHU Varanasi</p>
              <p className="author-bio">Specialist in Kshara Sutra therapy and anorectal surgery</p>
              <div className="author-stats">
                <span>8 Articles</span>
                <span>4.1K Views</span>
              </div>
            </div>
            
            <div className="author-card card">
              <div className="author-avatar-large">
                <User size={48} />
              </div>
              <h4>Dr. Meera Joshi</h4>
              <p className="author-title">Research Director, Gujarat Ayurved University</p>
              <p className="author-bio">Pioneer in evidence-based Ayurvedic surgery research</p>
              <div className="author-stats">
                <span>12 Articles</span>
                <span>6.8K Views</span>
              </div>
            </div>
            
            <div className="author-card card">
              <div className="author-avatar-large">
                <User size={48} />
              </div>
              <h4>Dr. Amit Verma</h4>
              <p className="author-title">International Advisor</p>
              <p className="author-bio">Leading global recognition efforts for Ayurvedic surgery</p>
              <div className="author-stats">
                <span>6 Articles</span>
                <span>3.2K Views</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="blog-cta text-center">
            <h2>Share Your Expertise</h2>
            <p>
              Have insights, research, or experiences to share with the Ayurvedic surgery community? 
              We welcome guest contributions from practitioners, researchers, and educators.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                <BookOpen size={20} />
                Submit Guest Post
              </button>
              <button className="btn btn-secondary btn-large">
                <MessageCircle size={20} />
                Join Discussion
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 