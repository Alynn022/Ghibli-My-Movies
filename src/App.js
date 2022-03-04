import React, { Component } from 'react';
import apiCalls from './apiCalls';
import '../src/styles/App.scss';
import AllFilms from './Components/AllFilms/AllFilms';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import FilmDetails from './Components/FilmDetails/FilmDetails';
import { Route, Switch } from 'react-router-dom';
import Favorites from './Components/Favorites/Favorites';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      films: [],
      currentFilm: {},
      favorites: []
    }
  }

  componentDidMount = () => {
    apiCalls.getData('films')
    .then(data => {
      this.setState({ films: data})
    })
    .catch(() => `error`)
  }

  showFilmDetails = id => {
    let film
    apiCalls.getData(`films/${id}`)
    .then(data => {
      film = data
      this.setState({
        currentFilm: film
      })
    })
    .catch(() => 'error')
  }

  addToFavorites = (id) => {
    const newFilm = this.state.films.find(film => film.id === id) 
      this.setState({
        favorites: [...this.state.favorites, newFilm]
      })
    }

  render() {
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
              films={this.state.films} 
              showFilmDetails={this.showFilmDetails} 
              addToFavorites={this.addToFavorites}
            /> 
          </>  
        }
        />
        <Route exact path='/myFavorites' render={() => 
          <Favorites favFilms={this.state.favorites} />
        }
        />
       {filmDetailsRoute}
      </section>  
    )
  }
}

export default App;
