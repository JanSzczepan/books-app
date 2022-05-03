import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Form from './pages/Form';
import './App.scss';
import './custom.scss';

const App = () => {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-book' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
