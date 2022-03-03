import React from 'react'; 
import FilmCard from '../Cards/FilmCard';
import './AllFilms.scss';

const AllFilms = ({ films, showFilmDetails }) => {
  const filmList = films.map(film => {
    return (
      <FilmCard 
        id={film.id}
        key={film.id}
        title={film.title}
        releaseDate={film.release_date}
        originalTitle={film.orginal_title}
        image={film.image}
        showFilmDetails={showFilmDetails}
      /> 
    )
  })
  return (
    <section className="all-film-container">
      { filmList }
    </section>
  )
}

export default AllFilms;