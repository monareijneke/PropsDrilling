import { collection } from "./collection";
import { useState } from "react";
import { Books } from "./Books";

export const Library = () => {
  const [books, setBooks] = useState(collection.books);
  console.log(books);

  const borrowBook = id => {
    const newBooks = books.map(book => {
      if (book.id === id) {
        book.available = false;
      }
      return book;
    });
    setBooks(newBooks);
  };

  const returnBook = id => {
    const newBooks = books.map(book => {
      if (book.id === id) {
        book.available = true;
      }
      return book;
    });
    setBooks(newBooks);
  };

  return (
    <div className="App">
      <h1>Books Library</h1>
      <Books books={books} borrow={borrowBook} return={returnBook} />
    </div>
  );
};
