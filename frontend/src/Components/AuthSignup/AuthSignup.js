import React, { useState } from 'react'
import './AuthSignup.css'

function AuthSignup() {

  const [userName,setUserName] = useState('');
  const [userEmail,setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [notValidName,setNotValidName] = useState('');
  const [notValidEmail,setNotValidEmail] = useState('');
  const [notValidPassword,setNotValidPassword] = useState('');

  let submitHandle =()=>{
    console.log(userName)
  }

  /* validation */
  let validation =()=>{
    if(!userName) {setNotValidName('Enter valid data ❗'); return}
    if(!userEmail) {setNotValidEmail('Enter valid data ❗'); return}
    if(!userPassword) {setNotValidPassword('Enter valid data ❗'); return}
    submitHandle()
  }

  return (
    <div className='back'>
        <div className="shell">
            <div className='container'>
                <div className="title">
                <h2>Welcome</h2>
                </div>
                <form className='form'>
                    <div className="div">
                    <input
                        className='in-div'
                        type='text'
                        name='name'
                        placeholder={notValidName? notValidName:'Name'}
                        value={userName}
                        onChange={(e)=>{setUserName(e.target.value);setNotValidName('')}}
                        required
                    />
                    </div>
                    <div className="div"> 
                    <input
                        className='in-div'
                        type='text'
                        name='email'
                        placeholder={notValidEmail? notValidEmail:'Email'}
                        value={userEmail}
                        onChange={(e)=>{setUserEmail(e.target.value);setNotValidEmail('')}}
                        required
                    />
                    </div>
                    <div className="div"> 
                    <input
                        className='in-div'
                        type='password'
                        name='name'
                        placeholder={notValidPassword? notValidPassword:'Password'}
                        value={userPassword}
                        onChange={(e)=>{setUserPassword(e.target.value);setNotValidPassword('')}}
                        required
                    />
                    </div>    
                </form>
                <button className='signup-btn' onClick={()=>validation()}>SignUp</button>
            </div>
        </div>
    </div>
  )
}

export default AuthSignup