import React from 'react'; 
import './FilmCard.scss';
import { Link } from 'react-router-dom';

const FilmCard = ({ id, title, releaseDate, image, showFilmDetails }) => {
  return (
    <section id={id} className='film-card'>
      <img className='film-card-image' src={image} alt={title}/> 
      <p>{title}</p>
      <p>{releaseDate}</p>
      <Link to={`/${id}`}>
        <button className='film-info-btn' onClick={() => showFilmDetails(id)}>Film Info</button>
      </Link>
    </section>
  )
}

export default FilmCard;