import React, { useContext } from 'react';
import { MyContext } from '../../Context/context';
import FavoriteCard from '../Cards/FavoriteCard';
import './Favorites.scss';

const Favorites = ({ filmDetails, removeFromFavorites }) => {
  const { favorited } = useContext(MyContext)
    const displayFavorites = favorited.map(film => {
      return (
        <FavoriteCard 
          id={film.id}
          key={film.id}
          title={film.title}
          releaseDate={film.release_date}
          image={film.image} 
          filmDetails={filmDetails} 
          removeFromFavorites={removeFromFavorites}
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