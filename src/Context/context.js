import React, { createContext, useState } from 'react';

const MyContext = createContext() 

const MyProvider = props => {
  const [favorited, setFavorited] = useState([])
  return (
    <MyContext.Provider value={{favorited, setFavorited}}>
      {props.children}
    </MyContext.Provider>
  )
}

export { MyContext, MyProvider }