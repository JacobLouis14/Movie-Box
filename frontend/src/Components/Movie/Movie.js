import React, { useEffect, useState } from 'react'
import './Movie.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { IMAGE_URL } from '../../Constants/constants'

function Movie() {

  const [movie,setMovie] = useState()

  /*Accesing Movie Details */
  const {id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/movie/${id}`)
    .then(response=>{setMovie(response.data);console.log(response)})
    .catch(err=>console.log(err))
  }, [id])

  /*converting M to H */
  const formatTime =(minute)=>{
    const hours = Math.floor(minute/60);
    const min = minute%60;
    return `${hours.toString()}h:${min.toString()}m`
  }
  const time = formatTime(movie? movie.runtime : '')

  /*Watch Now link */
  const watchNowHandler = (link)=>{
    window.location.href= `${link}`
  }
  
  return (

      <div style={{backgroundImage: `url(${movie? IMAGE_URL+movie.backdrop_path : ''})`}} 
        className='movie-container'>
        <div className="details-Container">
          <div className="movie-poster">
            <img src={`${movie? IMAGE_URL+movie.poster_path : ''}`} alt='poster'/>
          </div>
          <div className="movie-details">
            <h1>{movie? movie.title : ''}</h1>
            <h5>{movie? movie.vote_average : ''}⭐</h5>
            <h4>Overview</h4>
            <p>{movie? movie.overview : ''}</p>
            {movie? movie.genres.map((obj)=>
               <h4 style={{display: 'inline-block', marginRight: '15px'}}>{obj.name}</h4>
            ): ''}
            <h4 style={{display: 'inline-block', marginRight: '15px'}}>{time}</h4>
            <h4 style={{display: 'inline-block', marginRight: '15px'}}>{(movie? movie.original_language : '').toUpperCase()}</h4>
            <p style={{marginTop: '30px', fontWeight: 'bold'}}>Status: {(movie? movie.status : '').toUpperCase()}</p>
            <p style={{marginTop: '15px',display: 'inline-block'}}>Released Date: {(movie? movie.release_date : '')}</p>
            {movie? movie.homepage && <button className='watch-Now' onClick={()=>watchNowHandler(movie.homepage)}>Watch Now</button>:''}
          </div>
        </div>
      </div>

  )
}

export default Movie