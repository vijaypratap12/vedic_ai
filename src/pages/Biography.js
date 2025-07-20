import React, { useState } from 'react';
import { 
  User, 
  Award, 
  BookOpen, 
  MapPin, 
  Calendar, 
  Star,
  Eye,
  Heart,
  Quote,
  Download,
  Share,
  Search,
  Filter
} from 'lucide-react';

const Biography = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'all',
    'contemporary-masters',
    'classical-scholars',
    'modern-innovators',
    'international-pioneers',
    'young-achievers'
  ];

  const biographies = [
    {
      id: 1,
      name: "Dr. Mahesh Pande",
      title: "Pioneer in Endourology and Ayurveda Integration",
      currentPosition: "Senior Consultant, Leading Medical Institute",
      specialization: "Endourology, Minimally Invasive Surgery, Ayurvedic Integration",
      location: "Delhi, India",
      featured: true,
      category: "contemporary-masters",
      achievements: [
        "Performed 5000+ Kshara Sutra procedures",
        "Authored 15 research papers on modern-Ayurvedic integration",
        "Established first integrated surgical unit",
        "Trained 200+ surgeons in combined techniques"
      ],
      education: [
        "MBBS - All India Institute of Medical Sciences",
        "MS (General Surgery) - AIIMS Delhi",
        "BAMS - National Institute of Ayurveda",
        "Fellowship in Endourology - Germany"
      ],
      contributions: [
        "Developed standardized protocols for Kshara Sutra in modern settings",
        "Pioneered integration of Ayurvedic principles in minimally invasive surgery",
        "Established training programs for dual-qualified surgeons",
        "Created evidence-based guidelines for practice"
      ],
      awards: [
        "Best Surgeon Award 2023",
        "Innovation in Medicine 2022",
        "Ayurvedic Excellence Award 2021"
      ],
      quote: "The future of surgery lies not in choosing between ancient and modern, but in intelligently combining the best of both worlds.",
      interview: {
        date: "January 2024",
        highlights: [
          "Journey from modern surgery to Ayurveda",
          "Challenges in integration",
          "Future vision for surgical practice"
        ]
      },
      image: "/images/biography/dr-mahesh-pande.jpg",
      views: 2340,
      likes: 156
    },
    {
      id: 2,
      name: "Dr. Sunita Rao",
      title: "Master of Traditional Kshara Karma Techniques",
      currentPosition: "Professor & Head, SDM College of Ayurveda, Udupi",
      specialization: "Kshara Karma, Agnikarma, Traditional Surgical Techniques",
      location: "Udupi, Karnataka",
      featured: true,
      category: "contemporary-masters",
      achievements: [
        "40+ years of clinical practice",
        "Expert in all 64 Shastra Karmas",
        "Revived ancient techniques with modern documentation",
        "Trained over 500 students in traditional methods"
      ],
      education: [
        "BAMS - SDM College of Ayurveda, Udupi",
        "MD (Shalya Tantra) - Rajiv Gandhi University",
        "Advanced Training in Classical Texts - Banaras Hindu University"
      ],
      contributions: [
        "Documented 50+ traditional surgical procedures",
        "Established protocols for ancient instrument usage",
        "Created comprehensive training modules",
        "Published definitive guide on Kshara Karma"
      ],
      awards: [
        "Lifetime Achievement in Ayurveda 2023",
        "Traditional Knowledge Preservation Award 2022",
        "Best Teacher Award 2021"
      ],
      quote: "Every ancient technique holds secrets that modern surgery is just beginning to understand.",
      interview: {
        date: "December 2023",
        highlights: [
          "Preserving ancient wisdom",
          "Training new generation",
          "Documentation of procedures"
        ]
      },
      image: "/images/biography/dr-sunita-rao.jpg",
      views: 1890,
      likes: 134
    },
    {
      id: 3,
      name: "Dr. Rajesh Kotecha",
      title: "International Ambassador of Ayurvedic Surgery",
      currentPosition: "Secretary, Ministry of AYUSH, Government of India",
      specialization: "Policy Development, International Relations, Healthcare Administration",
      location: "New Delhi, India",
      featured: false,
      category: "modern-innovators",
      achievements: [
        "Established WHO collaboration for traditional medicine",
        "Led integration of Ayurveda in national health policy",
        "Facilitated international recognition programs",
        "Championed evidence-based Ayurvedic practice"
      ],
      education: [
        "BAMS - Government Ayurvedic College",
        "MD (Kayachikitsa) - Rajasthan University",
        "MBA (Healthcare Management) - IGNOU",
        "Diploma in Public Health - Johns Hopkins"
      ],
      contributions: [
        "Developed national standards for Ayurvedic surgery",
        "Established international training exchanges",
        "Created policy framework for integration",
        "Led WHO traditional medicine initiatives"
      ],
      awards: [
        "Padma Shri 2023",
        "WHO Recognition for Traditional Medicine 2022",
        "Healthcare Leadership Award 2021"
      ],
      quote: "Ayurveda's global recognition is not just our achievement, but our responsibility to humanity.",
      interview: {
        date: "November 2023",
        highlights: [
          "Policy development for Ayurveda",
          "International collaborations",
          "Future of traditional medicine"
        ]
      },
      image: "/images/biography/dr-rajesh-kotecha.jpg",
      views: 1567,
      likes: 98
    },
    {
      id: 4,
      name: "Dr. Priya Sharma",
      title: "Young Innovator in AI-Assisted Ayurvedic Surgery",
      currentPosition: "Research Director, AIIMS Delhi",
      specialization: "AI in Surgery, Machine Learning, Digital Health",
      location: "Delhi, India",
      featured: false,
      category: "young-achievers",
      achievements: [
        "Developed first AI diagnostic tool for Ayurvedic surgery",
        "Published 25+ papers on technology integration",
        "Founded HealthTech startup for Ayurveda",
        "Led major research grants in digital health"
      ],
      education: [
        "BAMS - All India Institute of Ayurveda",
        "MS (Shalya Tantra) - AIIMS Delhi",
        "MS (Computer Science) - IIT Delhi",
        "PhD (Biomedical Engineering) - Johns Hopkins"
      ],
      contributions: [
        "Created AI-powered surgical planning tools",
        "Developed telemedicine platforms for Ayurveda",
        "Established digital health research lab",
        "Mentored 50+ students in technology integration"
      ],
      awards: [
        "Young Scientist Award 2023",
        "Innovation in Healthcare 2022",
        "Women in STEM Excellence 2021"
      ],
      quote: "Technology is not replacing traditional wisdom; it's amplifying its reach and precision.",
      interview: {
        date: "October 2023",
        highlights: [
          "AI in traditional medicine",
          "Bridging technology and tradition",
          "Vision for digital Ayurveda"
        ]
      },
      image: "/images/biography/dr-priya-sharma.jpg",
      views: 2100,
      likes: 187
    }
  ];

  const classicalScholars = [
    {
      name: "Maharishi Sushruta",
      period: "6th Century BCE",
      contribution: "Father of Surgery, authored Sushruta Samhita",
      significance: "Laid foundation of surgical science"
    },
    {
      name: "Acharya Charaka",
      period: "2nd Century CE",
      contribution: "Integrated surgical principles with internal medicine",
      significance: "Holistic approach to healing"
    },
    {
      name: "Vagbhata",
      period: "7th Century CE",
      contribution: "Compiled comprehensive medical knowledge",
      significance: "Systematic organization of Ayurvedic wisdom"
    }
  ];

  const filteredBiographies = biographies.filter(bio => {
    const matchesCategory = selectedCategory === 'all' || bio.category === selectedCategory;
    const matchesSearch = bio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bio.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBiographies = biographies.filter(bio => bio.featured);

  return (
    <div className="biography-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>Legends in Ayurvedic Surgery</h1>
            <p>
              Celebrating the masters, innovators, and pioneers who have shaped 
              the field of Ayurvedic surgery and continue to inspire future generations.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Featured Surgeons</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Years of Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Institutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Masters */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Featured Masters</h2>
            <p>Monthly spotlight on distinguished practitioners and their contributions</p>
          </div>
          
          <div className="featured-masters">
            {featuredBiographies.map((bio) => (
              <div key={bio.id} className="master-profile card">
                <div className="profile-header">
                  <div className="profile-image">
                    <div className="image-placeholder">
                      <User size={80} />
                    </div>
                    <div className="featured-badge">
                      <Star size={16} />
                      Featured
                    </div>
                  </div>
                  
                  <div className="profile-info">
                    <h3>{bio.name}</h3>
                    <p className="profile-title">{bio.title}</p>
                    <p className="current-position">{bio.currentPosition}</p>
                    <div className="profile-meta">
                      <span className="location">
                        <MapPin size={14} />
                        {bio.location}
                      </span>
                      <span className="specialization">{bio.specialization}</span>
                    </div>
                  </div>
                  
                  <div className="profile-stats">
                    <div className="stat">
                      <Eye size={16} />
                      <span>{bio.views}</span>
                    </div>
                    <div className="stat">
                      <Heart size={16} />
                      <span>{bio.likes}</span>
                    </div>
                  </div>
                </div>
                
                <div className="profile-content">
                  <div className="quote-section">
                    <Quote size={24} className="quote-icon" />
                    <blockquote>{bio.quote}</blockquote>
                  </div>
                  
                  <div className="achievements-section">
                    <h4>Key Achievements</h4>
                    <ul className="achievements-list">
                      {bio.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={index}>
                          <Award size={14} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="recent-interview">
                    <h4>Recent Interview</h4>
                    <div className="interview-info">
                      <span className="interview-date">
                        <Calendar size={14} />
                        {bio.interview.date}
                      </span>
                      <div className="interview-highlights">
                        {bio.interview.highlights.map((highlight, index) => (
                          <span key={index} className="highlight-tag">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="profile-actions">
                  <button className="btn btn-primary">
                    <BookOpen size={16} />
                    Read Full Biography
                  </button>
                  <button className="btn btn-outline">
                    <Download size={16} />
                    Download CV
                  </button>
                  <button className="btn btn-outline">
                    <Share size={16} />
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section section-alt">
        <div className="container">
          <div className="search-filter-section">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search by name, specialization, or location..."
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
                <option value="contemporary-masters">Contemporary Masters</option>
                <option value="classical-scholars">Classical Scholars</option>
                <option value="modern-innovators">Modern Innovators</option>
                <option value="international-pioneers">International Pioneers</option>
                <option value="young-achievers">Young Achievers</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Grid */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>All Biographies ({filteredBiographies.length})</h2>
            <p>Explore the lives and contributions of Ayurvedic surgery experts</p>
          </div>
          
          <div className="biography-grid grid grid-2">
            {filteredBiographies.map((bio) => (
              <div key={bio.id} className="biography-card card">
                <div className="bio-header">
                  <div className="bio-image">
                    <User size={48} />
                  </div>
                  <div className="bio-info">
                    <h3>{bio.name}</h3>
                    <p className="bio-title">{bio.title}</p>
                    <span className="category-badge badge badge-outline">
                      {bio.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="bio-content">
                  <div className="bio-meta">
                    <div className="meta-item">
                      <MapPin size={14} />
                      <span>{bio.location}</span>
                    </div>
                    <div className="meta-item">
                      <Award size={14} />
                      <span>{bio.achievements.length} achievements</span>
                    </div>
                  </div>
                  
                  <p className="bio-specialization">{bio.specialization}</p>
                  
                  <div className="bio-highlights">
                    <h5>Key Contributions:</h5>
                    <ul>
                      {bio.contributions.slice(0, 2).map((contribution, index) => (
                        <li key={index}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bio-quote">
                    <Quote size={16} />
                    <p>"{bio.quote}"</p>
                  </div>
                </div>
                
                <div className="bio-footer">
                  <div className="bio-stats">
                    <span className="stat">
                      <Eye size={14} />
                      {bio.views}
                    </span>
                    <span className="stat">
                      <Heart size={14} />
                      {bio.likes}
                    </span>
                  </div>
                  <button className="btn btn-primary">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classical Scholars */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Classical Scholars & Ancient Masters</h2>
            <p>Honoring the foundational figures of Ayurvedic surgery</p>
          </div>
          
          <div className="classical-scholars grid grid-3">
            {classicalScholars.map((scholar, index) => (
              <div key={index} className="scholar-card card">
                <div className="scholar-icon">
                  <BookOpen size={32} />
                </div>
                <h3>{scholar.name}</h3>
                <p className="scholar-period">{scholar.period}</p>
                <p className="scholar-contribution">{scholar.contribution}</p>
                <div className="significance">
                  <strong>Significance:</strong>
                  <p>{scholar.significance}</p>
                </div>
                <button className="btn btn-outline">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Series */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Monthly Interview Series</h2>
            <p>In-depth conversations with leading practitioners</p>
          </div>
          
          <div className="interview-series">
            <div className="grid grid-2">
              <div className="interview-card card">
                <div className="interview-header">
                  <h3>January 2024 Interview</h3>
                  <p className="interviewee">Dr. Mahesh Pande</p>
                </div>
                <div className="interview-content">
                  <p className="interview-preview">
                    "The integration of endourology techniques with traditional Kshara Sutra 
                    therapy has opened new possibilities for minimally invasive treatment..."
                  </p>
                  <div className="interview-topics">
                    <span className="topic-tag">Modern Integration</span>
                    <span className="topic-tag">Innovation</span>
                    <span className="topic-tag">Future Vision</span>
                  </div>
                </div>
                <button className="btn btn-primary">
                  Read Full Interview
                </button>
              </div>
              
              <div className="interview-card card">
                <div className="interview-header">
                  <h3>December 2023 Interview</h3>
                  <p className="interviewee">Dr. Sunita Rao</p>
                </div>
                <div className="interview-content">
                  <p className="interview-preview">
                    "Preserving the authenticity of ancient techniques while making them 
                    accessible to modern practitioners requires careful documentation..."
                  </p>
                  <div className="interview-topics">
                    <span className="topic-tag">Traditional Methods</span>
                    <span className="topic-tag">Education</span>
                    <span className="topic-tag">Preservation</span>
                  </div>
                </div>
                <button className="btn btn-primary">
                  Read Full Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container">
          <div className="biography-cta text-center">
            <h2>Know a Legend?</h2>
            <p>
              Help us recognize and celebrate the masters of Ayurvedic surgery. 
              Nominate inspiring practitioners, educators, and innovators for our biography series.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                <User size={20} />
                Nominate a Legend
              </button>
              <button className="btn btn-secondary btn-large">
                <BookOpen size={20} />
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biography; 