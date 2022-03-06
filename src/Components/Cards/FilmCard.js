import React, { useContext } from 'react'; 
import './FilmCard.scss';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/context';


const FilmCard = ({id, image, title, releaseDate, filmDetails, addToFavorites }) => {
  const { favorited } = useContext(MyContext)
    return (
      <section id={id} className='film-card'>
        <img className='film-card-image' src={image} alt={title}/> 
        <p className='title'>{title}</p>
        <p className='release-date'>{releaseDate}</p>
        <Link to={`/${id}`}>
          <button className='film-info-btn' onClick={() => filmDetails(id)}>Film Info</button>
        </Link>
      {!favorited.some((film) => film.id === id) && 
       (<button className='favorite-btn' onClick={() => addToFavorites(id)}>Favorite This</button>)}
        
      {favorited.some((film) => film.id === id) && (<p className='favorited'>favorited</p>)}
      </section>
    )
  }


export default FilmCard;