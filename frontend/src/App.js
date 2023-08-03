import React from 'react';
import './App.css';
import Signup from './Pages/Signup/Signup';
import HomePage from './Pages/Home/HomePage';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'




function App() {
  return (
    <div >
      <Router>
        <Routes>
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
