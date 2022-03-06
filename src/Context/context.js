import React, { createContext, useState } from 'react';

const MyContext = createContext() 

const MyProvider = props => {
  const [favorited, setFavorited] = useState([])
  const [films, setFilms] = useState([])
  const [currentFilm, setCurrentFilm] = useState()

  return (
    <MyContext.Provider value={{favorited, setFavorited, films, setFilms, currentFilm, setCurrentFilm}}>
      {props.children}
    </MyContext.Provider>
  )
}

export { MyContext, MyProvider }