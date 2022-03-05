import React, { useContext } from 'react'; 
import './FilmCard.scss';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context/context';


const FilmCard = ({id, image, title, releaseDate, showFilmDetails, addToFavorites }) => {
  const { favorited, setFavorited } = useContext(MyContext)

  const setFavoriteBtn = (id) => {
    addToFavorites(id)
    setFavorited([...favorited, id])  
  }
    const toggleBtn = !favorited.includes(id) && <button className='favorite-btn' onClick={() => setFavoriteBtn(id)}>Favorite This</button>
    const otherBtn = favorited.includes(id) && <p className='favorited'>favorited</p>
    return (
      <section id={id} className='film-card'>
        <img className='film-card-image' src={image} alt={title}/> 
        <p className='title'>{title}</p>
        <p className='release-date'>{releaseDate}</p>
        <Link to={`/${id}`}>
          <button className='film-info-btn' onClick={() => showFilmDetails(id)}>Film Info</button>
        </Link>
        { toggleBtn }
        { otherBtn }
      </section>
    )
  }


export default FilmCard;