import React, { useContext} from 'react';
import './FilmDetails.scss';
import { MyContext } from '../../Context/context';

const FilmDetails = () => {
  const { currentFilm } = useContext(MyContext)
console.log('current', currentFilm)
    return (
      <section className='film-details-view' id={currentFilm.id}>
        <h1 className='title'>{currentFilm.title}</h1>
        <h2 className='orginal-title-text'>{currentFilm.originalTitle}</h2>
        <img src={currentFilm.movieBanner} alt={currentFilm.title} className='film-banner'/>
        <section className='details-container'>
          <img src={currentFilm.image} alt={currentFilm.title} className='film-image'/>
          <div className='film-details'>
            <p className='description'>{currentFilm.description}</p>
            <p className='director'>Director: {currentFilm.director}</p>
            <p className='producer'>Producer: {currentFilm.producer}</p>
            <p className='release-year'>Release Year: {currentFilm.releaseDate}</p>
            <p className='runtime'>Runtime: {currentFilm.runningTime} minutes</p>
          </div>  
        </section>
      </section>
    )
  }

export default FilmDetails;
