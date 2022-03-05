import React from 'react';
import './FavoriteCard.scss';
import { Link } from 'react-router-dom';

const FavoriteCard = ({id, title, releaseDate, originalTitle, image, showFilmDetails}) => {
  return(
    <section className='favorite-card-container' id={id}>
      <img className='favorite-card-image' src={image} alt={title}/> 
      <div>
        <h3 className='title'>{title}</h3>
        <p>{originalTitle}</p>
        <p className='release-date'>{releaseDate}</p>
        <Link to={`/${id}`}>
          <button className='film-details-btn' onClick={() => showFilmDetails(id) }>Film Details</button>
        </Link>
      </div>
    </section>
  )
}

export default FavoriteCard;