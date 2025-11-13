# Books Integration Guide

This guide explains how to use the Books API integration in the Vedic AI React application.

## 📁 Files Added

### Services
- `src/services/api.js` - API service for making HTTP requests to the backend

### Pages
- `src/pages/Books.js` - Main books listing page with search and filter

### Components
- `src/components/BookCard.js` - Card component for displaying book summaries
- `src/components/BookReader.js` - Full-screen book reading component

### Styles
- `src/styles/books.css` - Styles for the books listing page
- `src/styles/bookcard.css` - Styles for book cards
- `src/styles/bookreader.css` - Styles for the book reader

## 🚀 Setup Instructions

### 1. Configure API URL

Create a `.env` file in the root of the React project:

```bash
# In vedic_ai folder
echo REACT_APP_API_URL=https://localhost:7000/api > .env
```

**Important:** Update the port number (7000) to match your actual API port. You can find this in:
- `VedicAPI.API/Properties/launchSettings.json`

### 2. Install Dependencies (if needed)

The project already has the required dependencies. If you need to reinstall:

```bash
npm install
```

### 3. Start the Backend API

```bash
cd VedicAPI.API/VedicAPI.API
dotnet run
```

The API should start at `https://localhost:7xxx`

### 4. Start the React App

```bash
cd vedic_ai
npm start
```

The app will open at `http://localhost:3000`

### 5. Navigate to Books Page

Open your browser and go to:
```
http://localhost:3000/books
```

## 🎯 Features

### Books Listing Page (`/books`)

- **View All Books** - Displays all active books from the database
- **Search** - Search by title, author, description, or category
- **Category Filter** - Filter books by category
- **Responsive Grid** - Beautiful card-based layout

### Book Reader

- **Full Content Display** - Read the complete book content
- **Font Size Control** - Increase/decrease text size
- **Dark Mode** - Toggle between light and dark themes
- **Responsive Design** - Works on all screen sizes

## 📡 API Service Usage

The `apiService` provides the following methods:

```javascript
import apiService from './services/api';

// Get all books
const books = await apiService.getAllBooks();

// Get active books only
const activeBooks = await apiService.getActiveBooks();

// Get book by ID
const book = await apiService.getBookById(1);

// Get books by category
const ayurvedaBooks = await apiService.getBooksByCategory('Ayurveda');

// Search books
const results = await apiService.searchBooks('Sushruta');

// Create a new book
const newBook = await apiService.createBook({
  title: "Book Title",
  author: "Author Name",
  content: "Book content...",
  description: "Description",
  category: "Category",
  language: "Language",
  publicationYear: 2024
});

// Update a book
const updatedBook = await apiService.updateBook(1, {
  title: "Updated Title",
  // ... other fields
});

// Delete a book
await apiService.deleteBook(1);
```

## 🎨 Customization

### Changing API URL

Edit the API URL in your `.env` file:

```env
REACT_APP_API_URL=https://your-api-domain.com/api
```

### Styling

All styles are in separate CSS files and can be easily customized:

- `books.css` - Main page layout, search, filters
- `bookcard.css` - Book card appearance
- `bookreader.css` - Reader interface, themes

### Adding to Navigation

The Books page is already added to the routing. To add it to your navigation menu, update `src/components/Navbar.js`:

```javascript
<Link to="/books">Books</Link>
```

## 🔧 Troubleshooting

### CORS Errors

If you see CORS errors in the browser console:

1. Make sure the API is running
2. Check that the CORS policy in `Program.cs` includes your React app URL:
   ```csharp
   policy.WithOrigins("http://localhost:3000")
   ```

### API Connection Issues

1. Verify the API is running: `https://localhost:7xxx/swagger`
2. Check the API URL in `.env` matches the actual API port
3. Ensure SSL certificate is trusted (or use HTTP for development)

### SSL Certificate Issues

For development, you might need to accept the self-signed certificate:

1. Navigate to `https://localhost:7xxx` in your browser
2. Accept the security warning
3. Refresh your React app

Or configure the API to use HTTP in development:

```csharp
// In Program.cs, comment out:
// app.UseHttpsRedirection();
```

### Database Connection Issues

1. Verify SQL Server is running
2. Check connection string in `appsettings.json`
3. Ensure database is created (run the SQL script)

## 📱 Responsive Design

The Books integration is fully responsive:

- **Desktop** - Multi-column grid layout
- **Tablet** - 2-column grid
- **Mobile** - Single column, optimized touch controls

## 🎭 Component Architecture

```
Books Page
├── Search Bar
├── Category Filters
└── Books Grid
    └── Book Cards (multiple)
        └── Click → Book Reader
            ├── Reader Header (controls)
            ├── Book Info
            ├── Book Content
            └── Reader Footer
```

## 🔐 Future Enhancements

Consider adding:

1. **Authentication** - User login to save reading progress
2. **Bookmarks** - Save favorite books
3. **Reading Progress** - Track how far users have read
4. **Comments** - Allow users to comment on books
5. **Ratings** - Star rating system
6. **PDF Export** - Download books as PDF
7. **Audio** - Text-to-speech integration
8. **Translations** - Multi-language support

## 📝 Example Usage in Other Components

```javascript
import React, { useState, useEffect } from 'react';
import apiService from '../services/api';

function MyComponent() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await apiService.getActiveBooks();
        setBooks(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchBooks();
  }, []);

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
}
```

## 🐛 Error Handling

The API service includes built-in error handling:

```javascript
try {
  const books = await apiService.getAllBooks();
} catch (error) {
  if (error.status === 404) {
    console.log('Not found');
  } else if (error.status === 500) {
    console.log('Server error');
  } else {
    console.log('Network error');
  }
  console.log(error.message);
  console.log(error.errors); // Array of detailed errors
}
```

## 📊 Testing

### Test the API First

1. Open Swagger UI: `https://localhost:7xxx/swagger`
2. Test each endpoint
3. Verify responses

### Test the Frontend

1. Open browser console
2. Navigate to `/books`
3. Check for any errors
4. Test search and filters
5. Click on a book to open reader
6. Test reader controls

## 🎉 Success Checklist

- [ ] API is running and accessible
- [ ] Database is created with sample data
- [ ] React app is running
- [ ] `.env` file is configured
- [ ] Books page loads without errors
- [ ] Books are displayed in grid
- [ ] Search functionality works
- [ ] Category filters work
- [ ] Book reader opens when clicking a book
- [ ] Reader controls work (font size, theme)
- [ ] No CORS errors in console

## 📞 Support

If you encounter any issues:

1. Check browser console for errors
2. Check API logs
3. Verify all setup steps are completed
4. Review the troubleshooting section

Happy reading! 📚

