import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from '../../axios'
import { API_KEY, IMAGE_URL} from '../../Constants/constants'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
      axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then(response=>{
        let results = response.data.results
        let value = Math.floor(Math.random() * results.length)
        setMovie(response.data.results[value])
      })
    
    }, [])
    

  return (
    <div
    style={{backgroundImage: `url(${movie ? IMAGE_URL+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className="content">
            <div className="title">
                <h1>{movie? movie.original_title:''}</h1>
            </div>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>List</button>
            </div>
            <div className="description">
                <h3>{movie? movie.overview:''}</h3>
            </div>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner