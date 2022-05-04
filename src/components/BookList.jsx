import React, { useContext } from 'react';

import { BookContext } from '../contexts/BookContext';
import BookItem from './BookItem';
import './BookList.scss';

const BookList = () => {
   const { books } = useContext(BookContext)

   return ( 
      <section className='bookList'>
         <div className='bookList-wrapper mx-auto'>
            <p className='bookList__title'>All your Books:</p>
            { books.length ?
               <ul className='bookList__list p-0'>
                  { books.map(book => (
                     <BookItem  
                        title={book.title} 
                        author={book.author}
                        id={book.id} 
                        key={book.id}
                     />
                  )) } 
               </ul> :
               <p className='bookList__nobooks-text'>
                  Yeah, no books to read. 
                  <br />
                  Free time it is!
               </p>
            }
         </div>
      </section>
   );
}
 
export default BookList;