import React, { useEffect, useState } from 'react'
import './RowPosts.css'
import axios from '../../axios'
import { IMAGE_URL } from '../../Constants/constants'


function RowPosts(props) {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovie(response.data.results)
    })
  }, [])
  
  return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {movie? movie.map((obj)=>
            <img className={props.isSmall? 'smallPoster': 'poster'} src={`${IMAGE_URL+obj.backdrop_path}`} alt="Posters" />
          ):''}
        </div>
    </div>
  )
}

export default RowPosts