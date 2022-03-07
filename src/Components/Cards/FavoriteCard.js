import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteCard.scss';

const FavoriteCard = ({id, title, releaseDate, image, filmDetails, removeFromFavorites}) => {

  return(
    <section className='favorite-card-container' id={id}>
      <img className='favorite-card-image' src={image} alt={title}/> 
      <div>
        <h3 className='title'>{title}</h3>
        <p className='release-date'>{releaseDate}</p>
        <Link to={`/${id}`}>
        <button className="film-details-btn" onClick={() => filmDetails(id)}>
            <svg width="45px" height="20px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>Film Info</span>
          </button>
        </Link>
        <button className="remove-from-favorites-btn" onClick={() => removeFromFavorites(id)}>
            <svg width="45px" height="20px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>Unlike</span>
          </button>
      </div>
    </section>
  )
}

export default FavoriteCard;