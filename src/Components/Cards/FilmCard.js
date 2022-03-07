import React, { useContext } from 'react'; 
import './FilmCard.scss';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/context';


const FilmCard = ({id, image, title, releaseDate, originalTitle, filmDetails, addToFavorites }) => {
  const { favorited } = useContext(MyContext)

    return (
      <section id={id} className='film-card'>
        <img className='film-card-image' src={image} alt={title}/> 
        <p className='title'>{title}</p>
        <p className='original-title'>{originalTitle}</p>
        <p className='release-date'>Release Date: {releaseDate}</p>
        <Link to={`/${id}`}>
        <button className="film-info-btn" onClick={() => filmDetails(id)}>
            <svg width="45px" height="20px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>Film Info</span>
          </button>
        </Link>
        {!favorited.some((film) => film.id === id) && (
          <button className="heart" onClick={() => addToFavorites(id)}>
          </button>
        )}
        {favorited.some((film) => film.id === id) && (
          <button className='heart-is-active'></button>
        )}
      </section>
    )
  }

export default FilmCard;