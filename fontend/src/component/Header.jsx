import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="logo">Liver</div>
        <div className="links">
          <Link className='links' to="/?cat=techology">
            <h2>Home  </h2>
          </Link>
          <Link className='links' to="/cat=techology">
            <h2>Product  </h2>
          </Link><Link className='links' to="/cat=techology">
            <h2>Seals </h2>
          </Link><Link className='links' to="/cat=techology">
            <h2> Deals </h2>
          </Link><Link className='links' to="/cat=techology">
            <h2>Phone  </h2>
          </Link>
          <span>Join</span>
          <span>Logout</span>
          <span className='write'>
            <Link className='links' to='/write'>Write</Link>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Header
