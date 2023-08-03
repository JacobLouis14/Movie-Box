import React from 'react'
import './AuthSignup.css'

function AuthSignup() {
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
                        placeholder='Name'
                    />
                    </div>
                    <div className="div"> 
                    <input
                        className='in-div'
                        type='text'
                        name='name'
                        placeholder='Email'
                    />
                    </div>
                    <div className="div"> 
                    <input
                        className='in-div'
                        type='password'
                        name='name'
                        placeholder='Password'
                    />
                    </div>    
                </form>
                <button className='signup-btn'>SignUp</button>
            </div>
        </div>
    </div>
  )
}

export default AuthSignup