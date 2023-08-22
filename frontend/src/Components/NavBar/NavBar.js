import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link, useNavigate} from 'react-router-dom'

function NavBar(props) {


  const navigate = useNavigate()
  const [user,setUser] = useState() //Accesing User
  const[search,setSearch] = useState('')
  const[lang,setLang] = useState('')

  /* onKeyDownHandler */
  const keyDownHandler = (e)=>{
   if(e.key === 'Enter'){
    navigate(`/search?search=${search}`)
   }
  }

  /* select Handler */
  const selectHandler = (e)=>{
    setLang(e.target.value)
  }

  /*Log out Handler */
  const logOutHandler =()=>{
    localStorage.removeItem('token');
    props.user.setUser('');
  }

  useEffect(() => {
    if(lang){
      navigate(`/search?lang=${lang}`)
    }
  }, [lang,navigate])
  
  /*intializing user */
  useEffect(() => {
    setUser(props.user.user)
  }, [props])
  

  return (
    <div>
        <div className='navbar'>
            <a href='/'><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Logo" /></a>
            <div className='search'>
              <input className='search-box' 
              placeholder='Search....' 
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              onKeyDown={keyDownHandler}
              type='text'></input></div>
            <div className="lang-menu">
              <select onChange={selectHandler}>
                <option value=''>Select Language</option>
                <option value='en-US'>English</option>
              </select>
            </div>
            {user?
              <div className='avatar-container'>
              <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt=""/> 
              <div className='avatar-dropdown'>
                <div className='avatar-dropdown-content'>
                  <p>{"Hey "+user.Name}</p>
                  <h4 onClick={logOutHandler}>Log Out</h4>
                </div>
              </div>
              </div>
              :<Link className='btn-link' to='/auth/register'><button className='avatar-btn'>Signup</button></Link>}
        </div>
    </div>
  )
}

export default NavBar