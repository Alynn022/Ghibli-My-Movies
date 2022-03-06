import React from 'react'; 
import heroImage from './Ghibli-Hero-1-New.jpeg';
import './Home.scss';

const Home = () => {
  return(
    <section className='hero-container'>
      <img src={heroImage} className='hero-image' alt='spirted away haku'/>
      <h2>Studio Ghibli Films</h2>
    </section>  
  )
}

export default Home;