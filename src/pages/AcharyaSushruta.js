import React from 'react';
import { 
  BookOpen, 
  Award, 
  Calendar, 
  MapPin, 
  Star,
  Scroll,
  Brain,
  Heart,
  Eye,
  Users,
  Lightbulb,
  Globe,
  Quote
} from 'lucide-react';

const AcharyaSushruta = () => {
  const contributions = [
    {
      icon: BookOpen,
      title: "Sushruta Samhita",
      description: "Authored the comprehensive surgical treatise comprising 186 chapters across 6 sections (Sutrasthana, Nidanasthana, Sharirasthana, Chikitsasthana, Kalpasthana, Uttaratantra)."
    },
    {
      icon: Award,
      title: "Father of Surgery",
      description: "Recognized globally as the 'Father of Surgery' and 'Father of Plastic Surgery' for pioneering surgical techniques over 2,500 years ago."
    },
    {
      icon: Brain,
      title: "Surgical Innovations",
      description: "Described over 300 surgical procedures, 120+ surgical instruments, and revolutionary techniques including rhinoplasty, cataract surgery, and cesarean section."
    },
    {
      icon: Eye,
      title: "Ophthalmology Pioneer",
      description: "Detailed 76 eye diseases and performed the world's first recorded cataract surgery using the 'couching' technique."
    },
    {
      icon: Heart,
      title: "Anatomical Knowledge",
      description: "Provided detailed descriptions of human anatomy including 300 bones, 107 joints, 900 ligaments, and 40 major blood vessels."
    },
    {
      icon: Users,
      title: "Medical Education",
      description: "Established systematic surgical training methods, emphasizing practice on models before performing on patients."
    }
  ];

  const surgicalTechniques = [
    {
      name: "Rhinoplasty (Nasal Reconstruction)",
      description: "The famous 'Indian method' of nose reconstruction using forehead flap, still used in modern plastic surgery.",
      significance: "Revolutionary technique for facial reconstruction"
    },
    {
      name: "Cataract Surgery",
      description: "Couching technique for cataract removal, performed with specialized instruments.",
      significance: "Foundation of modern ophthalmological surgery"
    },
    {
      name: "Lithotomy (Stone Removal)",
      description: "Surgical removal of bladder stones through perineal approach.",
      significance: "Pioneered urological surgical procedures"
    },
    {
      name: "Obstetric Procedures",
      description: "Described cesarean section, embryotomy, and other obstetric interventions.",
      significance: "Advanced maternal and fetal care"
    },
    {
      name: "Wound Management",
      description: "Classification of wounds, suturing techniques using ant heads, and wound healing principles.",
      significance: "Foundation of modern wound care"
    },
    {
      name: "Plastic Surgery",
      description: "Ear lobe repair, lip reconstruction, and various cosmetic procedures.",
      significance: "Birth of reconstructive and cosmetic surgery"
    }
  ];

  const instruments = [
    "Shastra (Sharp Instruments) - 20 types including knives, scissors, lancets",
    "Yantra (Blunt Instruments) - 101 types including forceps, probes, catheters",
    "Specialized tools for specific procedures like cataract surgery",
    "Instruments made from various materials: iron, steel, stone, wood"
  ];

  const principles = [
    {
      title: "Pre-operative Care",
      points: [
        "Patient assessment and preparation",
        "Proper timing of surgery (Ritu, season consideration)",
        "Patient positioning and comfort",
        "Sterilization and cleanliness protocols"
      ]
    },
    {
      title: "Operative Techniques",
      points: [
        "Eight fundamental surgical procedures (Ashtavidha Shastra Karma)",
        "Precise incision techniques",
        "Hemostasis (bleeding control)",
        "Anatomical precision and safety"
      ]
    },
    {
      title: "Post-operative Care",
      points: [
        "Wound dressing and bandaging",
        "Pain management with herbal medicines",
        "Diet and lifestyle modifications",
        "Complication prevention and management"
      ]
    }
  ];

  return (
    <div className="acharya-sushruta-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content text-center">
            <h1>
              <span className="sanskrit">आचार्य सुश्रुत</span>
              <br />
              Acharya Sushruta
            </h1>
            <p className="hero-subtitle">
              The Father of Surgery | Pioneer of Plastic Surgery | Ancient India's Greatest Surgeon
            </p>
            <div className="hero-meta">
              <div className="meta-item">
                <Calendar size={20} />
                <span>6th Century BCE</span>
              </div>
              <div className="meta-item">
                <MapPin size={20} />
                <span>Kashi (Varanasi), India</span>
              </div>
              <div className="meta-item">
                <BookOpen size={20} />
                <span>Author of Sushruta Samhita</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <div className="content-card">
            <h2>The Legendary Surgeon of Ancient India</h2>
            <div className="intro-content">
              <p className="lead">
                Acharya Sushruta, often hailed as the "Father of Surgery" and the "Father of Plastic Surgery," 
                was an ancient Indian physician and surgeon who lived around the 6th century BCE. His monumental 
                work, the <strong>Sushruta Samhita</strong>, is one of the foundational texts of Ayurveda and 
                represents the pinnacle of surgical knowledge in ancient times.
              </p>
              <p>
                Born in Kashi (modern-day Varanasi), Sushruta was a disciple of the divine physician Dhanvantari, 
                the god of Ayurveda. His contributions to medicine and surgery were so profound that they continue 
                to influence modern surgical practices even after more than 2,500 years.
              </p>
              <p>
                The Sushruta Samhita describes over 1,120 diseases, 700 medicinal plants, and detailed surgical 
                procedures that showcase an extraordinary understanding of human anatomy, pathology, and therapeutic 
                interventions. His work predates similar developments in Western medicine by centuries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Major Contributions */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Major Contributions to Medical Science</h2>
            <p>Revolutionary achievements that shaped the course of surgical history</p>
          </div>
          <div className="grid grid-3">
            {contributions.map((contribution, index) => (
              <div key={index} className="contribution-card card">
                <div className="card-icon">
                  <contribution.icon size={32} />
                </div>
                <h3>{contribution.title}</h3>
                <p>{contribution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgical Techniques */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Revolutionary Surgical Techniques</h2>
            <p>Pioneering procedures that were millennia ahead of their time</p>
          </div>
          <div className="techniques-grid">
            {surgicalTechniques.map((technique, index) => (
              <div key={index} className="technique-card card">
                <div className="technique-header">
                  <Star size={20} className="technique-icon" />
                  <h3>{technique.name}</h3>
                </div>
                <p className="technique-description">{technique.description}</p>
                <div className="technique-significance">
                  <Lightbulb size={16} />
                  <span>{technique.significance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surgical Instruments */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Surgical Instruments (Yantra & Shastra)</h2>
            <p>Over 120 surgical instruments designed for various procedures</p>
          </div>
          <div className="instruments-content card">
            <div className="instruments-intro">
              <p>
                Sushruta classified surgical instruments into two main categories: <strong>Shastra</strong> (sharp 
                instruments) and <strong>Yantra</strong> (blunt instruments). His detailed descriptions of these 
                tools demonstrate remarkable engineering and understanding of surgical needs.
              </p>
            </div>
            <div className="instruments-list">
              {instruments.map((instrument, index) => (
                <div key={index} className="instrument-item">
                  <Award size={20} />
                  <span>{instrument}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Principles */}
      <section className="section">
        <div className="container">
          <div className="content-header">
            <h2>Surgical Principles & Protocols</h2>
            <p>Comprehensive approach to surgical care</p>
          </div>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <div key={index} className="principle-card card">
                <h3>{principle.title}</h3>
                <ul className="principle-list">
                  {principle.points.map((point, idx) => (
                    <li key={idx}>
                      <Star size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Recognition */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-header">
            <h2>Global Recognition & Legacy</h2>
            <p>Honoring the timeless contributions of Acharya Sushruta</p>
          </div>
          <div className="recognition-content">
            <div className="recognition-grid">
              <div className="recognition-card card">
                <Globe size={32} />
                <h3>International Acknowledgment</h3>
                <p>
                  The British physician Joseph Constantine Carpue successfully performed the first major 
                  plastic surgery in the Western world in 1815 using the "Indian method" described by Sushruta.
                </p>
              </div>
              <div className="recognition-card card">
                <BookOpen size={32} />
                <h3>Medical Literature</h3>
                <p>
                  The Sushruta Samhita has been translated into numerous languages and is studied in medical 
                  schools worldwide as a historical reference for surgical evolution.
                </p>
              </div>
              <div className="recognition-card card">
                <Award size={32} />
                <h3>Modern Relevance</h3>
                <p>
                  Many of Sushruta's principles, including aseptic techniques, wound classification, and 
                  reconstructive surgery methods, remain relevant in contemporary medical practice.
                </p>
              </div>
              <div className="recognition-card card">
                <Scroll size={32} />
                <h3>UNESCO Recognition</h3>
                <p>
                  Ancient Indian surgical texts, including the Sushruta Samhita, are recognized as invaluable 
                  contributions to world heritage and medical knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section">
        <div className="container">
          <div className="quote-section card">
            <div className="quote-icon">
              <Quote size={48} />
            </div>
            <blockquote className="sushruta-quote">
              <p className="sanskrit-quote">
                "शल्यं शस्त्रकृतं व्रणं विशोध्य संशोध्य च योजयेत् |<br />
                सूत्रेण वा अग्निना वा क्षाराल्कलीभिः एव वा ||"
              </p>
              <p className="quote-translation">
                "After cleansing and purifying the wound caused by a sharp instrument, 
                it should be united by sutures, cautery, or alkaline substances."
              </p>
              <cite>— Sushruta Samhita, Sutrasthana 25.3</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-section text-center">
            <h2>Explore the Sushruta Samhita</h2>
            <p>
              Dive deeper into the complete text and discover the surgical wisdom that has 
              influenced medical practice for over two millennia.
            </p>
            <div className="cta-buttons">
              <a href="/sushruta-samhita" className="btn btn-primary btn-large">
                <BookOpen size={20} />
                Read Sushruta Samhita
              </a>
              <a href="/textbooks" className="btn btn-secondary btn-large">
                <Scroll size={20} />
                Access Study Materials
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcharyaSushruta;

