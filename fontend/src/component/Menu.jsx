import React from 'react'
import { useSelector } from 'react-redux'
import { Single } from '../redux/selector'
import { Link } from 'react-router-dom'

const Menu = () => {
  const posts = useSelector(Single)
  return (
    <div className='menu'>
      <h1>Other post you my like</h1>
      {posts.map(post => (
        <div className='post' key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
