import React from 'react';
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <div className="title">
                <h1>Movie Name</h1>
            </div>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>List</button>
            </div>
            <div className="description">
                <h3>Netflix is an American subscription video on-demand over-the-top streaming service owned and operated by Netflix, Inc.</h3>
            </div>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner