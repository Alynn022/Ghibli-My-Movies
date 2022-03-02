import React from 'react'; 
import FilmCard from '../Cards/FilmCard';
import './AllFilms.scss';

const AllFilms = ({ films }) => {
  const filmList = films.map(film => {
    return (
      <FilmCard 
        id={film.id}
        key={film.id}
        title={film.title}
        originalTitle={film.orginal_Title}
        image={film.image}
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