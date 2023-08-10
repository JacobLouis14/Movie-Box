import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from '../../axios'
import {BASE_URL, API_KEY, IMAGE_URL} from '../../Constants/constants'
import './FilterPosts.css'

function FilterPosts() {

    // const location = useLocation()
    // const searchData = new URLSearchParams(location.search).get('data')

    const [searchParams] = useSearchParams()
    const [data,setData] = useState([])
    let searchData
    let langData
    if(searchParams.get('data')){
      searchData = searchParams.get('data')
    }else if(searchParams.get('lang')){
      langData = searchParams.get('lang')
    }

    //For searchData
    useEffect(() => {
      if(searchData)
        searchDetails()
    }, [searchData])
    
    //For langData
    useEffect(() => {
      if(langData)
      langDetails()
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

  return (
    <div>
        <div className="filter-posters">
            {data.map((obj)=>
                obj.original_language === 'en' && obj.backdrop_path &&
                <div className="filter-image-wrapper">
                    <img className='filter-poster' src={IMAGE_URL+obj.backdrop_path} alt='Poster'/>
                    {console.log(obj)}
                       <h3 className='poster-title'>{obj.original_title}</h3>
                </div> 
                )}      
        </div>
    </div>
  )
}

export default FilterPosts