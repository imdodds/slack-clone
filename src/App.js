import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
