import React, { createContext, useState, useEffect, useReducer } from 'react';

import { BookReducer } from '../reducers/BookReducer';
import { ReadBookReducer } from '../reducers/ReadBookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
   const [books, dispatchBooks] = useReducer(BookReducer, [], () => {
      const localData = localStorage.getItem('books');
      return localData ? JSON.parse(localData) : [];
   });
   const [readBooks, dispatchReadBooks] = useReducer(ReadBookReducer, [], () => {
      const localData = localStorage.getItem('readBooks');
      return localData ? JSON.parse(localData) : [];
   });

   useEffect(() => {
      localStorage.setItem('books', JSON.stringify(books))  
   }, [books]);
   useEffect(() => {
      localStorage.setItem('readBooks', JSON.stringify(readBooks))  
   }, [readBooks]);

   return ( 
      <BookContext.Provider value={{books, readBooks, dispatchBooks, dispatchReadBooks}}>
         {props.children}
      </BookContext.Provider>
   );
}
 
export default BookContextProvider;