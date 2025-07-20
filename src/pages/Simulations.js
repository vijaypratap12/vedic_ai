import React, { useState } from 'react';
import { 
  Play, 
  Trophy, 
  Target, 
  Clock, 
  Star,
  Users,
  BookOpen,
  Zap,
  Award,
  BarChart3,
  Settings,
  Download,
  Lock,
  CheckCircle,
  Brain,
  Gamepad2
} from 'lucide-react';

const Simulations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const simulationCategories = [
    'all',
    'kshara-sutra',
    'agnikarma',
    'vrana-management',
    'shastra-karma',
    'yantra-karma',
    'diagnostic-skills'
  ];

  const simulations = [
    {
      id: 1,
      title: "Kshara Sutra Application Simulator",
      category: "kshara-sutra",
      difficulty: "intermediate",
      duration: "45 minutes",
      description: "Master the art of Kshara Sutra application with step-by-step guidance and real-time feedback.",
      objectives: [
        "Learn proper thread preparation",
        "Master insertion techniques",
        "Understand patient positioning",
        "Practice post-procedure care"
      ],
      features: [
        "3D Anatomical Models",
        "Interactive Guidance", 
        "Performance Analytics",
        "Mistake Learning"
      ],
      completionRate: 78,
      userRating: 4.8,
      enrolledUsers: 1234,
      prerequisites: ["Basic Anatomy", "Surgical Principles"],
      rewards: {
        points: 150,
        badge: "Kshara Sutra Specialist",
        certificate: true
      },
      isLocked: false,
      thumbnail: "/images/simulations/kshara-sutra-sim.jpg"
    },
    {
      id: 2,
      title: "Agnikarma Procedure Trainer",
      category: "agnikarma",
      difficulty: "beginner",
      duration: "30 minutes",
      description: "Learn the ancient art of therapeutic cauterization with modern simulation technology.",
      objectives: [
        "Understand heat application principles",
        "Master instrument handling",
        "Learn safety protocols", 
        "Practice on various conditions"
      ],
      features: [
        "Virtual Instruments",
        "Temperature Control",
        "Safety Monitoring",
        "Patient Interaction"
      ],
      completionRate: 92,
      userRating: 4.9,
      enrolledUsers: 2156,
      prerequisites: ["Basic Medical Knowledge"],
      rewards: {
        points: 100,
        badge: "Agnikarma Apprentice",
        certificate: true
      },
      isLocked: false,
      thumbnail: "/images/simulations/agnikarma-sim.jpg"
    },
    {
      id: 3,
      title: "Complex Wound Assessment & Management",
      category: "vrana-management",
      difficulty: "advanced",
      duration: "60 minutes",
      description: "Advanced simulation for managing complex wounds using both classical and modern approaches.",
      objectives: [
        "Assess wound severity",
        "Choose appropriate treatment",
        "Apply classical principles",
        "Monitor healing progress"
      ],
      features: [
        "AI-Powered Assessment",
        "Treatment Planning",
        "Outcome Prediction",
        "Case Variations"
      ],
      completionRate: 65,
      userRating: 4.7,
      enrolledUsers: 876,
      prerequisites: ["Kshara Sutra Basics", "Agnikarma Fundamentals"],
      rewards: {
        points: 200,
        badge: "Wound Care Expert",
        certificate: true
      },
      isLocked: false,
      thumbnail: "/images/simulations/wound-management-sim.jpg"
    },
    {
      id: 4,
      title: "Surgical Instrument Mastery",
      category: "yantra-karma", 
      difficulty: "beginner",
      duration: "25 minutes",
      description: "Interactive training for all 101 surgical instruments mentioned in Sushruta Samhita.",
      objectives: [
        "Identify instruments correctly",
        "Learn proper handling",
        "Understand specific uses",
        "Practice maintenance"
      ],
      features: [
        "3D Instrument Models",
        "Usage Demonstrations",
        "Identification Quizzes",
        "Maintenance Tips"
      ],
      completionRate: 88,
      userRating: 4.6,
      enrolledUsers: 1876,
      prerequisites: ["None"],
      rewards: {
        points: 75,
        badge: "Instrument Expert",
        certificate: false
      },
      isLocked: false,
      thumbnail: "/images/simulations/instruments-sim.jpg"
    },
    {
      id: 5,
      title: "Advanced Bhagna Chikitsa Simulation",
      category: "shastra-karma",
      difficulty: "advanced", 
      duration: "90 minutes",
      description: "Comprehensive fracture management training combining Ayurvedic and modern techniques.",
      objectives: [
        "Diagnose fracture types",
        "Plan treatment approach",
        "Execute reduction techniques",
        "Manage complications"
      ],
      features: [
        "X-ray Integration",
        "Biomechanical Analysis", 
        "Treatment Planning",
        "Recovery Monitoring"
      ],
      completionRate: 45,
      userRating: 4.8,
      enrolledUsers: 456,
      prerequisites: ["Advanced Anatomy", "Surgical Experience"],
      rewards: {
        points: 300,
        badge: "Fracture Specialist",
        certificate: true
      },
      isLocked: true,
      thumbnail: "/images/simulations/fracture-sim.jpg"
    },
    {
      id: 6,
      title: "Clinical Diagnosis Game",
      category: "diagnostic-skills",
      difficulty: "intermediate",
      duration: "40 minutes", 
      description: "Gamified diagnostic challenge with real patient scenarios and time pressure.",
      objectives: [
        "Rapid case assessment",
        "Differential diagnosis",
        "Treatment prioritization",
        "Decision making under pressure"
      ],
      features: [
        "Timed Challenges",
        "Scoring System",
        "Leaderboards",
        "Difficulty Scaling"
      ],
      completionRate: 72,
      userRating: 4.5,
      enrolledUsers: 1567,
      prerequisites: ["Basic Clinical Knowledge"],
      rewards: {
        points: 125,
        badge: "Diagnostic Expert",
        certificate: false
      },
      isLocked: false,
      thumbnail: "/images/simulations/diagnosis-game.jpg"
    }
  ];

  const userProgress = {
    totalPoints: 650,
    level: 4,
    completedSimulations: 3,
    totalSimulations: 6,
    badges: ["Agnikarma Apprentice", "Instrument Expert", "Kshara Sutra Specialist"],
    rank: 156
  };

  const leaderboard = [
    { rank: 1, name: "Dr. Priya Sharma", points: 2150, level: 8 },
    { rank: 2, name: "Aditya Kumar", points: 1980, level: 7 },
    { rank: 3, name: "Dr. Rajesh Gupta", points: 1845, level: 7 },
    { rank: 4, name: "Sneha Patel", points: 1720, level: 6 },
    { rank: 5, name: "Dr. Amit Singh", points: 1650, level: 6 }
  ];

  const filteredSimulations = simulations.filter(sim => {
    const matchesCategory = selectedCategory === 'all' || sim.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || sim.difficulty === selectedDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  return (
    <div className="simulations-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>
              <Gamepad2 size={48} className="hero-icon" />
              Surgical Simulation & Gamified Learning
            </h1>
            <p>
              Master Ayurvedic surgical techniques through interactive simulations, 
              gamified challenges, and virtual reality training modules.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Simulations</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5,000+</span>
                <span className="stat-label">Active Learners</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Progress Dashboard */}
      <section className="section">
        <div className="container">
          <div className="user-dashboard">
            <div className="dashboard-header">
              <h2>Your Learning Progress</h2>
              <p>Track your achievements and skill development</p>
            </div>
            
            <div className="progress-cards grid grid-4">
              <div className="progress-card card">
                <div className="card-icon">
                  <Trophy size={24} />
                </div>
                <div className="card-content">
                  <span className="progress-number">{userProgress.totalPoints}</span>
                  <span className="progress-label">Total Points</span>
                </div>
              </div>
              
              <div className="progress-card card">
                <div className="card-icon">
                  <Star size={24} />
                </div>
                <div className="card-content">
                  <span className="progress-number">Level {userProgress.level}</span>
                  <span className="progress-label">Current Level</span>
                </div>
              </div>
              
              <div className="progress-card card">
                <div className="card-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="card-content">
                  <span className="progress-number">
                    {userProgress.completedSimulations}/{userProgress.totalSimulations}
                  </span>
                  <span className="progress-label">Completed</span>
                </div>
              </div>
              
              <div className="progress-card card">
                <div className="card-icon">
                  <Users size={24} />
                </div>
                <div className="card-content">
                  <span className="progress-number">#{userProgress.rank}</span>
                  <span className="progress-label">Global Rank</span>
                </div>
              </div>
            </div>

            <div className="badges-section">
              <h3>Earned Badges</h3>
              <div className="badges-grid">
                {userProgress.badges.map((badge, index) => (
                  <div key={index} className="badge-item">
                    <Award size={32} />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section section-alt">
        <div className="container">
          <div className="simulation-filters">
            <h2>Available Simulations</h2>
            <div className="filter-controls">
              <div className="filter-group">
                <label>Category</label>
                <select 
                  className="form-control"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="kshara-sutra">Kshara Sutra</option>
                  <option value="agnikarma">Agnikarma</option>
                  <option value="vrana-management">Vrana Management</option>
                  <option value="shastra-karma">Shastra Karma</option>
                  <option value="yantra-karma">Yantra Karma</option>
                  <option value="diagnostic-skills">Diagnostic Skills</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label>Difficulty</label>
                <select 
                  className="form-control"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulations Grid */}
      <section className="section">
        <div className="container">
          <div className="simulations-grid">
            {filteredSimulations.map((simulation) => (
              <div key={simulation.id} className="simulation-card card">
                <div className="simulation-header">
                  <div className="simulation-image">
                    <div className="image-placeholder">
                      <Play size={48} />
                    </div>
                    {simulation.isLocked && (
                      <div className="lock-overlay">
                        <Lock size={24} />
                      </div>
                    )}
                  </div>
                  
                  <div className="simulation-meta">
                    <span className={`difficulty-badge badge ${
                      simulation.difficulty === 'beginner' ? 'badge-success' :
                      simulation.difficulty === 'intermediate' ? 'badge-warning' : 'badge-error'
                    }`}>
                      {simulation.difficulty}
                    </span>
                    <span className="category-badge badge badge-outline">
                      {simulation.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                <div className="simulation-content">
                  <h3>{simulation.title}</h3>
                  <p className="simulation-description">{simulation.description}</p>
                  
                  <div className="simulation-stats">
                    <div className="stat">
                      <Clock size={14} />
                      <span>{simulation.duration}</span>
                    </div>
                    <div className="stat">
                      <Users size={14} />
                      <span>{simulation.enrolledUsers.toLocaleString()}</span>
                    </div>
                    <div className="stat">
                      <Star size={14} />
                      <span>{simulation.userRating}</span>
                    </div>
                  </div>

                  <div className="simulation-progress">
                    <span>Completion Rate: {simulation.completionRate}%</span>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${simulation.completionRate}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="simulation-objectives">
                    <h5>Learning Objectives:</h5>
                    <ul>
                      {simulation.objectives.slice(0, 2).map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="simulation-features">
                    <h5>Features:</h5>
                    <div className="feature-tags">
                      {simulation.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="simulation-rewards">
                    <div className="reward-item">
                      <Trophy size={14} />
                      <span>{simulation.rewards.points} points</span>
                    </div>
                    <div className="reward-item">
                      <Award size={14} />
                      <span>{simulation.rewards.badge}</span>
                    </div>
                    {simulation.rewards.certificate && (
                      <div className="reward-item">
                        <CheckCircle size={14} />
                        <span>Certificate</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="simulation-footer">
                  {simulation.isLocked ? (
                    <div className="locked-info">
                      <Lock size={16} />
                      <span>Complete prerequisites to unlock</span>
                    </div>
                  ) : (
                    <div className="simulation-actions">
                      <button className="btn btn-primary">
                        <Play size={16} />
                        Start Simulation
                      </button>
                      <button className="btn btn-outline">
                        <BookOpen size={16} />
                        Learn More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="section section-alt">
        <div className="container">
          <div className="leaderboard-section">
            <div className="content-header">
              <h2>Global Leaderboard</h2>
              <p>See how you rank against other learners worldwide</p>
            </div>
            
            <div className="leaderboard-table">
              <div className="table-header">
                <span>Rank</span>
                <span>Name</span>
                <span>Points</span>
                <span>Level</span>
              </div>
              
              {leaderboard.map((entry) => (
                <div key={entry.rank} className="table-row">
                  <span className="rank">
                    {entry.rank <= 3 && <Trophy size={16} />}
                    #{entry.rank}
                  </span>
                  <span className="name">{entry.name}</span>
                  <span className="points">{entry.points.toLocaleString()}</span>
                  <span className="level">Level {entry.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section">
        <div className="container">
          <div className="coming-soon-section">
            <div className="content-header">
              <h2>Coming Soon: VR/AR Experiences</h2>
              <p>Next-generation immersive learning experiences in development</p>
            </div>
            
            <div className="coming-soon-grid grid grid-3">
              <div className="preview-card card">
                <div className="preview-icon">
                  <Brain size={32} />
                </div>
                <h4>VR Operating Theater</h4>
                <p>Immersive virtual reality surgical training environment with haptic feedback</p>
                <span className="coming-badge badge badge-info">Q2 2024</span>
              </div>
              
              <div className="preview-card card">
                <div className="preview-icon">
                  <Target size={32} />
                </div>
                <h4>AR Anatomy Overlay</h4>
                <p>Augmented reality anatomical visualization for enhanced learning</p>
                <span className="coming-badge badge badge-info">Q3 2024</span>
              </div>
              
              <div className="preview-card card">
                <div className="preview-icon">
                  <Zap size={32} />
                </div>
                <h4>AI Tutor System</h4>
                <p>Personalized AI-powered learning companion and assessment</p>
                <span className="coming-badge badge badge-info">Q4 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section section-alt">
        <div className="container">
          <div className="getting-started text-center">
            <h2>Ready to Begin Your Journey?</h2>
            <p>
              Start with beginner-friendly simulations and work your way up to advanced procedures. 
              Earn points, unlock achievements, and master the art of Ayurvedic surgery.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                <Play size={20} />
                Start First Simulation
              </button>
              <button className="btn btn-secondary btn-large">
                <Download size={20} />
                Download Mobile App
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Simulations; 