import React, { useContext, useState, useEffect } from 'react';

import { BookContext } from '../contexts/BookContext';
import Progress from './Progress';
import './Header.scss';

const Header = () => {

   const { books, readBooks } = useContext(BookContext);
   const [ progress, setProgress ] = useState(0);
   const [ date, setDate ] = useState('September 5, 2022');

   useEffect(() => {
      let progressPercent = Number((Number(readBooks.length) / Number(books.length) * 100).toFixed(0));
      
      if(!Boolean(progressPercent)) 
         progressPercent = 0
      
      setProgress(progressPercent);
   }, [books, readBooks]);

   useEffect(() => {
      actualDate()
      setInterval(() => {actualDate()}, 30000) 
   }, []);

   const actualDate = () => {
      const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

      const d = new Date();
      setDate(`${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`)
   }

   return ( 
      <header className='header d-flex flex-column flex-sm-row'>
         <div className='header__shadow'></div>
         <div className='header__title-box col-12 col-sm-7 d-flex justify-content-end'>
            <div className="header__title-wrapper d-flex flex-wrap h-100">
               <h1 className='header__title col-12 align-self-end'>Your Books</h1>
               <h5 className='header__date col-12 align-self-end'>
                  {date}
               </h5>
            </div>
         </div>
         <div className='header__info-box col-12 col-sm-5 justify-content-start'>
            <div className="header__info-shadow"></div>
            <div className="header__info-wrapper d-flex flex-wrap h-100">
               <div className="header-info col-12 align-self-end d-flex justify-content-center gap-5 mb-4 mb-sm-0">
                  <h4 className='header__info-books '>
                     <strong className='header__info-books-strong'>
                        {books.length}
                     </strong>
                     <br />
                     Books
                  </h4>
                  <h4 className='header__info-books '>
                     <strong className='header__info-books-strong'>
                        {readBooks.length}
                     </strong>
                     <br />
                     Read
                  </h4>
               </div>
               <div className='header__progress-box col-12 align-self-end d-flex justify-content-center align-items-center'>
                  <Progress progress={progress}/>
                  <p className='header__progress-text m-0'>
                     {progress}% read
                  </p>
               </div>
            </div>
         </div>
      </header>
   );
}
 
export default Header;