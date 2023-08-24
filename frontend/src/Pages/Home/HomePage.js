import React,{useContext} from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Banner from '../../Components/Banner/Banner'
import RowPosts from '../../Components/RowPosts/RowPosts';
import { action, comedy, documentries, horror, originals, romantic } from '../../urls'
import { AppContext } from '../../AppContext';

function HomePage() {

  /*Passing User Value */
  const {user,setUser} = useContext(AppContext)
  return (
    <div>
    <NavBar user={{user, setUser}} />
    <Banner user={{user, setUser}} />
    <RowPosts url={originals} title="Top Rated"/>
    <RowPosts url={action} title="Action" isSmall />
    <RowPosts url={comedy} title="Comedy" isSmall />
    <RowPosts url={horror} title="Horror" isSmall />
    <RowPosts url={romantic} title="Romantic" isSmall />
    <RowPosts url={documentries} title="Documentries" isSmall />
    </div>
  )
}

export default HomePage




