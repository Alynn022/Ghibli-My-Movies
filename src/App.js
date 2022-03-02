import React, { Component } from 'react';
import apiCalls from './apiCalls';
import '../src/styles/App.scss';


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
        <p>hi</p>
      </main>  
    )
  }
}

export default App;
