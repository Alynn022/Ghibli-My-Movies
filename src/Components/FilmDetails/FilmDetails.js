import React, { Component } from 'react';
import apiCalls from '../../apiCalls';
import './FilmDetails.scss';

class FilmDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      title: '',
      image: '',
      movieBanner: '',
      description: '',
      director: '',
      producer: '',
      releaseDate: '',
      runningTime: '',
      error: false
    }
  }
  
  componentDidMount() {
    apiCalls.getData(`films/${this.state.id}`)
    .then(data => {
      this.setState({
        id: data.id,
        title: data.title,
        image: data.image,
        movieBanner: data.movie_banner,
        description: data.description,
        director: data.description,
        producer: data.producer,
        releaseDate: data.release_date,
        runningTime: data.running_time
      })
    })
    .catch(error => {
      this.setState({ error: true})
    })
  }

  render() {
    return (
      <section className='film-details-view' id={this.state.id}>
        <img src={this.state.movieBanner} className='film-banner'/>
      </section>
    )
  }
}

export default FilmDetails;
