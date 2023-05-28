import React from 'react'
import { useSelector } from 'react-redux'
import { state } from '../redux/selector'
import { Link } from 'react-router-dom'
const Home = () => {
  const posts = useSelector(state)
  return (
    <div className="home">
      <div className='posts'>
        {posts.map(post => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt="" />
            </div>
            <div className='content'>
              <Link className='links' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
