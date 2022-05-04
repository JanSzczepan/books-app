import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
   const [books, setBooks] = useState([
      {title: 'Wiedźmin', author: "Andrzej Sapkowski", id: 0},
      {title: 'Gra o tron', author: "Ryszard Dzikowski", id: 1},
   ]);
   const [readBooks, setReadBooks] = useState([]);

   const addBook = (title, author, id) => {
      setBooks([...books, {title, author, id}])
   }

   const removeBook = (id) => {
      const booksFiltered = books.filter(book => book.id !== id)
      setBooks(booksFiltered)
   }

   const readBook = (book) => {
      setReadBooks([...readBooks, book])
   }

   const removeReadBook = (id) => {
      const booksFiltered = readBooks.filter(book => book.id !== id)
      setReadBooks(booksFiltered)
   }

   return ( 
      <BookContext.Provider value={{books, readBooks, addBook, removeBook, readBook, removeReadBook}}>
         {props.children}
      </BookContext.Provider>
   );
}
 
export default BookContextProvider;