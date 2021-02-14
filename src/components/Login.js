import React, { useState } from 'react'

import {Link, useHistory} from 'react-router-dom'

import {auth} from '../Firebase'


function Login() {

  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // LOGIN
  const login =(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
          // loged in
          history.push('/')
        })
        .catch((e)=>alert(e.message))

  }

  // REGISTER 
  const register=(e)=>{
    e.preventDefault()
 // CREATE USER & LOGIN
    auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
         
          history.push('/')
        })
        .catch((e)=>alert(e.message))

  }

  return (
    <div className='login'>
       {/* LOGO */}
       <div className="logo">
       <Link to="/" >
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt=""/>
       </Link> 
       </div>

       {/* FORM */}
      <div className='container'>
      <h2>Sign In</h2>
      <form>

        <h5>Email</h5>
        <input value={email} onChange={event=>setEmail(event.target.value)} type='email'/>

        <h5>Password</h5>
        <input value={password} onChange={event=>setPassword(event.target.value)} type='passwprd'/>

          <br/><br/>
        <button type='submit' onClick={login}>Sign In</button>

        <p>By continuing, you agree to Amazon's <a href='#!'>Conditions of Use</a> and <a href='#!'>Privacy Notice</a>.</p>
      </form>

     <br/>
        <p>New to Amazon ?</p>
        <hr/>
        <button type='submit' onClick={register}>Create an Account</button>
      </div>


    </div>
  )
}

export default Login
