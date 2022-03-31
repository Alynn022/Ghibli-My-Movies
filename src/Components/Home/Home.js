import React from 'react'; 
import heroImage from './Ghibli-Hero-1-New.jpeg';
import heroImage2 from './Howls-Moving-Castle.jpg';
import './Home.scss';

const Home = () => {
  return(
    <section className='hero-container'>
      <section className='hero-images'>
        <img src={heroImage} className='hero-image' alt='spirted away haku'/>
        <img src={heroImage2} className='hero-image' alt='howls moving castle'/>
      </section>
      <h2>Studio Ghibli Films</h2>
    </section>  
  )
}

export default Home;