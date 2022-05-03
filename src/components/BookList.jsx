import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faXmark, faMarker } from '@fortawesome/free-solid-svg-icons'

import './BookList.scss';

const BookList = () => {
   return ( 
      <section className='bookList'>
         <div className='bookList-wrapper mx-auto'>
            <p className='bookList__title'>All your Books:</p>
            <ul className='bookList__list p-0'>
               <li className='bookList__list-item d-flex align-items-center px-4 py-3'>
                  <FontAwesomeIcon className='bookList__icon-book me-4' icon={faBook} />
                  <div className='bookList__text-box'>
                     <h3 className='bookList__book-title mb-1'>Wiedźmin</h3>
                     <h4 className='bookList__author m-0'>Andrzej Sapkowski</h4>
                  </div>
                  <div className='bookList__icons ms-auto'>
                     <button className='bookList__btn-read p-3' type='button'>
                        <FontAwesomeIcon className='bookList__icon-read' icon={faMarker} />
                     </button>
                     <button className='bookList__btn-x p-3' type='button'>
                        <FontAwesomeIcon className='bookList__icon-x' icon={faXmark} />
                     </button>
                  </div>
               </li>
            </ul>
         </div>
      </section>
   );
}
 
export default BookList;