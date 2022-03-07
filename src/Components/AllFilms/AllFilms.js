import React, { useContext } from 'react'; 
import { MyContext } from '../../Context/context';
import FilmCard from '../Cards/FilmCard';
import './AllFilms.scss';

const AllFilms = ({ filmDetails, addToFavorites }) => {
  const { films } = useContext(MyContext)

  const filmList = films.map(film => {
    return (
      <FilmCard 
        id={film.id}
        key={film.id}
        title={film.title}
        originalTitle={film.original_title}
        releaseDate={film.release_date}
        image={film.image}
        filmDetails={filmDetails}
        addToFavorites={addToFavorites}
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