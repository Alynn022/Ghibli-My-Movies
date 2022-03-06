import React, { useContext, useEffect } from 'react';
import apiCalls from './apiCalls';
import '../src/styles/App.scss';
import AllFilms from './Components/AllFilms/AllFilms';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import FilmDetails from './Components/FilmDetails/FilmDetails';
import { Route } from 'react-router-dom';
import Favorites from './Components/Favorites/Favorites';
import { MyContext } from '../src/Context/context';

const App = () => {
  const { favorited, setFavorited } = useContext(MyContext)
  const { films, setFilms } = useContext(MyContext)
  const { currentFilm, setCurrentFilm } = useContext(MyContext)

  
  useEffect(() => {
    apiCalls.getData('films')
    .then(data => {
      setFilms([data])
    })
    .catch(() => `error`)
  })  

  useEffect((id) => {
    let film
    apiCalls.getData(`films/${id}`)
    .then(data => {
      film = data
      setCurrentFilm([film])
    })
    .catch(() => `error`)
  }) 

  const addToFavorites = (id) => {
    const newFilm = films.find(film => film.id === id) 
      setFavorited([...favorited, newFilm])
  }

  const removeFromFavorites = (id) => {
    const updatedFilms = favorited.filter(film => film.id !== id)
    setFavorited([updatedFilms])
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
              films={films} 
              favorites={favorited}
              showFilmDetails={currentFilm} 
              addToFavorites={addToFavorites}
            /> 
          </>  
        }
        />
        <Route exact path='/myFavorites' render={() => 
          <Favorites 
            favFilms={favorited} 
            showFilmDetails={currentFilm} 
            removeFromFavorites={removeFromFavorites}
          />
        }
        />
       {filmDetailsRoute}
      </section>  
    )
  }

export default App;
