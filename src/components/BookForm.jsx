import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import FormComp from './FormComp';
import './BookForm.scss';

const BookForm = () => {
   const navigate = useNavigate();

   return ( 
      <section className='bookForm p-5'>
         <div className='bookForm-wrapper mx-auto'>
            <div className='bookForm__header d-flex justify-content-center align-items-center'>
               <button className='bookForm__arrow-btn p-3' onClick={() => navigate('/')}>
                  <FontAwesomeIcon className='bookForm__arrow-icon' icon={faArrowLeft} />
               </button>
               <h3 className='bookForm__title m-0'>Add new book</h3>
            </div>
            <div className='bookForm__icon-book-wrapper mx-auto'>
               <FontAwesomeIcon className='bookForm__book-icon' icon={faBook} />
            </div>
            <FormComp />
         </div>
      </section>
   );
}
 
export default BookForm;