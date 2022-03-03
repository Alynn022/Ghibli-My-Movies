import React from 'react'; 
import './FilmCard.scss';

const FilmCard = ({ id, title, originalTitle, image }) => {
  return (
    <section id={id} className='film-card'>
      <img className='film-card-image' src={image} alt={title}/> 
      <h2>{title}</h2>
      <h3>{originalTitle}</h3>
    </section>
  )
}

export default FilmCard;