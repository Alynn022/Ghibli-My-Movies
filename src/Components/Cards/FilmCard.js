import React from 'react'; 
import './FilmCard.scss';
import { Link } from 'react-router-dom';

const FilmCard = ({ id, title, releaseDate, image, showFilmDetails, addToFavorites }) => {
  return (
    <section id={id} className='film-card'>
      <img className='film-card-image' src={image} alt={title}/> 
      <p className='title'>{title}</p>
      <p className='release-date'>{releaseDate}</p>
      <Link to={`/${id}`}>
        <button className='film-info-btn' onClick={() => showFilmDetails(id)}>Film Info</button>
      </Link>
      <button className='favorite-btn' onClick={() => addToFavorites(id)}>Favorite This</button>
    </section>
  )
}

export default FilmCard;