import React, { useContext } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import FilterPosts from '../../Components/FilterPosts/FilterPosts'
import { AppContext } from '../../AppContext'

function FilterSearch() {

  const {user,setUser} = useContext(AppContext)

  return (
    <div>
        <NavBar user={{user, setUser}}/>
        <FilterPosts user={{user, setUser}}/>
    </div>
  )
}

export default FilterSearch