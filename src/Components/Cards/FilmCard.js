import React, { useContext } from 'react'; 
import './FilmCard.scss';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/context';


const FilmCard = ({id, image, title, releaseDate, originalTitle, filmDetails, addToFavorites }) => {
  const { favorited } = useContext(MyContext)
  const likeBtn = () => {
    ( "i" ).click(function() {
      ( "i,span" ).toggleClass( "press", 1000 );
    });
  };

    return (
      <section id={id} className='film-card'>
        <img className='film-card-image' src={image} alt={title}/> 
        <p className='title'>{title}</p>
        <p className='original-title'>{originalTitle}</p>
        <p className='release-date'>Release Date: {releaseDate}</p>
        <Link to={`/${id}`}>
          <button className='film-info-btn' onClick={() => filmDetails(id)}>Film Info</button>
        </Link>
        {!favorited.some((film) => film.id === id) && (
          <div className="heart" onClick={() => addToFavorites(id)}>
          </div>
        )}
        {favorited.some((film) => film.id === id) && (
          <div className='heart-is-active'></div>
        )}
      </section>
    )
  }

export default FilmCard;