import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'


function NavBar() {
  const user = null
  return (
    <div>
        <div className='navbar'>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Logo" />
            {user?<img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" /> :<Link className='btn-link' to='/signup'><button className='avatar-btn'>Signup</button></Link>}
        </div>
    </div>
  )
}

export default NavBar