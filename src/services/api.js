/**
 * API Configuration
 * Base URL for the Vedic API
 */
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://vedicapi.azurewebsites.net/api';

/**
 * Generic API error handler
 */
class ApiError extends Error {
  constructor(message, status, errors = []) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errors = errors;
  }
}

/**
 * Get auth token from localStorage
 */
function getAuthToken() {
  return localStorage.getItem('vedic_ai_token');
}

/**
 * Generic fetch wrapper with error handling
 */
async function apiFetch(url, options = {}) {
  try {
    const token = getAuthToken();
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Add Authorization header if token exists
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.message || 'An error occurred',
        response.status,
        data.errors || []
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Network error occurred', 0, [error.message]);
  }
}

/**
 * API Service
 * Centralized service for all API calls
 */
const apiService = {
  /**
   * Get all books
   */
  getAllBooks: async () => {
    const response = await apiFetch(`${API_BASE_URL}/books`);
    return response.data;
  },

  /**
   * Get active books only
   */
  getActiveBooks: async () => {
    const response = await apiFetch(`${API_BASE_URL}/books/active`);
    return response.data;
  },

  /**
   * Get book by ID
   */
  getBookById: async (id) => {
    const response = await apiFetch(`${API_BASE_URL}/books/${id}`);
    return response.data;
  },

  /**
   * Get books by category
   */
  getBooksByCategory: async (category) => {
    const response = await apiFetch(`${API_BASE_URL}/books/category/${encodeURIComponent(category)}`);
    return response.data;
  },

  /**
   * Search books
   */
  searchBooks: async (searchTerm) => {
    const response = await apiFetch(`${API_BASE_URL}/books/search?searchTerm=${encodeURIComponent(searchTerm)}`);
    return response.data;
  },

  /**
   * Create a new book
   */
  createBook: async (bookData) => {
    const response = await apiFetch(`${API_BASE_URL}/books`, {
      method: 'POST',
      body: JSON.stringify(bookData),
    });
    return response.data;
  },

  /**
   * Update an existing book
   */
  updateBook: async (id, bookData) => {
    const response = await apiFetch(`${API_BASE_URL}/books/${id}`, {
      method: 'PUT',
      body: JSON.stringify(bookData),
    });
    return response.data;
  },

  /**
   * Delete a book
   */
  deleteBook: async (id) => {
    const response = await apiFetch(`${API_BASE_URL}/books/${id}`, {
      method: 'DELETE',
    });
    return response.data;
  },

  // ==================== Chapter API Methods ====================

  /**
   * Get book with all chapters (summaries only)
   */
  getBookWithChapters: async (bookId) => {
    const response = await apiFetch(`${API_BASE_URL}/books/${bookId}/chapters`);
    return response.data;
  },

  /**
   * Get specific chapter by chapter number
   */
  getChapter: async (bookId, chapterNumber) => {
    const response = await apiFetch(`${API_BASE_URL}/books/${bookId}/chapters/${chapterNumber}`);
    return response.data;
  },

  /**
   * Get next chapter
   */
  getNextChapter: async (bookId, chapterNumber) => {
    const response = await apiFetch(`${API_BASE_URL}/books/${bookId}/chapters/${chapterNumber}/next`);
    return response.data;
  },

  /**
   * Get previous chapter
   */
  getPreviousChapter: async (bookId, chapterNumber) => {
    const response = await apiFetch(`${API_BASE_URL}/books/${bookId}/chapters/${chapterNumber}/previous`);
    return response.data;
  },

  /**
   * Create a new chapter for a book
   */
  createChapter: async (bookId, chapterData) => {
    const response = await apiFetch(`${API_BASE_URL}/chapters/books/${bookId}`, {
      method: 'POST',
      body: JSON.stringify(chapterData),
    });
    return response.data;
  },

  /**
   * Update an existing chapter
   */
  updateChapter: async (chapterId, chapterData) => {
    const response = await apiFetch(`${API_BASE_URL}/chapters/${chapterId}`, {
      method: 'PUT',
      body: JSON.stringify(chapterData),
    });
    return response.data;
  },

  /**
   * Delete a chapter
   */
  deleteChapter: async (chapterId) => {
    const response = await apiFetch(`${API_BASE_URL}/chapters/${chapterId}`, {
      method: 'DELETE',
    });
    return response.data;
  },

  /**
   * Get chapter by ID
   */
  getChapterById: async (chapterId) => {
    const response = await apiFetch(`${API_BASE_URL}/chapters/${chapterId}`);
    return response.data;
  },

  // ==================== Authentication API Methods ====================

  /**
   * User signup/registration
   */
  signup: async (name, email, password) => {
    const response = await apiFetch(`${API_BASE_URL}/Auth/signup`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    return response;
  },

  /**
   * User login
   */
  login: async (email, password) => {
    const response = await apiFetch(`${API_BASE_URL}/Auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    return response;
  },

  /**
   * Refresh access token
   */
  refreshToken: async (accessToken, refreshToken) => {
    const response = await apiFetch(`${API_BASE_URL}/Auth/refresh-token`, {
      method: 'POST',
      body: JSON.stringify({ accessToken, refreshToken }),
    });
    return response;
  },

  /**
   * Logout user (revoke refresh token)
   */
  logout: async () => {
    const response = await apiFetch(`${API_BASE_URL}/Auth/logout`, {
      method: 'POST',
    });
    return response;
  },

  /**
   * Get user profile
   */
  getUserProfile: async () => {
    const response = await apiFetch(`${API_BASE_URL}/Auth/profile`);
    return response.data;
  },

  /**
   * Check if email is available
   */
  checkEmailAvailability: async (email) => {
    const response = await apiFetch(`${API_BASE_URL}/Auth/check-email?email=${encodeURIComponent(email)}`);
    return response.data;
  },

  // ==========================================
  // RESEARCH PAPERS API
  // ==========================================

  /**
   * Get all research papers
   */
  getAllResearchPapers: async () => {
    const response = await apiFetch(`${API_BASE_URL}/ResearchPapers`);
    return response.data;
  },

  /**
   * Get featured research papers
   */
  getFeaturedResearchPapers: async (count = 3) => {
    const response = await apiFetch(`${API_BASE_URL}/ResearchPapers/featured?count=${count}`);
    return response.data;
  },

  /**
   * Get research paper by ID
   */
  getResearchPaperById: async (id) => {
    const response = await apiFetch(`${API_BASE_URL}/ResearchPapers/${id}`);
    return response.data;
  },

  /**
   * Get research papers by category
   */
  getResearchPapersByCategory: async (category) => {
    const response = await apiFetch(`${API_BASE_URL}/ResearchPapers/category/${encodeURIComponent(category)}`);
    return response.data;
  },

  /**
   * Get research papers by year
   */
  getResearchPapersByYear: async (year) => {
    const response = await apiFetch(`${API_BASE_URL}/ResearchPapers/year/${year}`);
    return response.data;
  },

  /**
   * Get research papers by institution
   */
  getResearchPapersByInstitution: async (institution) => {
    const response = await apiFetch(`${API_BASE_URL}/ResearchPapers/institution/${encodeURIComponent(institution)}`);
    return response.data;
  },

  /**
   * Search research papers
   */
  searchResearchPapers: async (searchTerm) => {
    const response = await apiFetch(`${API_BASE_URL}/ResearchPapers/search?searchTerm=${encodeURIComponent(searchTerm)}`);
    return response.data;
  },

  /**
   * Increment research paper download count
   */
  incrementResearchPaperDownload: async (id) => {
    const response = await apiFetch(`${API_BASE_URL}/ResearchPapers/${id}/download`, {
      method: 'POST',
    });
    return response.data;
  },

  // ==========================================
  // THESIS API
  // ==========================================

  /**
   * Get all thesis
   */
  getAllThesis: async () => {
    const response = await apiFetch(`${API_BASE_URL}/Thesis`);
    return response.data;
  },

  /**
   * Get featured thesis
   */
  getFeaturedThesis: async (count = 3) => {
    const response = await apiFetch(`${API_BASE_URL}/Thesis/featured?count=${count}`);
    return response.data;
  },

  /**
   * Get thesis by ID
   */
  getThesisById: async (id) => {
    const response = await apiFetch(`${API_BASE_URL}/Thesis/${id}`);
    return response.data;
  },

  /**
   * Get thesis by category
   */
  getThesisByCategory: async (category) => {
    const response = await apiFetch(`${API_BASE_URL}/Thesis/category/${encodeURIComponent(category)}`);
    return response.data;
  },

  /**
   * Get thesis by year
   */
  getThesisByYear: async (year) => {
    const response = await apiFetch(`${API_BASE_URL}/Thesis/year/${year}`);
    return response.data;
  },

  /**
   * Get thesis by institution
   */
  getThesisByInstitution: async (institution) => {
    const response = await apiFetch(`${API_BASE_URL}/Thesis/institution/${encodeURIComponent(institution)}`);
    return response.data;
  },

  /**
   * Search thesis
   */
  searchThesis: async (searchTerm) => {
    const response = await apiFetch(`${API_BASE_URL}/Thesis/search?searchTerm=${encodeURIComponent(searchTerm)}`);
    return response.data;
  },

  /**
   * Increment thesis download count
   */
  incrementThesisDownload: async (id) => {
    const response = await apiFetch(`${API_BASE_URL}/Thesis/${id}/download`, {
      method: 'POST',
    });
    return response.data;
  },
};

export default apiService;
export { ApiError };

