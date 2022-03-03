import React, { Component } from 'react';
import apiCalls from './apiCalls';
import '../src/styles/App.scss';
import AllFilms from './Components/AllFilms/AllFilms';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      films: []
    }
  }

  componentDidMount = () => {
    apiCalls.getData('films')
    .then(data => {
      this.setState({ films: data})
    })
    .catch(() => `error`)
  }

  render() {
    return(
      <main>
        <Header />
        <Home />
        <AllFilms films={this.state.films} /> 
      </main>  
    )
  }
}

export default App;
