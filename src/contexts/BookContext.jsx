import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
   const [books, setBooks] = useState(() => {
      const localData = localStorage.getItem('books');
      return localData ? JSON.parse(localData) : [];
   });
   const [readBooks, setReadBooks] = useState(() => {
      const localData = localStorage.getItem('readBooks');
      return localData ? JSON.parse(localData) : [];
   });

   useEffect(() => {
      localStorage.setItem('books', JSON.stringify(books))  
   }, [books]);
   useEffect(() => {
      localStorage.setItem('readBooks', JSON.stringify(readBooks))  
   }, [readBooks]);

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