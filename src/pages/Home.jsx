import React from 'react';

import Header from '../components/Header';
import BookList from '../components/BookList';
import AddBtn from '../components/AddBtn';

import './Home.scss';

const Home = () => {
   return ( 
      <>
         <Header />
         <BookList />
         <AddBtn />
      </>
   );
}
 
export default Home;