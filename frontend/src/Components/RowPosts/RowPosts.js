import React, { useEffect, useState } from 'react'
import './RowPosts.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import { API_KEY, IMAGE_URL } from '../../Constants/constants'


function RowPosts(props) {
  const [movie, setMovie] = useState([])
  const [videoUrl,setVideoUrl] = useState()
  const [close,setClose] = useState(false)
  const [mouseEnterData,setMouseEnterData] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovie(response.data.results)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //video settings
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  // for fetching the movie id and generate data
  let clickHandle = (movieId)=>{
    axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length !== 0)setVideoUrl(response.data.results)
      else(alert('Video file not found'))
      console.log(response.data.results)
    }).catch(()=>{
      alert("Not Found")
      console.error()
    })
  }

  //trailer sorting
  let tSorting =()=>{
    let data
    data =  videoUrl.find((value)=>
      value.name === "Official Trailer" 
    )
    if(data)return data.key
    else
    return null
  }


  //hover Details
  function mouseEnter(id){
    let data = movie.find((value)=>
      value.id === id
    )
    setMouseEnterData(data)
  }

  let star = mouseEnterData? '⭐' : ''


  return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          { movie.map((obj)=>
          <div className="image-wrapper">
            <img onMouseEnter={()=>mouseEnter(obj.id)} 
            onMouseLeave={()=>setMouseEnterData()} 
            className={props.isSmall? 'smallPoster': 'poster'} 
            src={`${IMAGE_URL+obj.backdrop_path}`} alt='poster' />

            <div className='poster-details'> 
             <h3 className='poster-title'>{(mouseEnterData && mouseEnterData.original_name)|| (mouseEnterData && props.isSmall && mouseEnterData.title)}{console.log(mouseEnterData)}</h3>
             <h4 className='avg-vote'>{mouseEnterData ? mouseEnterData.vote_average: ''}{star}</h4>
             <button onClick={()=>{clickHandle(obj.id);setClose(false)}} className='trailer-btn'>Trailer</button>
            </div>
          </div>
          )}
        </div>
        {close === false && videoUrl && <div className='trailer'> 
          <i onClick={()=>setClose(true)} style={{display: 'flex',justifyContent: 'end',cursor: 'pointer'}} className='fas fa-times'></i>
          <Youtube videoId={tSorting()} opts={opts} ></Youtube>
        </div> }
    </div>
  )
}

export default RowPosts