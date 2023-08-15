export const Book = ({ book, borrowBook, returnBook }) => {
  console.log(book.id);
  console.log(book.available);
  return (
    <>
      <h4>Title: {book.title}</h4>
      <p>Author: {book.author}</p>
      {book.available ? (
        <button type="button" onClick={() => borrowBook(book.key)}>
          borrow
        </button>
      ) : (
        <button type="button" onClick={() => returnBook(book.key)}>
          return
        </button>
      )}
    </>
  );
};
