import React, { useState } from 'react';
import { 
  MessageCircle, 
  Users, 
  Search, 
  Filter, 
  Plus,
  ThumbsUp,
  ThumbsDown,
  Reply,
  Flag,
  Pin,
  Lock,
  Award,
  Calendar,
  Eye,
  TrendingUp,
  User,
  Settings,
  Shield
} from 'lucide-react';

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('recent');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  const categories = [
    { id: 'all', name: 'All Discussions', count: 156 },
    { id: 'kshara-sutra', name: 'Kshara Sutra', count: 34 },
    { id: 'agnikarma', name: 'Agnikarma', count: 28 },
    { id: 'vrana-management', name: 'Vrana Management', count: 42 },
    { id: 'bhagna-chikitsa', name: 'Bhagna Chikitsa', count: 18 },
    { id: 'medhra-roga', name: 'Medhra Roga', count: 15 },
    { id: 'case-studies', name: 'Case Studies', count: 67 },
    { id: 'research-discussion', name: 'Research Discussion', count: 23 },
    { id: 'student-queries', name: 'Student Queries', count: 89 },
    { id: 'general', name: 'General Discussion', count: 45 }
  ];

  const forumPosts = [
    {
      id: 1,
      title: "Complex Anal Fistula Case - Seeking Advice on Kshara Sutra Application",
      category: "kshara-sutra",
      author: {
        name: "Dr. Rajesh Kumar",
        role: "MS Shalya Tantra",
        institution: "BHU Varanasi",
        reputation: 4.8,
        posts: 156
      },
      content: "I have a challenging case of high anal fistula with multiple tracts. The patient has failed conventional surgery twice. Considering Kshara Sutra therapy. Looking for experienced practitioners' advice on approach and expected outcomes.",
      tags: ["complex-case", "kshara-sutra", "anal-fistula", "multiple-tracts"],
      timestamp: "2024-01-15T10:30:00Z",
      replies: 12,
      views: 234,
      upvotes: 18,
      downvotes: 2,
      isPinned: true,
      hasAttachment: true,
      lastActivity: "2024-01-15T16:45:00Z"
    },
    {
      id: 2,
      title: "Agnikarma for Chronic Lower Back Pain - Clinical Protocol Discussion",
      category: "agnikarma",
      author: {
        name: "Dr. Priya Sharma",
        role: "BAMS, PG Scholar",
        institution: "AIIMS Delhi",
        reputation: 4.6,
        posts: 89
      },
      content: "Sharing my experience with Agnikarma for chronic lumbar pain. Developed a standardized protocol showing 85% success rate in 200 patients. Open to peer review and discussion.",
      tags: ["agnikarma", "chronic-pain", "protocol", "clinical-results"],
      timestamp: "2024-01-14T14:20:00Z",
      replies: 8,
      views: 167,
      upvotes: 15,
      downvotes: 0,
      isPinned: false,
      hasAttachment: true,
      lastActivity: "2024-01-15T09:30:00Z"
    },
    {
      id: 3,
      title: "Student Query: Difference between Classical and Modern Wound Management",
      category: "student-queries",
      author: {
        name: "Aditya Sharma",
        role: "BAMS Final Year",
        institution: "Gujarat Ayurved University",
        reputation: 3.2,
        posts: 23
      },
      content: "Can seniors explain the key differences between classical Vrana Chikitsa and modern wound care? How do we integrate both approaches in clinical practice?",
      tags: ["student-query", "vrana-chikitsa", "modern-integration", "wound-care"],
      timestamp: "2024-01-14T11:15:00Z",
      replies: 6,
      views: 145,
      upvotes: 12,
      downvotes: 1,
      isPinned: false,
      hasAttachment: false,
      lastActivity: "2024-01-14T18:20:00Z"
    },
    {
      id: 4,
      title: "Research Discussion: AI-Assisted Diagnosis in Shalya Tantra",
      category: "research-discussion",
      author: {
        name: "Dr. Amit Verma",
        role: "Research Director",
        institution: "National Institute of Ayurveda",
        reputation: 4.9,
        posts: 234
      },
      content: "Presenting preliminary results of our AI diagnostic tool for Ayurvedic surgical conditions. Achieved 92% accuracy in preliminary trials. Seeking collaboration and feedback.",
      tags: ["ai-diagnosis", "research", "technology", "collaboration"],
      timestamp: "2024-01-13T16:45:00Z",
      replies: 15,
      views: 312,
      upvotes: 28,
      downvotes: 3,
      isPinned: true,
      hasAttachment: true,
      lastActivity: "2024-01-15T12:15:00Z"
    }
  ];

  const trendingTopics = [
    { topic: "AI in Ayurvedic Surgery", posts: 23, trend: "+15%" },
    { topic: "Kshara Sutra Techniques", posts: 34, trend: "+8%" },
    { topic: "Modern Integration", posts: 28, trend: "+12%" },
    { topic: "Student Discussions", posts: 89, trend: "+25%" }
  ];

  const activeMembers = [
    {
      name: "Dr. Sameep Singh",
      role: "Founder & Moderator",
      reputation: 5.0,
      posts: 567,
      isOnline: true
    },
    {
      name: "Dr. Saurabh Kumar", 
      role: "Senior Moderator",
      reputation: 4.9,
      posts: 432,
      isOnline: true
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Expert Contributor",
      reputation: 4.8,
      posts: 234,
      isOnline: false
    }
  ];

  const filteredPosts = forumPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="forum-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>
              <MessageCircle size={48} className="hero-icon" />
              Clinical Discussion Forum
            </h1>
            <p>
              A secure, moderated space where Ayurvedic surgeons, PG scholars, and educators 
              discuss real cases, share experiences, and advance the field together.
            </p>
            <div className="forum-stats">
              <div className="stat-item">
                <span className="stat-number">1,200+</span>
                <span className="stat-label">Active Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3,400+</span>
                <span className="stat-label">Discussions</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15,600+</span>
                <span className="stat-label">Replies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Navigation */}
      <section className="section">
        <div className="container">
          <div className="forum-navigation">
            <div className="forum-controls">
              <div className="search-box">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Search discussions, cases, or topics..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="control-buttons">
                <select 
                  className="form-control"
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="active">Most Active</option>
                  <option value="unanswered">Unanswered</option>
                </select>
                
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowNewPostForm(true)}
                >
                  <Plus size={16} />
                  New Discussion
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Forum Layout */}
      <section className="section section-alt">
        <div className="container">
          <div className="forum-layout">
            {/* Categories Sidebar */}
            <div className="forum-sidebar">
              <div className="sidebar-section">
                <h3>Categories</h3>
                <div className="category-list">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span className="category-name">{category.name}</span>
                      <span className="category-count">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Trending Topics</h3>
                <div className="trending-topics">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="trending-item">
                      <div className="topic-info">
                        <span className="topic-name">{topic.topic}</span>
                        <span className="topic-posts">{topic.posts} posts</span>
                      </div>
                      <span className="trend-indicator">
                        <TrendingUp size={14} />
                        {topic.trend}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Active Members</h3>
                <div className="active-members">
                  {activeMembers.map((member, index) => (
                    <div key={index} className="member-item">
                      <div className="member-avatar">
                        <User size={24} />
                        {member.isOnline && <div className="online-indicator"></div>}
                      </div>
                      <div className="member-info">
                        <span className="member-name">{member.name}</span>
                        <span className="member-role">{member.role}</span>
                        <div className="member-stats">
                          <span>{member.posts} posts</span>
                          <span className="reputation">
                            <Award size={12} />
                            {member.reputation}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Discussion Area */}
            <div className="forum-main">
              <div className="forum-header">
                <h2>
                  {selectedCategory === 'all' ? 'All Discussions' : 
                   categories.find(c => c.id === selectedCategory)?.name} 
                  ({filteredPosts.length})
                </h2>
                <div className="forum-info">
                  <span className="info-text">
                    Moderated by expert practitioners | Community guidelines apply
                  </span>
                </div>
              </div>

              <div className="discussion-list">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="discussion-card card">
                    <div className="discussion-header">
                      <div className="discussion-meta">
                        {post.isPinned && (
                          <span className="pin-indicator">
                            <Pin size={14} />
                            Pinned
                          </span>
                        )}
                        <span className="category-badge badge badge-outline">
                          {post.category.replace('-', ' ')}
                        </span>
                      </div>
                      <div className="discussion-actions">
                        <button className="btn-icon">
                          <Flag size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="discussion-content">
                      <h3 className="discussion-title">{post.title}</h3>
                      <p className="discussion-excerpt">{post.content}</p>
                      
                      <div className="discussion-tags">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="discussion-footer">
                      <div className="author-info">
                        <div className="author-avatar">
                          <User size={32} />
                        </div>
                        <div className="author-details">
                          <span className="author-name">{post.author.name}</span>
                          <span className="author-role">{post.author.role}</span>
                          <span className="author-institution">{post.author.institution}</span>
                          <div className="author-reputation">
                            <Award size={12} />
                            <span>{post.author.reputation}</span>
                          </div>
                        </div>
                      </div>

                      <div className="discussion-stats">
                        <div className="stat-group">
                          <span className="stat">
                            <MessageCircle size={14} />
                            {post.replies} replies
                          </span>
                          <span className="stat">
                            <Eye size={14} />
                            {post.views} views
                          </span>
                        </div>
                        
                        <div className="vote-group">
                          <button className="vote-btn upvote">
                            <ThumbsUp size={14} />
                            <span>{post.upvotes}</span>
                          </button>
                          <button className="vote-btn downvote">
                            <ThumbsDown size={14} />
                            <span>{post.downvotes}</span>
                          </button>
                        </div>
                      </div>

                      <div className="discussion-time">
                        <span className="timestamp">
                          <Calendar size={14} />
                          {new Date(post.timestamp).toLocaleDateString()}
                        </span>
                        <span className="last-activity">
                          Last activity: {new Date(post.lastActivity).toLocaleTimeString()}
                        </span>
                      </div>
                    </div>

                    <div className="discussion-actions-footer">
                      <button className="btn btn-primary">
                        <Reply size={16} />
                        Reply
                      </button>
                      <button className="btn btn-outline">
                        View Discussion
                      </button>
                      {post.hasAttachment && (
                        <span className="attachment-indicator">
                          📎 Has attachments
                        </span>
                      )}
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
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="section">
        <div className="container">
          <div className="community-guidelines">
            <div className="content-header">
              <h2>Community Guidelines</h2>
              <p>Maintaining a professional and respectful environment for clinical discussions</p>
            </div>
            
            <div className="guidelines-grid grid grid-3">
              <div className="guideline-card card">
                <div className="guideline-icon">
                  <Shield size={24} />
                </div>
                <h4>Patient Privacy</h4>
                <p>Never share patient identifiable information. Use anonymized case details only.</p>
              </div>
              
              <div className="guideline-card card">
                <div className="guideline-icon">
                  <Award size={24} />
                </div>
                <h4>Professional Conduct</h4>
                <p>Maintain respectful discourse. Support statements with evidence when possible.</p>
              </div>
              
              <div className="guideline-card card">
                <div className="guideline-icon">
                  <Users size={24} />
                </div>
                <h4>Constructive Participation</h4>
                <p>Share knowledge, ask thoughtful questions, and help fellow practitioners learn.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moderator Panel Preview */}
      <section className="section section-alt">
        <div className="container">
          <div className="moderator-info">
            <div className="content-header">
              <h2>Expert Moderation</h2>
              <p>Our discussions are moderated by experienced practitioners and educators</p>
            </div>
            
            <div className="moderator-features grid grid-4">
              <div className="feature-item">
                <div className="feature-icon">
                  <Shield size={24} />
                </div>
                <h4>Content Review</h4>
                <p>All posts reviewed for accuracy and appropriateness</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Award size={24} />
                </div>
                <h4>Expert Validation</h4>
                <p>Senior practitioners verify clinical information</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Users size={24} />
                </div>
                <h4>Community Building</h4>
                <p>Fostering connections between practitioners</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Settings size={24} />
                </div>
                <h4>Quality Control</h4>
                <p>Maintaining high standards of discussion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="section">
        <div className="container">
          <div className="forum-cta text-center">
            <h2>Join Our Community</h2>
            <p>
              Connect with fellow Ayurvedic surgeons, share your experiences, 
              and contribute to the advancement of our field.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                <Users size={20} />
                Join Forum
              </button>
              <button className="btn btn-secondary btn-large">
                <Shield size={20} />
                Moderation Guidelines
              </button>
            </div>
            <p className="membership-note">
              Forum membership requires verification of professional credentials
            </p>
          </div>
        </div>
      </section>

      {/* New Post Modal */}
      {showNewPostForm && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Start New Discussion</h3>
              <button 
                className="modal-close"
                onClick={() => setShowNewPostForm(false)}
              >
                ×
              </button>
            </div>
            <form className="new-post-form">
              <div className="form-group">
                <label className="form-label">Category</label>
                <select className="form-control">
                  <option>Select category</option>
                  <option value="kshara-sutra">Kshara Sutra</option>
                  <option value="agnikarma">Agnikarma</option>
                  <option value="case-studies">Case Studies</option>
                  <option value="student-queries">Student Queries</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Discussion Title</label>
                <input type="text" className="form-control" placeholder="Enter a descriptive title" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Content</label>
                <textarea className="form-control textarea" rows="8" placeholder="Share your case, question, or insights..."></textarea>
              </div>
              
              <div className="form-group">
                <label className="form-label">Tags</label>
                <input type="text" className="form-control" placeholder="Add relevant tags (comma separated)" />
              </div>
              
              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowNewPostForm(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Post Discussion
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forum; 