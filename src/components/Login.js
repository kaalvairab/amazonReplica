import React from 'react'

import {Link} from 'react-router-dom'

function Login() {
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
        <input type='email'/>

        <h5>Password</h5>
        <input type='passwprd'/>

          <br/><br/>
        <button type='submit'>Sign In</button>

        <p>By continuing, you agree to Amazon's <a href='#!'>Conditions of Use</a> and <a href='#!'>Privacy Notice</a>.</p>
      </form>

     <br/>
        <p>New to Amazon ?</p>
        <hr/>
        <button>Create an Account</button>
      </div>


    </div>
  )
}

export default Login
