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
    const displayNoGhiblis = (!favorited.length &&
      <>
        <h1> You Have No Films Saved! </h1>
        <h2>Go back home to add Ghiblis! </h2>
      </>)  
    const displayGhiblis = (favorited.length && 
        <h1> Your Ghiblis </h1>)
    return(
      <section className='favorites-view'>
        { displayNoGhiblis }
        { displayGhiblis }
        { displayFavorites }
      </section>  
    )
  }

export default Favorites;