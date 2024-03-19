import React from 'react';

function BooksList({ books, onBookClick }) {
  return (
    <div>
      <h2>Raamatute nimekiri:</h2>
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => onBookClick(book.id)}>
            Pealkiri: {book.title} <br />
            Autor: {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
