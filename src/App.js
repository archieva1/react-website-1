import React from 'react';
import './App.css';
import {BrowserRouter as Router, 
  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Services from './components/pages/Services';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
