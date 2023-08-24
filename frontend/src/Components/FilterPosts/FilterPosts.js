import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from '../../axios'
import {BASE_URL, API_KEY, IMAGE_URL} from '../../Constants/constants'
import './FilterPosts.css'



function FilterPosts(props) {

    // const location = useLocation()
    // const searchData = new URLSearchParams(location.search).get('data')

    const navigate = useNavigate();

    const [searchParams] = useSearchParams()
    const [data,setData] = useState([])
    let searchData
    let langData
    if(searchParams.get('search')){
      searchData = searchParams.get('search')
    }else if(searchParams.get('lang')){
      langData = searchParams.get('lang')
    }

    //For searchData
    useEffect(() => {
      if(searchData)
        searchDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchData])
    
    //For langData
    useEffect(() => {
      if(langData)
      langDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [langData])
    

    //Accessing Search Data
    const searchDetails = ()=>{
        axios.get(`${BASE_URL}/search/movie?query=${searchData}&api_key=${API_KEY}`).then(response=>{
            setData(response.data.results)
    })} 
    
    //Accesing language data
    const langDetails = ()=>{
      axios.get(`${BASE_URL}/discover/movie?language=${langData}&api_key=${API_KEY}`).then(response=>{
        setData(response.data.results)
      })
    }

     /*Row Post Click Handler */
  const postClickHandler =(id)=>{
    if(props.user.user)
    navigate(`/movie/${id}`)
    else{
      localStorage.setItem('continueUrl',`/movie/${id}`)
      let result = window.confirm("You Need To SignIn");
      if(result === true) 
      navigate('/auth/register')
    }
  }

  return (
    <div>
        <div className="filter-posters">
            {data.map((obj)=>
                 obj.backdrop_path &&
                <div key={obj.id} className="filter-image-wrapper" onClick={()=>postClickHandler(obj.id)}>
                    <img className='filter-poster' src={IMAGE_URL+obj.backdrop_path} alt='Poster'/>
                    {console.log(obj)}
                       <h3 className='poster-title'>{obj.title}</h3>
                </div> 
                )}      
        </div>
    </div>
  )
}

export default FilterPosts