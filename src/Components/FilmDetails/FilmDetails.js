import React, { useContext } from 'react';
import { MyContext } from '../../Context/context';
import './FilmDetails.scss';

const FilmDetails = () => {
  const { currentFilm } = useContext(MyContext)
  return (
    <section className='film-details-view' id={currentFilm.id}>
      <h1 className='title'>{currentFilm.title}</h1>
      <h2 className='orginal-title-text'>{currentFilm.original_title}</h2>
      <img src={currentFilm.movie_banner} alt={currentFilm.title} className='film-banner'/>
      <section className='details-container'>
        <img src={currentFilm.image} alt={currentFilm.title} className='film-image'/>
        <div className='film-details'>
          <p className='description'>{currentFilm.description}</p>
          <p className='director'>Director: {currentFilm.director}</p>
          <p className='producer'>Producer: {currentFilm.producer}</p>
          <p className='release-year'>Release Year: {currentFilm.release_date}</p>
          <p className='runtime'>Runtime: {currentFilm.running_time} minutes</p>
        </div>  
      </section>
    </section>
  )
}

export default FilmDetails;
