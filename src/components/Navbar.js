import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });
  const userButtonRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  // Calculate dropdown position
  useEffect(() => {
    if (showUserMenu && userButtonRef.current) {
      const rect = userButtonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
  }, [showUserMenu]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/sushruta-samhita', label: 'Sushruta Samhita' },
    { path: '/textbooks', label: 'Textbooks' },
    { path: '/research', label: 'Research' },
    // Hidden for now - will be implemented later
    // { path: '/jurisprudence', label: 'Jurisprudence' },
    // { path: '/biography', label: 'Biography' },
    // { path: '/blog', label: 'Blog' },
    // { path: '/syllabus-tracker', label: 'Syllabus' },
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

          {/* User Menu or Auth Buttons */}
          <div className="navbar-user">
            {isAuthenticated() ? (
              <>
                <button
                  ref={userButtonRef}
                  className="user-menu-button"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  aria-label="User menu"
                >
                  <User size={20} />
                  <span className="user-name">{user?.name || user?.email || 'User'}</span>
                </button>
              </>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="auth-btn login-btn">
                  Login
                </Link>
                <Link to="/signup" className="auth-btn signup-btn">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* User Dropdown Portal - Rendered outside navbar */}
      {showUserMenu && ReactDOM.createPortal(
        <>
          {/* Overlay to close user menu */}
          <div
            className="user-menu-overlay"
            onClick={() => setShowUserMenu(false)}
          ></div>
          
          {/* Dropdown */}
          <div 
            className="user-dropdown user-dropdown-portal"
            style={{
              top: `${dropdownPosition.top}px`,
              right: `${dropdownPosition.right}px`,
            }}
          >
            <div className="user-dropdown-header">
              <div className="user-avatar">
                <User size={24} />
              </div>
              <div className="user-info">
                <div className="user-info-name">{user?.name || 'User'}</div>
                <div className="user-info-email">{user?.email}</div>
              </div>
            </div>
            <div className="user-dropdown-divider"></div>
            <button
              className="user-dropdown-item logout-button"
              onClick={handleLogout}
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </>,
        document.body
      )}
    </nav>
  );
};

export default Navbar; 