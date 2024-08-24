# Bookshelf App

This is a simple Bookshelf application built with React (frontend) and Django (backend). It allows users to add, view, and delete books from their virtual bookshelf.

## Features

- View list of books
- Add new books
- Delete existing books
- Error handling for failed API requests

## Project Structure

```
bookshelf-project/
├── frontend/           # React frontend
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/            # Django backend
│   ├── bookshelf/
│   ├── books/
│   ├── manage.py
│   └── requirements.txt
└── README.md
```

## Setup

### Backend (Django)

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

4. Run migrations:
   ```
   python manage.py migrate
   ```

5. Start the Django development server:
   ```
   python manage.py runserver
   ```

### Frontend (React)

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the required packages:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

## Usage

Once both servers are running, open your browser and navigate to `http://localhost:3000` to use the Bookshelf app. You can add new books, view the list of books, and delete books from your collection.

## API Endpoints

- GET /api/books/ - Retrieve all books
- POST /api/books/ - Add a new book
- DELETE /api/books/:id/ - Delete a book by ID