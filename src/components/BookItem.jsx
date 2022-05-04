import React, { useContext, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faXmark, faMarker } from '@fortawesome/free-solid-svg-icons'

import { BookContext } from '../contexts/BookContext';
import './BookList.scss';

const BookItem = ({title, author, id}) => {

   const { books, readBooks, removeBook, readBook, removeReadBook } = useContext(BookContext);
   const [ read, setRead ] = useState(false);

   useEffect(() => {
      const isBookRead = Boolean(readBooks.filter(book => book.id === id).length)
      setRead(isBookRead)
   }, [books, readBooks]);

   return ( 
      <li className='bookList__list-item d-flex align-items-center px-4 py-3'>
         <FontAwesomeIcon 
            className={`bookList__icon-book ${read ? 'bookList__icon-book--read' : ''} me-4`}
            icon={faBook}
         />
         <div className='bookList__text-box'>
            <h3 className={`bookList__book-title ${read ? 'bookList__book-title--read' : ''} mb-1`}>
               {title}
            </h3>
            <h4 className={`bookList__author ${read ? 'bookList__author--read' : ''} m-0`}>
               {author}
            </h4>
         </div>
         <div className='bookList__icons ms-auto'>
            <button 
               className='bookList__btn-read p-3'
               type='button'
               onClick={() => {
                  setRead(!read);
                  read ? removeReadBook(id) : readBook({title, author, id});
               }}
            >
               <FontAwesomeIcon className='bookList__icon-read' icon={faMarker} />
            </button>
            <button 
               className='bookList__btn-x p-3' 
               type='button'
               onClick={() => {
                  removeBook(id);
                  if(read) removeReadBook(id);
               }}   
            >
               <FontAwesomeIcon className='bookList__icon-x' icon={faXmark} />
            </button>
         </div>
      </li>
   );
}
 
export default BookItem;