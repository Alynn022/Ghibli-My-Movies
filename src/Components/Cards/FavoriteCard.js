import React from 'react';
import './FavoriteCard.scss';

const FavoriteCard = ({id, title, releaseDate, originalTitle, image}) => {
  return(
    <section className='favorite-card-container' id={id}>
      <img className='favorite-card-image' src={image} alt={title}/> 
      <div>
        <h3>{title}</h3>
        <p>{originalTitle}</p>
        <p>{releaseDate}</p>
      </div>
    </section>
  )
}

export default FavoriteCard;