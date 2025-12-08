import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import context
import { AuthProvider } from './context/AuthContext';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Import pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import AcharyaSushruta from './pages/AcharyaSushruta';
import ShalyaTantra from './pages/ShalyaTantra';
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
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public routes - Login and Signup without Navbar/Footer */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Public Home page with Navbar/Footer */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main>
                    <Home />
                  </main>
                  <Footer />
                </>
              }
            />

            {/* Protected routes - All other pages require authentication */}
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <main>
                    <Routes>
                      <Route path="/acharya-sushruta" element={<AcharyaSushruta />} />
                      <Route path="/shalya-tantra" element={<ShalyaTantra />} />
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
                      {/* Redirect any unknown routes to home */}
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </main>
                  <Footer />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 