import React from 'react'; 
import './FilmCard.scss';

const FilmCard = ({ id, title, originalTitle, image }) => {
  return (
    <section id={id} className='film-card'>
      <img className='film-card-image' src={image} alt={title}/> 
      <p>{title}</p>
      <p>{originalTitle}</p>
    </section>
  )
}

export default FilmCard;