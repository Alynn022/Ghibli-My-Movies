import React, { useContext } from 'react';
import './FavoriteCard.scss';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/context';

const FavoriteCard = ({id, title, releaseDate, originalTitle, image, showFilmDetails, removeFromFavorites}) => {
  const { favorited, setFavorited } = useContext(MyContext)

  const setFavoriteBtn = (id) => {
    console.log('favorited', favorited)
    removeFromFavorites(id)
    const findIndex = favorited.indexOf(id)
    setFavorited([...favorited.slice(findIndex, 1)])
    console.log('fav', favorited) 
  }

  
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
        <button onClick={() => setFavoriteBtn(id)} className='remove-from-favorites-btn'>Remove from favorites</button>
      </div>
    </section>
  )
}

export default FavoriteCard;