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
        originalTitle: data.original_title,
        movieBanner: data.movie_banner,
        description: data.description,
        director: data.director,
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
        <h1>{this.state.title}</h1>
        <h2 className='orginal-title-text'>{this.state.originalTitle}</h2>
        <img src={this.state.movieBanner} alt={this.state.title} className='film-banner'/>
        <section className='details-container'>
          <img src={this.state.image} alt={this.state.title} className='film-image'/>
          <div className='film-details'>
            <p>{this.state.description}</p>
            <p>Director: {this.state.director}</p>
            <p>Producer: {this.state.producer}</p>
            <p>Release Year: {this.state.releaseDate}</p>
            <p>Runtime: {this.state.runningTime} minutes</p>
          </div>  
        </section>
      </section>
    )
  }
}

export default FilmDetails;
