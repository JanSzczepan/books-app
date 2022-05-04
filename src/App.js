import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import BookContextProvider from './contexts/BookContext';
import Home from './pages/Home';
import Form from './pages/Form';
import './App.scss';
import './custom.scss';

const App = () => {
  return (
    <main className="App">
      <BookContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add-book' element={<Form />} />
          </Routes>
        </BrowserRouter>
      </BookContextProvider>
    </main>
  );
}

export default App;
