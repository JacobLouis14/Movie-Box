import React, { useEffect, useState } from 'react';
import './App.css';
import Auth from './Pages/Auth/Auth';
import HomePage from './Pages/Home/HomePage';
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import FilterSearch from './Pages/FilterSearch/FilterSearch';
import {AppContext}from './AppContext'
import axios from 'axios';
import MovieDetails from './Pages/MovieDetails/MovieDetails';





function App() {

  /* Data of LoggedUser */
  const [user,setUser] = useState('');
  const userToken =localStorage.getItem('token')
  useEffect(() => {
    if(userToken){
      axios.post('http://localhost:3001/users/auth',{},{
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }).then(response=>{setUser(response.data)})
      .catch(err=>console.log(err.response))
    }
    }, [userToken])
  

  return (
    <div >
      <AppContext.Provider value={{user:user,setUser}}>
      <Router>
        <Routes>
            <Route path='/' element={<HomePage/>} ></Route>
            <Route path='/auth/register' element={<Auth/>}></Route>
            <Route path='/search' element={<FilterSearch/>}></Route>
            <Route path='/movie/:id' element={<MovieDetails/>}></Route>      
      </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
