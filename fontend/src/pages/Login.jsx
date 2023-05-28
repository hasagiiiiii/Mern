import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
const Login = () => {
  return (
    <div className='Login'>
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="UserName" name="" id="" />
        <input type="password" placeholder="Password" name="" id="" />
        <button>Login</button>
        <p>This is an error</p>
        <span>Don't you have an accout <Link to='/register'> Register</Link></span>
      </form>
    </div>
  )
}

export default Login
