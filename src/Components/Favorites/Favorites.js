import React from 'react';
import './Favorites.scss';
import FavoriteCard from '../Cards/FavoriteCard';

const Favorites = ({ favFilms }) => {
    const displayFavorites = favFilms.map(film => {
      return (
        <FavoriteCard 
          id={film.id}
          key={film.id}
          title={film.title}
          releaseDate={film.release_date}
          originalTitle={film.orginal_title}
          image={film.image} 
        /> 
      )
    })
    return(
      <section className='favorites-view'>
      <h1> Your Ghiblis </h1>
        { displayFavorites }
      </section>  
    )
  }

export default Favorites;