import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Banner from '../../Components/Banner/Banner'
import RowPosts from '../../Components/RowPosts/RowPosts';
import { action, comedy, documentries, horror, originals, romantic } from '../../urls'

function HomePage() {
  return (
    <div>
    <NavBar/>
    <Banner/>
    <RowPosts url={originals} title="Netflix Originals"/>
    <RowPosts url={action} title="Action" isSmall />
    <RowPosts url={comedy} title="Comedy" isSmall />
    <RowPosts url={horror} title="Horror" isSmall />
    <RowPosts url={romantic} title="Romantic" isSmall />
    <RowPosts url={documentries} title="Documentries" isSmall />
    </div>
  )
}

export default HomePage




