import React from 'react';
import { useNavigate } from 'react-router-dom';

import './FormComp.scss';

const FormComp = () => {
   const navigate = useNavigate();

   const submitForm = (e) => {
      e.preventDefault();
      navigate('/');
   }

   return ( 
      <form className='bookForm__form' onSubmit={submitForm}>
         <input className='bookForm__form-input mb-4' type='text' placeholder='title'/>
         <input className='bookForm__form-input mb-5' type='text' placeholder='author'/>
         <button className='bookForm__form-btn' type='submit'>
            Add Book
         </button>
      </form>
    );
}
 
export default FormComp;