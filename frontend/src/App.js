import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // We'll create this file for our styles

const API_URL = 'http://localhost:8000/api';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${API_URL}/books/`);
      setBooks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch books. Please try again later.');
    }
  };

  const addBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/books/`, newBook);
      setNewBook({ title: '', author: '' });
      fetchBooks();
      setError(null);
    } catch (err) {
      setError('Failed to add book. Please try again.');
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/books/${id}/`);
      fetchBooks();
      setError(null);
    } catch (err) {
      setError('Failed to delete book. Please try again.');
    }
  };

  return (
    <div className="app">
      <h1>My Bookshelf</h1>
      
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={addBook} className="add-book-form">
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          required
        />
        <button type="submit">Add Book</button>
      </form>
      
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
            </div>
            <button onClick={() => deleteBook(book.id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;