import React, { createContext, useState, useContext, useEffect } from 'react';
import apiService from '../services/api';

// Create Auth Context
const AuthContext = createContext(null);

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('vedic_ai_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('vedic_ai_user');
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      // Call the real API
      const response = await apiService.login(email, password);

      if (response.success && response.data) {
        const { id, name, email: userEmail, token, refreshToken, createdAt, profileImageUrl } = response.data;

        // Create user object
        const userData = {
          id,
          name,
          email: userEmail,
          createdAt,
          profileImageUrl,
        };

        // Store user data and tokens
        localStorage.setItem('vedic_ai_user', JSON.stringify(userData));
        localStorage.setItem('vedic_ai_token', token);
        localStorage.setItem('vedic_ai_refresh_token', refreshToken);

        setUser(userData);
        return { success: true, user: userData };
      }

      return { success: false, error: 'Login failed' };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.message || 'An error occurred during login' 
      };
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    try {
      // Call the real API
      const response = await apiService.signup(name, email, password);

      if (response.success && response.data) {
        const { id, name: userName, email: userEmail, token, refreshToken, createdAt, profileImageUrl } = response.data;

        // Create user object
        const userData = {
          id,
          name: userName,
          email: userEmail,
          createdAt,
          profileImageUrl,
        };

        // Store user data and tokens
        localStorage.setItem('vedic_ai_user', JSON.stringify(userData));
        localStorage.setItem('vedic_ai_token', token);
        localStorage.setItem('vedic_ai_refresh_token', refreshToken);

        setUser(userData);
        return { success: true, user: userData };
      }

      return { success: false, error: 'Signup failed' };
    } catch (error) {
      console.error('Signup error:', error);
      return { 
        success: false, 
        error: error.message || 'An error occurred during signup' 
      };
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // Call the API to revoke refresh token
      await apiService.logout();
    } catch (error) {
      console.error('Logout API error:', error);
      // Continue with local logout even if API call fails
    } finally {
      // Clear local storage
      localStorage.removeItem('vedic_ai_user');
      localStorage.removeItem('vedic_ai_token');
      localStorage.removeItem('vedic_ai_refresh_token');
      setUser(null);
    }
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isAuthenticated,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

