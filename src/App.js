import React, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { MyContext } from '../src/Context/context';
import FilmDetails from './Components/FilmDetails/FilmDetails';
import Favorites from './Components/Favorites/Favorites';
import AllFilms from './Components/AllFilms/AllFilms';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import apiCalls from './apiCalls';
import '../src/styles/App.scss';

const App = () => {
  const { favorited, setFavorited } = useContext(MyContext)
  const { films, setFilms } = useContext(MyContext)
  const { setCurrentFilm } = useContext(MyContext)
  
  useEffect(() => {
    let films
    apiCalls.getData('films')
    .then(data => {
      films = data
      setFilms(films)
    })
    .catch(() => `error`)
  }, [setFilms])  

  const getFilmDetails = (id) => {
    const currentFilm = films.find(film => film.id === id)
      setCurrentFilm(currentFilm)

  }

  const addToFavorites = (id) => {
    const newFilm = films.find(film => film.id === id) 
      setFavorited([...favorited, newFilm])
  }

  const removeFromFavorites = (id) => {
    const updatedFilms = favorited.filter(film => film.id !== id)
    setFavorited(updatedFilms)
  }  

    const filmDetailsRoute = 
    <Route exact path='/:id' render={({ match }) => {
      if (match.params.id !== 'myFavorites')
        return <FilmDetails id={match.params.id} />
        }
      }
    />  

    return(
      <section>
        <Header />
        <Route exact path='/' render={() => 
          <>
            <Home />
            <AllFilms 
              filmDetails={getFilmDetails} 
              addToFavorites={addToFavorites}
            /> 
          </>  
        }
        />
        <Route exact path='/myFavorites' render={() => 
          <Favorites 
            filmDetails={getFilmDetails} 
            removeFromFavorites={removeFromFavorites}
          />
        }
        />
       {filmDetailsRoute}
      </section>  
    )
  }

export default App;
