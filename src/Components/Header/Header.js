import React from 'react';
import './Header.scss';


const Header = () => {
  return(
    <nav> 
      <h1> Ghibli My Movies</h1>
      <div className='btn-container'>
        <button className='home-btn'>Home</button>
        <button className='my-favorites-btn'>My Favorites</button>
      </div>  
    </nav>
  )
}

export default Header;