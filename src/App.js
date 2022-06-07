import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Outlet, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Outlet>
        <Route path='/' exact />
        </Outlet>
      </Router>
    </>
  );
}

export default App;
