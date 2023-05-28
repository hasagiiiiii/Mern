import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const inintialForm = {
    username: '',
    email: '',
    password: ''
  }

  const [formValue, setFormValue] = useState(inintialForm)
  const [err, setError] = useState(null)
  const navigate = useNavigate()


  const handleChangeForm = e => {
    setFormValue(
      pre => ({
        ...pre,
        [e.target.name]: e.target.value
      })
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", formValue)
      navigate("/login")
      console.log(res)
    } catch (error) {
      setError(error.response.data)
    }
  }
  return (
    <div>
      <div className='Login'>
        <h1>Register</h1>
        <form action="">
          <input type="text" required placeholder="UserName" name="username" onChange={handleChangeForm} id="" />
          <input type="text" required placeholder='email' name='email' onChange={handleChangeForm} />
          <input type="password" required placeolder="Password" name="password" id="" onChange={handleChangeForm} />
          <button onClick={handleSubmit}>Register</button>
          {err && <p>{err}</p>}
          <span>Don't you have an accout <Link to='/Login'> Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Register
