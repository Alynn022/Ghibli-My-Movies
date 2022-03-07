import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


const Header = () => {
  return(
    <nav> 
      <h1>Ghibli My Movies</h1>
      <div className='btn-container'>
        <Link to='/'>
          <button className="home-btn">
            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>HOME</span>
          </button>
        </Link> 
        <Link to='/myFavorites'>
          <button className="my-favorites-btn">
            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>FAVORITES</span>
          </button>
        </Link>
      </div>  
    </nav>
  )
}

export default Header;