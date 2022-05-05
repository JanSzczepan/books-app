import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v1 as uuid } from 'uuid';

import { BookContext } from '../contexts/BookContext';
import './FormComp.scss';

const FormComp = () => {

   const navigate = useNavigate();
   const { dispatchBooks } = useContext(BookContext);
   const [ title, setTitle ] = useState('') ;
   const [ author, setAuthor ] = useState('') ;

   const submitForm = (e) => {
      e.preventDefault();

      dispatchBooks({type: 'ADD_BOOK', book: {title, author, id: uuid()}})

      navigate('/');
   }

   return ( 
      <form className='bookForm__form' onSubmit={submitForm}>
         <input 
            className='bookForm__form-input mb-4' 
            type='text' 
            placeholder='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <input 
            className='bookForm__form-input mb-5'
            type='text'
            placeholder='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
         />
         <button className='bookForm__form-btn' type='submit'>
            Add Book
         </button>
      </form>
    );
}
 
export default FormComp;