import React, { useContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { MyContext } from '../src/Context/context';
import FilmDetails from './Components/FilmDetails/FilmDetails';
import Favorites from './Components/Favorites/Favorites';
import AllFilms from './Components/AllFilms/AllFilms';
import Header from './Components/Header/Header';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import getData from './apiCalls';
import '../src/styles/App.scss';

const App = () => {
  const { favorited, setFavorited } = useContext(MyContext)
  const { films, setFilms } = useContext(MyContext)
  const { setCurrentFilm } = useContext(MyContext)
  const { error, setError } = useContext(MyContext)
  

  useEffect(() => {
    getData()
    .then(data => {
      setFilms(data)
    })
      .catch((response) => {
        if (response.status === 404) {
          setError(`We're sorry, something went wrong. Either the page doesn't exist, or could not be found.`)
        } else {
          setError(`We're sorry, something went wrong with the server. Please try again later`)
        }
    }, [setFilms, setError])  
  })

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
        {error && <Error />}
        {!error && 
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
        }
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
