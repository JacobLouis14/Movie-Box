import React,{useContext} from 'react'
import Movie from '../../Components/Movie/Movie'
import NavBar from '../../Components/NavBar/NavBar'
import { AppContext } from '../../AppContext'

function MovieDetails() {
  const {user,setUser} = useContext(AppContext)
  return (
    <div>
        <NavBar user={{user,setUser}}/>
        <Movie/>
    </div>
  )
}

export default MovieDetails