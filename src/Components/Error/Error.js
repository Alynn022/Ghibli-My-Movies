import React, { useContext } from 'react';
import rainingTotoro from './rainingTotoro.webp';
import { MyContext } from '../../Context/context';
import './Error.scss';

const Error = () => {
  const { error } = useContext(MyContext)
  return(
    <section className='error-view'> 
      <img src={rainingTotoro} className='error-raining' alt='error'/>
      <p className='error-message'>{ error }</p>
    </section>
  )
}

export default Error;