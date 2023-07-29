import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPosts from './Components/RowPosts/RowPosts';


function App() {
  return (
    <div >
      <NavBar/>
      <Banner/>
      <RowPosts/>
    </div>
  );
}

export default App;
