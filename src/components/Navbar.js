import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/sushruta-samhita', label: 'Sushruta Samhita' },
    { path: '/textbooks', label: 'Textbooks' },
    { path: '/research', label: 'Research' },
    { path: '/jurisprudence', label: 'Jurisprudence' },
    { path: '/biography', label: 'Biography' },
    { path: '/blog', label: 'Blog' },
    { path: '/syllabus-tracker', label: 'Syllabus' },
    // { path: '/simulations', label: 'Simulations' },
    // { path: '/news', label: 'News' },
    // { path: '/forum', label: 'Forum' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <span className="sanskrit">वैदिक</span> Surgery
          </Link>
          
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={isActive(item.path)}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 