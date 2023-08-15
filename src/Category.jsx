import { Book } from "./Book";

export const Category = ({ title, books, returnBook, borrowBook }) => {
  return (
    <>
      <h3>
        {title} ({books.length}):
      </h3>
      {books.map(book => (
        <Book
          book={book}
          key={book.id}
          borrowBook={borrowBook}
          returnBook={returnBook}
        />
      ))}
    </>
  );
};
