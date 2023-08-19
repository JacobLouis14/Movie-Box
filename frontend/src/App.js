import React from 'react';
import './App.css';
import Auth from './Pages/Auth/Auth';
import HomePage from './Pages/Home/HomePage';
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import FilterSearch from './Pages/FilterSearch/FilterSearch';





function App() {
  return (
    <div >
      <Router>
        <Routes>
          
            <Route path='/' element={<HomePage/>} ></Route>
            <Route path='/auth/register' element={<Auth/>}></Route>
            <Route path='/search' element={<FilterSearch/>}></Route>      
      </Routes>
      </Router>
    </div>
  );
}

export default App;
