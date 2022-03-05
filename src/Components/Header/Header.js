import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  return(
    <nav> 
      <h1>Ghibli My Movies</h1>
      <div className='btn-container'>
        <Link to='/'>
          <button className='home-btn'>Home</button>
        </Link> 
        <Link to='/myFavorites'>
          <button className='my-favorites-btn'>My Favorites</button>
        </Link>
      </div>  
    </nav>
  )
}

export default Header;