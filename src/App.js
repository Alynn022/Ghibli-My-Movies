import React, { Component } from 'react';
import apiCalls from './apiCalls';
import '../src/styles/App.scss';
import AllFilms from './Components/AllFilms/AllFilms';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import FilmDetails from './Components/FilmDetails/FilmDetails';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      films: [],
      currentFilm: {}
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
        filmView: true,
        currentFilm: film
      })
    })
    .catch(() => 'error')
  }

  render() {
    return(
      <main>
        <Header />
        <Route exact path='/' render={() => 
          <>
            <Home />
            <AllFilms films={this.state.films} showFilmDetails={this.showFilmDetails} 
            /> 
          </>  
        }
        />  
        <Route exact path='/:id' render={({ match }) => 
          <FilmDetails id={match.params.id} />
        }
        />
      </main>  
    )
  }
}

export default App;
