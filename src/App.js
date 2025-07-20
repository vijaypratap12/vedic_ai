import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SushrutaSamhita from './pages/SushrutaSamhita';
import Textbooks from './pages/Textbooks';
import Research from './pages/Research';
import Jurisprudence from './pages/Jurisprudence';
import Biography from './pages/Biography';
import Blog from './pages/Blog';
import SyllabusTracker from './pages/SyllabusTracker';
import Simulations from './pages/Simulations';
import News from './pages/News';
import Forum from './pages/Forum';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sushruta-samhita" element={<SushrutaSamhita />} />
            <Route path="/textbooks" element={<Textbooks />} />
            <Route path="/research" element={<Research />} />
            <Route path="/jurisprudence" element={<Jurisprudence />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/syllabus-tracker" element={<SyllabusTracker />} />
            <Route path="/simulations" element={<Simulations />} />
            <Route path="/news" element={<News />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirect any unknown routes (including /dashboard) to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 