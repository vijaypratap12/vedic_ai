import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Target,
  TrendingUp,
  Award,
  Users,
  FileText,
  Download,
  Play,
  BarChart3,
  Settings,
  Star
} from 'lucide-react';

const SyllabusTracker = () => {
  const [selectedLevel, setSelectedLevel] = useState('ug');
  const [selectedYear, setSelectedYear] = useState('1');
  const [viewMode, setViewMode] = useState('overview');

  const syllabusData = {
    ug: {
      title: "BAMS Undergraduate Program",
      description: "Bachelor of Ayurvedic Medicine and Surgery - Shalya Tantra Component",
      years: {
        '1': {
          title: "First Year BAMS",
          subjects: [
            {
              name: "Padartha Vigyan & Ayurveda Itihas",
              credits: 4,
              totalHours: 150,
              completedHours: 150,
              topics: ["Basic Principles", "History of Ayurveda", "Fundamental Concepts"],
              status: "completed",
              grade: "A",
              ncismCode: "AY-101"
            },
            {
              name: "Sanskrit & Ayurveda Sahitya",
              credits: 3,
              totalHours: 100,
              completedHours: 100,
              topics: ["Classical Texts", "Sanskrit Grammar", "Medical Terminology"],
              status: "completed",
              grade: "A-",
              ncismCode: "AY-102"
            },
            {
              name: "Kriya Sharir (Physiology)",
              credits: 5,
              totalHours: 200,
              completedHours: 200,
              topics: ["Anatomical Systems", "Physiological Processes", "Dosha Theory"],
              status: "completed",
              grade: "A+",
              ncismCode: "AY-103"
            },
            {
              name: "Rachana Sharir (Anatomy)",
              credits: 5,
              totalHours: 200,
              completedHours: 200,
              topics: ["Human Anatomy", "Surgical Anatomy", "Practical Dissection"],
              status: "completed",
              grade: "A",
              ncismCode: "AY-104"
            }
          ]
        },
        '2': {
          title: "Second Year BAMS",
          subjects: [
            {
              name: "Dravyaguna Vigyan",
              credits: 4,
              totalHours: 150,
              completedHours: 150,
              topics: ["Medicinal Plants", "Drug Properties", "Pharmacology"],
              status: "completed",
              grade: "A",
              ncismCode: "AY-201"
            },
            {
              name: "Rasa Shastra & Bhaishajya Kalpana",
              credits: 4,
              totalHours: 150,
              completedHours: 150,
              topics: ["Medicine Preparation", "Pharmaceutical Processes", "Quality Control"],
              status: "completed", 
              grade: "A-",
              ncismCode: "AY-202"
            },
            {
              name: "Roga Vigyan & Vikriti Vigyan",
              credits: 4,
              totalHours: 150,
              completedHours: 120,
              topics: ["Disease Pathology", "Diagnostic Methods", "Clinical Examination"],
              status: "in-progress",
              grade: "Pending",
              ncismCode: "AY-203"
            },
            {
              name: "Introduction to Shalya Tantra",
              credits: 3,
              totalHours: 100,
              completedHours: 80,
              topics: ["Surgical Principles", "Basic Instruments", "Wound Care"],
              status: "in-progress",
              grade: "Pending",
              ncismCode: "ST-201"
            }
          ]
        },
        '3': {
          title: "Third Year BAMS",
          subjects: [
            {
              name: "Shalya Tantra (Theory)",
              credits: 6,
              totalHours: 200,
              completedHours: 45,
              topics: ["Advanced Surgical Techniques", "Speciality Procedures", "Modern Integration"],
              status: "in-progress",
              grade: "Pending",
              ncismCode: "ST-301"
            },
            {
              name: "Shalya Tantra (Practical)",
              credits: 4,
              totalHours: 150,
              completedHours: 30,
              topics: ["Clinical Training", "Procedure Observation", "Hands-on Practice"],
              status: "in-progress", 
              grade: "Pending",
              ncismCode: "ST-302"
            },
            {
              name: "Shalakya Tantra",
              credits: 4,
              totalHours: 150,
              completedHours: 20,
              topics: ["ENT Procedures", "Ophthalmology", "Head & Neck Surgery"],
              status: "not-started",
              grade: "Pending",
              ncismCode: "SL-301"
            }
          ]
        },
        '4': {
          title: "Fourth Year BAMS (Internship)",
          subjects: [
            {
              name: "Clinical Shalya Tantra",
              credits: 8,
              totalHours: 400,
              completedHours: 0,
              topics: ["Clinical Cases", "Surgical Procedures", "Patient Management"],
              status: "not-started",
              grade: "Pending",
              ncismCode: "ST-401"
            },
            {
              name: "Research Project",
              credits: 4,
              totalHours: 200,
              completedHours: 0,
              topics: ["Research Methodology", "Data Collection", "Thesis Writing"],
              status: "not-started",
              grade: "Pending",
              ncismCode: "RP-401"
            }
          ]
        }
      }
    },
    pg: {
      title: "MS Shalya Tantra Program",
      description: "Master of Surgery in Shalya Tantra - Postgraduate Specialization",
      years: {
        '1': {
          title: "First Year MS",
          subjects: [
            {
              name: "Classical Shalya Tantra Literature",
              credits: 6,
              totalHours: 250,
              completedHours: 250,
              topics: ["Sushruta Samhita", "Classical Commentaries", "Historical Analysis"],
              status: "completed",
              grade: "A+",
              ncismCode: "MST-101"
            },
            {
              name: "Modern Surgical Principles",
              credits: 5,
              totalHours: 200,
              completedHours: 200,
              topics: ["Contemporary Surgery", "Evidence-based Practice", "Integration Methods"],
              status: "completed",
              grade: "A",
              ncismCode: "MST-102"
            },
            {
              name: "Research Methodology",
              credits: 3,
              totalHours: 100,
              completedHours: 100,
              topics: ["Research Design", "Statistical Analysis", "Publication Ethics"],
              status: "completed",
              grade: "A",
              ncismCode: "RM-101"
            }
          ]
        },
        '2': {
          title: "Second Year MS",
          subjects: [
            {
              name: "Advanced Clinical Practice",
              credits: 8,
              totalHours: 400,
              completedHours: 320,
              topics: ["Complex Cases", "Surgical Techniques", "Patient Management"],
              status: "in-progress",
              grade: "Pending",
              ncismCode: "MST-201"
            },
            {
              name: "Dissertation Work",
              credits: 6,
              totalHours: 300,
              completedHours: 180,
              topics: ["Original Research", "Data Analysis", "Thesis Preparation"],
              status: "in-progress",
              grade: "Pending",
              ncismCode: "DIS-201"
            }
          ]
        },
        '3': {
          title: "Third Year MS",
          subjects: [
            {
              name: "Thesis Completion",
              credits: 10,
              totalHours: 500,
              completedHours: 50,
              topics: ["Final Research", "Thesis Defense", "Publication"],
              status: "in-progress",
              grade: "Pending",
              ncismCode: "THC-301"
            },
            {
              name: "Teaching & Training",
              credits: 3,
              totalHours: 150,
              completedHours: 20,
              topics: ["Educational Methods", "Student Mentoring", "Curriculum Development"],
              status: "not-started",
              grade: "Pending",
              ncismCode: "TT-301"
            }
          ]
        }
      }
    }
  };

  const currentData = syllabusData[selectedLevel];
  const currentYearData = currentData.years[selectedYear];
  
  const calculateOverallProgress = () => {
    const allSubjects = Object.values(currentData.years).flatMap(year => year.subjects);
    const totalHours = allSubjects.reduce((sum, subject) => sum + subject.totalHours, 0);
    const completedHours = allSubjects.reduce((sum, subject) => sum + subject.completedHours, 0);
    return Math.round((completedHours / totalHours) * 100);
  };

  const upcomingDeadlines = [
    {
      subject: "Roga Vigyan & Vikriti Vigyan",
      task: "Final Assessment",
      date: "2024-02-15",
      priority: "high"
    },
    {
      subject: "Introduction to Shalya Tantra", 
      task: "Practical Examination",
      date: "2024-02-20",
      priority: "medium"
    },
    {
      subject: "Shalya Tantra (Theory)",
      task: "Mid-term Evaluation",
      date: "2024-03-01",
      priority: "medium"
    }
  ];

  const studySchedule = [
    {
      time: "9:00 AM - 11:00 AM",
      subject: "Shalya Tantra Theory",
      topic: "Kshara Sutra Procedures",
      type: "lecture"
    },
    {
      time: "11:30 AM - 1:00 PM", 
      subject: "Clinical Practice",
      topic: "OPD Case Studies",
      type: "practical"
    },
    {
      time: "2:00 PM - 4:00 PM",
      subject: "Research Work",
      topic: "Literature Review",
      type: "self-study"
    },
    {
      time: "4:30 PM - 6:00 PM",
      subject: "Roga Vigyan",
      topic: "Diagnostic Methods",
      type: "tutorial"
    }
  ];

  return (
    <div className="syllabus-tracker-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1>
              <Target size={48} className="hero-icon" />
              Syllabus Tracker & Learning Schedule
            </h1>
            <p>
              Track your progress through the NCISM-aligned curriculum, manage deadlines, 
              and optimize your learning schedule for BAMS and MS Shalya Tantra programs.
            </p>
            <div className="level-switcher">
              <button 
                className={`btn ${selectedLevel === 'ug' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedLevel('ug')}
              >
                <BookOpen size={20} />
                BAMS (UG)
              </button>
              <button 
                className={`btn ${selectedLevel === 'pg' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setSelectedLevel('pg')}
              >
                <Award size={20} />
                MS Shalya Tantra (PG)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Dashboard */}
      <section className="section">
        <div className="container">
          <div className="progress-dashboard">
            <div className="dashboard-header">
              <h2>{currentData.title}</h2>
              <p>{currentData.description}</p>
              <div className="overall-progress">
                <div className="progress-circle">
                  <span className="progress-percentage">{calculateOverallProgress()}%</span>
                  <span className="progress-label">Overall Progress</span>
                </div>
              </div>
            </div>

            <div className="dashboard-stats grid grid-4">
              <div className="stat-card card">
                <div className="stat-icon">
                  <BookOpen size={32} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">
                    {Object.values(currentData.years).reduce((sum, year) => sum + year.subjects.length, 0)}
                  </span>
                  <span className="stat-label">Total Subjects</span>
                </div>
              </div>
              
              <div className="stat-card card">
                <div className="stat-icon">
                  <CheckCircle size={32} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">
                    {Object.values(currentData.years).reduce((sum, year) => 
                      sum + year.subjects.filter(s => s.status === 'completed').length, 0
                    )}
                  </span>
                  <span className="stat-label">Completed</span>
                </div>
              </div>
              
              <div className="stat-card card">
                <div className="stat-icon">
                  <Clock size={32} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">
                    {Object.values(currentData.years).reduce((sum, year) => 
                      sum + year.subjects.filter(s => s.status === 'in-progress').length, 0
                    )}
                  </span>
                  <span className="stat-label">In Progress</span>
                </div>
              </div>
              
              <div className="stat-card card">
                <div className="stat-icon">
                  <TrendingUp size={32} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">
                    {Object.values(currentData.years).reduce((sum, year) => 
                      sum + year.subjects.filter(s => s.grade === 'A' || s.grade === 'A+').length, 0
                    )}
                  </span>
                  <span className="stat-label">A Grades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year Selection & Subject Details */}
      <section className="section section-alt">
        <div className="container">
          <div className="syllabus-content">
            <div className="year-tabs">
              {Object.keys(currentData.years).map((year) => (
                <button
                  key={year}
                  className={`year-tab ${selectedYear === year ? 'active' : ''}`}
                  onClick={() => setSelectedYear(year)}
                >
                  {currentData.years[year].title}
                </button>
              ))}
            </div>

            <div className="year-content">
              <div className="year-header">
                <h3>{currentYearData.title}</h3>
                <div className="year-stats">
                  <span className="total-credits">
                    Total Credits: {currentYearData.subjects.reduce((sum, s) => sum + s.credits, 0)}
                  </span>
                  <span className="total-hours">
                    Total Hours: {currentYearData.subjects.reduce((sum, s) => sum + s.totalHours, 0)}
                  </span>
                </div>
              </div>

              <div className="subjects-grid">
                {currentYearData.subjects.map((subject, index) => (
                  <div key={index} className="subject-card card">
                    <div className="subject-header">
                      <div className="subject-info">
                        <h4>{subject.name}</h4>
                        <span className="ncism-code">{subject.ncismCode}</span>
                      </div>
                      <div className="subject-status">
                        <span className={`status-badge badge ${
                          subject.status === 'completed' ? 'badge-success' :
                          subject.status === 'in-progress' ? 'badge-warning' : 'badge-info'
                        }`}>
                          {subject.status === 'completed' ? <CheckCircle size={14} /> :
                           subject.status === 'in-progress' ? <Clock size={14} /> :
                           <Target size={14} />}
                          {subject.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>

                    <div className="subject-progress">
                      <div className="progress-info">
                        <span>Progress: {subject.completedHours}/{subject.totalHours} hours</span>
                        <span>{Math.round((subject.completedHours / subject.totalHours) * 100)}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${(subject.completedHours / subject.totalHours) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="subject-details">
                      <div className="subject-meta">
                        <span className="credits">
                          <Award size={14} />
                          {subject.credits} Credits
                        </span>
                        <span className="grade">
                          <Star size={14} />
                          Grade: {subject.grade}
                        </span>
                      </div>

                      <div className="subject-topics">
                        <h5>Topics Covered:</h5>
                        <div className="topic-tags">
                          {subject.topics.map((topic, topicIndex) => (
                            <span key={topicIndex} className="topic-tag">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="subject-actions">
                      <button className="btn btn-primary btn-small">
                        <Play size={14} />
                        Study Materials
                      </button>
                      <button className="btn btn-outline btn-small">
                        <FileText size={14} />
                        Notes
                      </button>
                      <button className="btn btn-outline btn-small">
                        <BarChart3 size={14} />
                        Analytics
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Deadlines */}
      <section className="section">
        <div className="container">
          <div className="deadlines-section">
            <div className="content-header">
              <h2>Upcoming Deadlines</h2>
              <p>Stay on track with important assessments and submissions</p>
            </div>
            
            <div className="deadlines-list">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="deadline-card card">
                  <div className="deadline-info">
                    <div className="deadline-main">
                      <h4>{deadline.task}</h4>
                      <p className="deadline-subject">{deadline.subject}</p>
                    </div>
                    <div className="deadline-meta">
                      <span className="deadline-date">
                        <Calendar size={16} />
                        {new Date(deadline.date).toLocaleDateString()}
                      </span>
                      <span className={`priority-badge badge ${
                        deadline.priority === 'high' ? 'badge-error' :
                        deadline.priority === 'medium' ? 'badge-warning' : 'badge-info'
                      }`}>
                        {deadline.priority} priority
                      </span>
                    </div>
                  </div>
                  <div className="deadline-actions">
                    <button className="btn btn-outline btn-small">
                      Set Reminder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Study Schedule */}
      <section className="section section-alt">
        <div className="container">
          <div className="schedule-section">
            <div className="content-header">
              <h2>Today's Study Schedule</h2>
              <p>Optimized learning plan for maximum efficiency</p>
            </div>
            
            <div className="schedule-timeline">
              {studySchedule.map((session, index) => (
                <div key={index} className="schedule-item">
                  <div className="schedule-time">
                    <span className="time">{session.time}</span>
                  </div>
                  <div className="schedule-content card">
                    <div className="session-info">
                      <h4>{session.subject}</h4>
                      <p>{session.topic}</p>
                    </div>
                    <div className="session-meta">
                      <span className={`session-type badge ${
                        session.type === 'lecture' ? 'badge-primary' :
                        session.type === 'practical' ? 'badge-success' :
                        session.type === 'tutorial' ? 'badge-info' : 'badge-warning'
                      }`}>
                        {session.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NCISM Compliance */}
      <section className="section">
        <div className="container">
          <div className="compliance-section">
            <div className="content-header">
              <h2>NCISM Compliance Dashboard</h2>
              <p>Ensure your curriculum meets all NCISM requirements</p>
            </div>
            
            <div className="compliance-grid grid grid-3">
              <div className="compliance-card card">
                <div className="compliance-header">
                  <CheckCircle size={24} color="var(--success-color)" />
                  <h4>Curriculum Alignment</h4>
                </div>
                <div className="compliance-status">
                  <span className="status-indicator success">100% Aligned</span>
                  <p>All subjects match NCISM requirements</p>
                </div>
              </div>
              
              <div className="compliance-card card">
                <div className="compliance-header">
                  <Clock size={24} color="var(--warning-color)" />
                  <h4>Credit Requirements</h4>
                </div>
                <div className="compliance-status">
                  <span className="status-indicator warning">85% Complete</span>
                  <p>On track to meet minimum credit hours</p>
                </div>
              </div>
              
              <div className="compliance-card card">
                <div className="compliance-header">
                  <Target size={24} color="var(--info-color)" />
                  <h4>Assessment Standards</h4>
                </div>
                <div className="compliance-status">
                  <span className="status-indicator info">Standards Met</span>
                  <p>Evaluation methods comply with NCISM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="section section-alt">
        <div className="container">
          <div className="tools-section">
            <div className="content-header">
              <h2>Learning Tools & Resources</h2>
              <p>Additional tools to enhance your academic journey</p>
            </div>
            
            <div className="tools-grid grid grid-4">
              <div className="tool-card card">
                <div className="tool-icon">
                  <Download size={24} />
                </div>
                <h4>Study Materials</h4>
                <p>Download subject-wise notes and resources</p>
                <button className="btn btn-outline btn-small">Access Files</button>
              </div>
              
              <div className="tool-card card">
                <div className="tool-icon">
                  <Calendar size={24} />
                </div>
                <h4>Academic Calendar</h4>
                <p>View exam dates and important deadlines</p>
                <button className="btn btn-outline btn-small">View Calendar</button>
              </div>
              
              <div className="tool-card card">
                <div className="tool-icon">
                  <BarChart3 size={24} />
                </div>
                <h4>Performance Analytics</h4>
                <p>Track your academic performance trends</p>
                <button className="btn btn-outline btn-small">View Analytics</button>
              </div>
              
              <div className="tool-card card">
                <div className="tool-icon">
                  <Settings size={24} />
                </div>
                <h4>Customize Schedule</h4>
                <p>Personalize your learning schedule</p>
                <button className="btn btn-outline btn-small">Customize</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SyllabusTracker; 