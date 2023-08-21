import React, { useState, useContext, } from 'react'
import './AuthSignup.css'
import axios from 'axios'
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';

function AuthSignup() {

  /*Logged user Data */
  // eslint-disable-next-line no-unused-vars
  const {user,setUser} = useContext(AppContext)

  /*For Signup */
  const [userName,setUserName] = useState('');
  const [userEmail,setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [notValidName,setNotValidName] = useState('');
  const [notValidEmail,setNotValidEmail] = useState('');
  const [notValidPassword,setNotValidPassword] = useState('');
  /*For Login */ 
  const [loginEmail,setLoginEmail] = useState('');
  const [loginPassword,setLoginPassword] = useState('');
  const [loginEmailCheck,setLoginEmailCheck] = useState('');
  const [loginPasswordCheck,setLoginPasswordCheck] = useState('');
  /*Others */
  const [formType,setFormType] = useState('signup');
  const navigate = useNavigate();

  /* Signup SubmitHandler */
  let signupSubmitHandle = (e)=>{
    e.preventDefault();
    const userSignupDetails = {
      Name: userName,
      email: userEmail,
      password: userPassword
    }
    axios.post('http://localhost:3001/auth/register',userSignupDetails)
    .then(response=>{console.log(response);
      alert('Create Succesfully');
      setFormType('login');
      setUserName('');
      setUserEmail('');
      setUserPassword('');
      setLoginEmail('');
      setLoginPassword('');
    })
    .catch(err=>console.log(err))
  }

  /*Login SubmitHandler */
  let loginSubmitHandle = (e)=>{
    e.preventDefault();
    let userLoginDetails ={
      email: loginEmail,
      password: loginPassword
    }
    axios.post('http://localhost:3001/auth/login', userLoginDetails)
    .then(response=>{
        setUser(response.data);
        localStorage.setItem("token",response.data.token);
        setLoginEmail('');
        setLoginPassword('');
        navigate('/');})
        .catch(error=>{console.log(error)})
  }

  

  /* Signup validation */
  let SignupValidation =(e)=>{
    if(!userName) {setNotValidName('Enter valid data ❗'); return}
    if(!userEmail){setNotValidEmail('Enter valid data ❗'); return}
    let emailChecker = userEmail.includes('@gmail.com')
    if(!emailChecker) {alert('Enter valid email')}
    if(!userPassword) {setNotValidPassword('Enter valid data ❗'); return}
    signupSubmitHandle(e)
    
  }

  /*Login Validation */
  let loginValidation = (e)=>{
    if(!loginEmail){setLoginEmailCheck('Enter valid data ❗'); return}
    let emailChecker = loginEmail.includes('@gmail.com')
    if(!emailChecker) {alert('Enter valid email')}
    if(!loginPassword) {setLoginPasswordCheck('Enter valid data ❗'); return}
    loginSubmitHandle(e)
  }

  return (
    <div className='back'>
        <div className="shell">
            <div className='container'>
                <div className="title">
                  <div className='signup-title'
                  style={formType==='signup'?{borderBottom: '2px solid red'}:{}}
                  onClick={()=>setFormType('signup')}
                  >
                    <h4>SignUp</h4>
                  </div>
                  <div className='login-title' 
                  style={formType==='login'?{borderBottom: '2px solid red'}:{}}
                  onClick={()=>setFormType('login')}
                  >
                    <h4>Login</h4>
                  </div>
                </div>
                <form className='form' //for Signup
                  style={formType === 'signup'? {}:{display: 'none'}}
                  >
                    <div className="div">
                    <input
                        className='in-div'
                        type='text'
                        name='Name'
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
                        name='password'
                        placeholder={notValidPassword? notValidPassword:'Password'}
                        value={userPassword}
                        onChange={(e)=>{setUserPassword(e.target.value);setNotValidPassword('')}}
                        required
                    />
                    </div>    
                    <button className='submit-btn' onClick={(e)=>SignupValidation(e)}>SignUp</button>
                </form>
                <form className='form' //for login
                  style={formType === 'login'? {}:{display: 'none'}}>
                    <div className="div"> 
                    <input
                        className='in-div'
                        type='text'
                        name='loginemail'
                        placeholder={loginEmailCheck? loginEmailCheck:'Email'}
                        value={loginEmail}
                        onChange={(e)=>{setLoginEmail(e.target.value)}}
                        required
                    />
                    </div>
                    <div className="div"> 
                    <input
                        className='in-div'
                        type='password'
                        name='loginpassword'
                        placeholder={loginPasswordCheck? loginPasswordCheck:'password'}
                        value={loginPassword}
                        onChange={(e)=>{setLoginPassword(e.target.value)}}
                        required
                    />
                    </div>    
                <button className='submit-btn' onClick={(e)=>loginValidation(e)}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AuthSignup