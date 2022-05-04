import React from 'react';

import './Header.scss';

const Header = () => {
   return ( 
      <header className='header d-flex flex-column flex-sm-row'>
         <div className='header__shadow'></div>
         <div className='header__title-box col-12 col-sm-7 d-flex justify-content-end'>
            <div className="header__title-wrapper d-flex flex-wrap h-100">
               <h1 className='header__title col-12 align-self-end'>Your Books</h1>
               <h5 className='header__date col-12 align-self-end'>Sep 5, 2022</h5>
            </div>
         </div>
         <div className='header__info-box col-12 col-sm-5 justify-content-start'>
            <div className="header__info-shadow"></div>
            <div className="header__info-wrapper d-flex flex-wrap h-100">
               <div className="header-info col-12 align-self-end d-flex justify-content-center gap-5">
                  <h4 className='header__info-books '>
                     <strong className='header__info-books-strong'>4</strong>
                     <br />
                     Books
                  </h4>
                  <h4 className='header__info-books '>
                     <strong className='header__info-books-strong'>2</strong>
                     <br />
                     Read
                  </h4>
               </div>
               <div className='header__progress-box col-12 align-self-end d-flex justify-content-center align-items-center'>
                  <div className='header__progress-circle me-4'></div>
                  <p className='header__progress-text m-0'>65% read</p>
               </div>
            </div>
         </div>
      </header>
   );
}
 
export default Header;